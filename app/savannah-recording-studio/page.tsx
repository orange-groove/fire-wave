import { Metadata } from 'next'
import SavannahRecordingStudioContent from './SavannahRecordingStudioContent'
import { toAbsoluteCdnSrc } from '../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/savannah-recording-studio`
const ogImage = toAbsoluteCdnSrc('/og-board.jpg', baseUrl)

export const metadata: Metadata = {
  title: 'Savannah Recording Studio | Fire Wave Sound (Bands & Artists)',
  description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services. Book studio time today.',
  keywords: ['Savannah recording studio', 'recording studio Savannah GA', 'studio time Savannah', 'band recording Savannah', 'live drum recording'],
  openGraph: {
    title: 'Savannah Recording Studio | Fire Wave Sound',
    description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound - Savannah Recording Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Savannah Recording Studio | Fire Wave Sound',
    description: 'Professional recording studio in Savannah, GA. Band-ready live room with drum tracking, vocal booths, and full production services.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

export default function SavannahRecordingStudioPage() {
  return <SavannahRecordingStudioContent />
}
