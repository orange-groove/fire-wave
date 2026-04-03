import { CF_PUBLIC_IMAGE_ID_MAP } from './cloudflareImages.map'

function trimTrailingSlash(value: string) {
  return value.endsWith('/') ? value.slice(0, -1) : value
}

function encodePathPreservingSlashes(value: string) {
  return value
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

function getCloudflareImagesBaseUrl(): string | null {
  const explicitBase = process.env.NEXT_PUBLIC_CF_IMAGES_BASE_URL
  if (explicitBase) return trimTrailingSlash(explicitBase)

  const accountHash = process.env.NEXT_PUBLIC_CF_IMAGES_ACCOUNT_HASH
  if (!accountHash) return null

  return `https://imagedelivery.net/${accountHash}`
}

function getCloudflareImagesVariant(): string {
  return process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT ?? 'public'
}

function isAbsoluteUrl(src: string) {
  return /^https?:\/\//i.test(src)
}

/**
 * Convert a `public/`-style path ("/foo.jpg") into a Cloudflare Images delivery URL
 * when env vars are configured. Falls back to the original `src` if not.
 */
export function toCdnSrc(src: string): string {
  if (!src) return src
  if (isAbsoluteUrl(src)) return src
  if (src.startsWith('data:') || src.startsWith('blob:')) return src
  if (!src.startsWith('/')) return src

  const baseUrl = getCloudflareImagesBaseUrl()
  if (!baseUrl) return src

  const variant = getCloudflareImagesVariant()
  const imageId = CF_PUBLIC_IMAGE_ID_MAP[src] ?? src.slice(1) // strip leading "/"

  return `${baseUrl}/${encodePathPreservingSlashes(imageId)}/${encodeURIComponent(variant)}`
}

/**
 * Like `toCdnSrc`, but guarantees an absolute URL by prefixing with `origin`
 * when the result is still a root-relative path.
 */
export function toAbsoluteCdnSrc(src: string, origin: string): string {
  const resolved = toCdnSrc(src)
  if (resolved.startsWith('/')) return `${trimTrailingSlash(origin)}${resolved}`
  return resolved
}

