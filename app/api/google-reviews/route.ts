import { NextResponse } from 'next/server'

type PlacesV1GetPlaceResponse = {
  id?: string
  name?: string // places/PLACE_ID
  displayName?: { text?: string; languageCode?: string }
  googleMapsUri?: string
  rating?: number
  userRatingCount?: number
  reviews?: Array<{
    rating?: number
    relativePublishTimeDescription?: string
    publishTime?: string // RFC3339
    text?: { text?: string; languageCode?: string }
    authorAttribution?: {
      displayName?: string
      uri?: string
      photoUri?: string
    }
  }>
}

function clampReviewText(text: string, maxLen: number) {
  const trimmed = text.trim()
  if (trimmed.length <= maxLen) return trimmed
  return `${trimmed.slice(0, maxLen - 1).trimEnd()}…`
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        error: 'Google reviews not configured',
        missing: {
          GOOGLE_PLACES_API_KEY: !apiKey,
          GOOGLE_PLACE_ID: !placeId,
        },
      },
      { status: 503 }
    )
  }

  // Places API (New): https://places.googleapis.com/v1/places/{placeId}
  const url = new URL(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`)
  url.searchParams.set('languageCode', 'en')

  let place: PlacesV1GetPlaceResponse
  try {
    const resp = await fetch(url.toString(), {
      // Cache on the server/CDN; the client calls this endpoint.
      next: { revalidate: 60 * 60 },
      headers: {
        'X-Goog-Api-Key': apiKey,
        // No spaces allowed in the field mask.
        'X-Goog-FieldMask': 'id,displayName,googleMapsUri,rating,userRatingCount,reviews',
      },
    })

    if (!resp.ok) {
      let body: unknown = null
      try {
        body = await resp.json()
      } catch {
        body = await resp.text()
      }
      console.error('Places API (New) error', { status: resp.status, body })
      return NextResponse.json(
        { error: 'Google reviews unavailable', status: resp.status, body },
        { status: 502 }
      )
    }

    place = (await resp.json()) as PlacesV1GetPlaceResponse
  } catch (err) {
    console.error('Places API (New) fetch failed', err)
    return NextResponse.json({ error: 'Failed to fetch Google reviews' }, { status: 502 })
  }

  const reviews = (place.reviews ?? [])
    .map((r) => ({
      authorName: r.authorAttribution?.displayName ?? 'Google user',
      authorUrl: r.authorAttribution?.uri ?? null,
      profilePhotoUrl: r.authorAttribution?.photoUri ?? null,
      rating: typeof r.rating === 'number' ? r.rating : null,
      relativeTimeDescription: r.relativePublishTimeDescription ?? null,
      text: r.text?.text ? clampReviewText(r.text.text, 420) : null,
      time: (() => {
        if (!r.publishTime) return null
        const ms = Date.parse(r.publishTime)
        return Number.isFinite(ms) ? Math.floor(ms / 1000) : null
      })(),
    }))
    .filter((r) => r.text || r.rating)
    .sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
    .slice(0, 6)

  const res = NextResponse.json(
    {
      placeId: place.id ?? placeId,
      placeName: place.displayName?.text ?? null,
      placeUrl: place.googleMapsUri ?? null,
      rating: typeof place.rating === 'number' ? place.rating : null,
      userRatingsTotal: typeof place.userRatingCount === 'number' ? place.userRatingCount : null,
      reviews,
      attribution: 'Google',
    },
    { status: 200 }
  )

  res.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  return res
}
