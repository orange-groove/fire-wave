import { Metadata } from 'next'
import Script from 'next/script'
import DeltaCirclePostContent from './DeltaCirclePostContent'

export const metadata: Metadata = {
  title: 'Recording Delta Circle at Fire Wave Sound | Savannah Recording Session',
  description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA—how we built the record from a live scratch take.',
  keywords: ['Delta Circle', 'recording session', 'Savannah recording studio', 'Fire Wave Sound', 'band recording'],
  openGraph: {
    title: 'Recording Delta Circle at Fire Wave Sound',
    description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA.',
    url: 'https://www.firewave912.com/blog/recording-delta-circle-fire-wave-studio',
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: 'https://www.firewave912.com/artists/delta-circle/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Delta Circle - Recording Session at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recording Delta Circle at Fire Wave Sound',
    description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA.',
    images: ['https://www.firewave912.com/artists/delta-circle/1.jpeg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/blog/recording-delta-circle-fire-wave-studio',
  },
}

// Article JSON-LD
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Recording Delta Circle at Fire Wave Sound',
  description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA—how we built the record from a live scratch take.',
  image: 'https://www.firewave912.com/artists/delta-circle/1.jpeg',
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
    '@id': 'https://www.firewave912.com/blog/recording-delta-circle-fire-wave-studio',
  },
}

export default function DeltaCirclePostPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <DeltaCirclePostContent />
    </>
  )
}
