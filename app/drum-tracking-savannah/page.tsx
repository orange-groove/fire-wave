import { Metadata } from 'next'
import DrumTrackingContent from './DrumTrackingContent'

export const metadata: Metadata = {
  title: 'Drum Tracking Studio in Savannah, GA | Fire Wave Sound',
  description: 'Professional drum tracking and live drum recording in Savannah, GA. Band-ready live room, premium mics, and experienced engineering. Book your session.',
  keywords: ['drum tracking Savannah', 'record live drums Savannah', 'drum recording studio Savannah GA', 'live drum recording', 'drum room'],
  openGraph: {
    title: 'Drum Tracking Studio in Savannah, GA | Fire Wave Sound',
    description: 'Professional drum tracking and live drum recording in Savannah, GA. Band-ready live room, premium mics, and experienced engineering.',
    url: 'https://www.firewave912.com/drum-tracking-savannah',
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: 'https://www.firewave912.com/og-board.jpg',
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
    images: ['https://www.firewave912.com/og-board.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/drum-tracking-savannah',
  },
}

export default function DrumTrackingSavannahPage() {
  return <DrumTrackingContent />
}
