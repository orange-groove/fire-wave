import { Metadata } from 'next'
import DrumTrackingContent from './DrumTrackingContent'
import { toAbsoluteCdnSrc } from '../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/drum-tracking-savannah`
const ogImage = toAbsoluteCdnSrc('/og-board.jpg', baseUrl)

export const metadata: Metadata = {
  title: 'Drum Tracking Studio in Savannah, GA | Fire Wave Sound',
  description: 'Professional drum tracking and live drum recording in Savannah, GA. Band-ready live room, premium mics, and experienced engineering. Book your session.',
  keywords: ['drum tracking Savannah', 'record live drums Savannah', 'drum recording studio Savannah GA', 'live drum recording', 'drum room'],
  openGraph: {
    title: 'Drum Tracking Studio in Savannah, GA | Fire Wave Sound',
    description: 'Professional drum tracking and live drum recording in Savannah, GA. Band-ready live room, premium mics, and experienced engineering.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound - Drum Tracking Savannah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drum Tracking Studio in Savannah, GA | Fire Wave Sound',
    description: 'Professional drum tracking and live drum recording in Savannah, GA. Band-ready live room, premium mics, and experienced engineering.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

export default function DrumTrackingSavannahPage() {
  return <DrumTrackingContent />
}
