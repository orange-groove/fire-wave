import { Metadata } from 'next'
import MixingMasteringContent from './MixingMasteringContent'

export const metadata: Metadata = {
  title: 'Mixing & Mastering in Savannah, GA | Fire Wave Sound',
  description: 'Professional mixing and mastering services in Savannah, GA. Get radio-ready mixes that translate on every platform. Remote and in-person options available.',
  keywords: ['mixing Savannah GA', 'mastering Savannah', 'mix engineer Savannah', 'mastering engineer Savannah', 'audio mixing services'],
  openGraph: {
    title: 'Mixing & Mastering in Savannah, GA | Fire Wave Sound',
    description: 'Professional mixing and mastering services in Savannah, GA. Get radio-ready mixes that translate on every platform.',
    url: 'https://www.firewave912.com/mixing-mastering-savannah',
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: 'https://www.firewave912.com/og-image.jpg',
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
    images: ['https://www.firewave912.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/mixing-mastering-savannah',
  },
}

export default function MixingMasteringSavannahPage() {
  return <MixingMasteringContent />
}
