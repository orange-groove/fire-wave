import { Metadata } from 'next'
import MixingMasteringContent from './MixingMasteringContent'
import { toAbsoluteCdnSrc } from '../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/mixing-mastering-savannah`
const ogImage = toAbsoluteCdnSrc('/og-board.jpg', baseUrl)

export const metadata: Metadata = {
  title: 'Mixing & Mastering in Savannah, GA | Fire Wave Sound',
  description: 'Professional mixing and mastering services in Savannah, GA. Get radio-ready mixes that translate on every platform. Remote and in-person options available.',
  keywords: ['mixing Savannah GA', 'mastering Savannah', 'mix engineer Savannah', 'mastering engineer Savannah', 'audio mixing services'],
  openGraph: {
    title: 'Mixing & Mastering in Savannah, GA | Fire Wave Sound',
    description: 'Professional mixing and mastering services in Savannah, GA. Get radio-ready mixes that translate on every platform.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound - Mixing and Mastering Savannah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mixing & Mastering in Savannah, GA | Fire Wave Sound',
    description: 'Professional mixing and mastering services in Savannah, GA. Get radio-ready mixes that translate on every platform.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

export default function MixingMasteringSavannahPage() {
  return <MixingMasteringContent />
}
