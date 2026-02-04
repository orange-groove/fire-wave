import { Metadata } from 'next'
import SavannahRecordingStudioContent from './SavannahRecordingStudioContent'

export const metadata: Metadata = {
  title: 'Savannah Recording Studio | Fire Wave Studio (Bands & Artists)',
  description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services. Book studio time today.',
  keywords: ['Savannah recording studio', 'recording studio Savannah GA', 'studio time Savannah', 'band recording Savannah', 'live drum recording'],
  openGraph: {
    title: 'Savannah Recording Studio | Fire Wave Studio',
    description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services.',
    url: 'https://www.firewave912.com/savannah-recording-studio',
    siteName: 'Fire Wave Studio',
    images: [
      {
        url: 'https://www.firewave912.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fire Wave Studio - Savannah Recording Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savannah Recording Studio | Fire Wave Studio',
    description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services.',
    images: ['https://www.firewave912.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/savannah-recording-studio',
  },
}

export default function SavannahRecordingStudioPage() {
  return <SavannahRecordingStudioContent />
}
