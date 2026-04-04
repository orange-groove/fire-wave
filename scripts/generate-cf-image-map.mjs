import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

function parseDotEnv(content) {
  const env = {}
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue
    const eq = line.indexOf('=')
    if (eq === -1) continue
    const key = line.slice(0, eq).trim()
    let value = line.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    env[key] = value
  }
  return env
}

function loadEnvFromDotEnvLocal(repoRoot) {
  const envPath = path.join(repoRoot, '.env.local')
  if (!fs.existsSync(envPath)) return {}
  const content = fs.readFileSync(envPath, 'utf8')
  return parseDotEnv(content)
}

function listReferencedImagePaths(repoRoot) {
  const roots = [
    path.join(repoRoot, 'app'),
    path.join(repoRoot, 'components'),
    path.join(repoRoot, 'data'),
    path.join(repoRoot, 'lib'),
    path.join(repoRoot, 'pages'),
  ].filter((p) => fs.existsSync(p))

  const files = []
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        // Skip common heavy dirs if they exist
        if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue
        walk(full)
        continue
      }
      if (!entry.isFile()) continue
      if (!/\.(tsx?|jsx?|json|mdx?)$/i.test(entry.name)) continue
      // Skip generated map file and scripts (they contain example paths)
      if (full.endsWith(path.join('lib', 'cloudflareImages.map.ts'))) continue
      if (full.includes(`${path.sep}scripts${path.sep}`)) continue
      files.push(full)
    }
  }

  roots.forEach(walk)

  const found = new Set()
  const re = /['"]\/([^'"]+\.(?:png|jpe?g|webp|gif|svg))(?:\?[^'"]*)?['"]/gi

  for (const f of files) {
    let content = ''
    try {
      content = fs.readFileSync(f, 'utf8')
    } catch {
      continue
    }
    let m
    while ((m = re.exec(content))) {
      const raw = m[1]
      if (!raw) continue
      // Strip any fragment/query that got captured oddly
      const cleaned = raw.split('?')[0].split('#')[0]
      found.add(`/${cleaned}`)
    }
  }

  return Array.from(found).sort()
}

async function cfListImages({ accountId, apiToken }) {
  const images = []
  let page = 1
  const perPage = 100

  while (true) {
    const url = new URL(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    )
    url.searchParams.set('page', String(page))
    url.searchParams.set('per_page', String(perPage))

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(
        `Cloudflare API error (${res.status}) listing images.\n${text}`.trim(),
      )
    }

    const json = await res.json()
    if (!json?.success) {
      throw new Error(
        `Cloudflare API returned success=false: ${JSON.stringify(json?.errors ?? json)}`,
      )
    }

    const batch = json?.result?.images ?? json?.result ?? []
    if (!Array.isArray(batch)) {
      throw new Error(`Unexpected API response shape: ${JSON.stringify(json).slice(0, 400)}`)
    }

    images.push(...batch)

    // Cloudflare returns "result_info" in many endpoints
    const totalPages = json?.result_info?.total_pages
    if (typeof totalPages === 'number') {
      if (page >= totalPages) break
      page += 1
      continue
    }

    // Fallback: stop when less than perPage
    if (batch.length < perPage) break
    page += 1
  }

  return images
}

function normalizeFilename(filename) {
  if (!filename) return null
  // Some users upload "public/foo.jpg" or "/foo.jpg"; normalize to "foo.jpg" or "artists/x.jpg"
  return String(filename)
    .replaceAll('\\', '/')
    .replace(/^\.?\/*public\//, '')
    .replace(/^\//, '')
}

function basenameOnly(value) {
  const cleaned = String(value).replaceAll('\\', '/')
  const parts = cleaned.split('/')
  return parts[parts.length - 1] || cleaned
}

function buildIndexByFilename(cfImages) {
  const byFilenameLower = new Map()

  for (const img of cfImages) {
    const id = img?.id
    const filename = normalizeFilename(img?.filename)
    if (!id || !filename) continue

    byFilenameLower.set(filename.toLowerCase(), { id, filename })
  }

  return { byFilenameLower }
}

function renderMapTs({ mappings, missingInCloudflare, collisions }) {
  const lines = []
  lines.push('export const CF_PUBLIC_IMAGE_ID_MAP: Record<string, string> = {')
  for (const [publicPath, id] of Object.entries(mappings).sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`  ${JSON.stringify(publicPath)}: ${JSON.stringify(id)},`)
  }
  lines.push('}')
  lines.push('')

  if ((collisions && collisions.length) || (missingInCloudflare && missingInCloudflare.length)) {
    lines.push('/*')
    if (collisions && collisions.length) {
      lines.push('Basename collisions (same "/filename.ext" maps to different Cloudflare IDs):')
      for (const c of collisions) {
        lines.push(`- ${c.key}`)
        lines.push(`  - existing: ${c.existing}`)
        lines.push(`  - next:     ${c.next}`)
        lines.push(`  - from:     ${c.from}`)
      }
      lines.push('')
    }
    if (missingInCloudflare && missingInCloudflare.length) {
      lines.push('Referenced images not found in Cloudflare Images (by filename):')
      for (const p of missingInCloudflare) lines.push(`- ${p}`)
      lines.push('')
    }
    lines.push(
      'To resolve these, upload the missing files to Cloudflare Images using the same filename,',
    )
    lines.push(
      'or manually add entries here mapping "/filename.ext" -> "<cloudflare-image-id>".',
    )
    lines.push('*/')
    lines.push('')
  }

  return lines.join('\n')
}

async function main() {
  const repoRoot = process.cwd()
  const fileEnv = loadEnvFromDotEnvLocal(repoRoot)

  const accountId =
    process.env.CLOUDFLARE_ACCOUNT_ID ||
    fileEnv.CLOUDFLARE_ACCOUNT_ID ||
    process.env.CF_ACCOUNT_ID ||
    fileEnv.CF_ACCOUNT_ID

  const apiToken =
    process.env.CLOUDFLARE_API_TOKEN ||
    fileEnv.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    fileEnv.CF_API_TOKEN

  if (!accountId || !apiToken) {
    console.error(
      [
        'Missing required Cloudflare credentials.',
        '',
        'Set either environment variables or .env.local values:',
        '- CLOUDFLARE_ACCOUNT_ID=...',
        '- CLOUDFLARE_API_TOKEN=...',
        '',
        'Then run:',
        '  node scripts/generate-cf-image-map.mjs',
      ].join('\n'),
    )
    process.exit(1)
  }

  const referencedPaths = listReferencedImagePaths(repoRoot)

  const cfImages = await cfListImages({ accountId, apiToken })
  const { byFilenameLower } = buildIndexByFilename(cfImages)

  const mappings = {}
  const collisions = []

  // Map *all* Cloudflare Images by basename (lowercased) so you don't need local `public/`.
  for (const img of cfImages) {
    const id = img?.id
    const filename = normalizeFilename(img?.filename)
    if (!id || !filename) continue
    const key = `/${basenameOnly(filename).toLowerCase()}`
    if (mappings[key] && mappings[key] !== id) {
      collisions.push({ key, existing: mappings[key], next: id, from: filename })
      continue
    }
    mappings[key] = id
  }

  // Report referenced image paths whose *basename* isn't present in Cloudflare.
  const missingInCloudflare = []
  for (const refPath of referencedPaths) {
    const key = `/${basenameOnly(refPath).toLowerCase()}`
    if (!mappings[key]) missingInCloudflare.push(refPath)
  }

  const outPath = path.join(repoRoot, 'lib', 'cloudflareImages.map.ts')
  const content = renderMapTs({ mappings, missingInCloudflare, collisions })
  fs.writeFileSync(outPath, content, 'utf8')

  const summary = [
    `Wrote ${outPath}`,
    `Mapped: ${Object.keys(mappings).length}`,
    `MissingInCF: ${missingInCloudflare.length}`,
    `Collisions: ${collisions.length}`,
  ].join(' | ')
  console.log(summary)

  if (missingInCloudflare.length || collisions.length) {
    console.log('')
    console.log('Some images need manual intervention. Open lib/cloudflareImages.map.ts for details.')
  }
}

main().catch((err) => {
  console.error(err?.stack || String(err))
  process.exit(1)
})

