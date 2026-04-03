import { NextResponse } from 'next/server'
import { getSanityClient } from '../../../lib/sanity.client'
import { servicesQuery } from '../../../lib/sanity.queries'

export async function GET() {
  try {
    // If env vars are missing, return empty array so frontend can fall back.
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      return NextResponse.json([])
    }

    const client = getSanityClient()
    if (!client) return NextResponse.json([])

    const services = await client.fetch(servicesQuery)
    return NextResponse.json(services)
  } catch (err) {
    console.error('Sanity services API error:', err)
    return NextResponse.json([], { status: 200 })
  }
}

