import { Metadata } from 'next'
import Script from 'next/script'
import RecordingCostContent from './RecordingCostContent'

export const metadata: Metadata = {
  title: 'How Much Does It Cost to Record a Song in Savannah? | Fire Wave Sound',
  description: 'A realistic breakdown of recording studio costs in Savannah, GA—hourly rates, what affects pricing, and budget ranges for singles, EPs, and albums.',
  keywords: ['recording studio cost', 'Savannah recording prices', 'how much to record a song', 'studio rates Savannah'],
  openGraph: {
    title: 'How Much Does It Cost to Record a Song in Savannah?',
    description: 'A realistic breakdown of recording studio costs in Savannah, GA—hourly rates, what affects pricing, and budget ranges.',
    url: 'https://www.firewave912.com/blog/how-much-does-it-cost-to-record-a-song-savannah',
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: 'https://www.firewave912.com/board.jpg',
        width: 1200,
        height: 630,
        alt: 'Recording studio mixing board at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does It Cost to Record a Song in Savannah?',
    description: 'A realistic breakdown of recording studio costs in Savannah, GA.',
    images: ['https://www.firewave912.com/board.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/blog/how-much-does-it-cost-to-record-a-song-savannah',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Much Does It Cost to Record a Song in Savannah?',
  description: 'A realistic breakdown of recording studio costs in Savannah, GA—hourly rates, what affects pricing, and budget ranges for singles, EPs, and albums.',
  image: 'https://www.firewave912.com/board.jpg',
  datePublished: '2025-02-04T00:00:00.000Z',
  dateModified: '2025-02-04T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'Fire Wave Sound',
    url: 'https://www.firewave912.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fire Wave Sound',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.firewave912.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.firewave912.com/blog/how-much-does-it-cost-to-record-a-song-savannah',
  },
}

export default function RecordingCostPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <RecordingCostContent />
    </>
  )
}
