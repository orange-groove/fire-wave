import { Metadata } from 'next'
import Script from 'next/script'
import DeltaCirclePostContent from './DeltaCirclePostContent'
import { toAbsoluteCdnSrc } from '../../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/recording-delta-circle-fire-wave-studio`
const ogImage = toAbsoluteCdnSrc('/delta-circle-1.jpeg', baseUrl)
const publisherLogo = toAbsoluteCdnSrc('/logo.png', baseUrl)

export const metadata: Metadata = {
  title: 'Recording Delta Circle at Fire Wave Sound | Savannah Recording Session',
  description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA—how we built the record from a live scratch take.',
  keywords: ['Delta Circle', 'recording session', 'Savannah recording studio', 'Fire Wave Sound', 'band recording'],
  openGraph: {
    title: 'Recording Delta Circle at Fire Wave Sound',
    description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
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
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

// Article JSON-LD
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Recording Delta Circle at Fire Wave Sound',
  description: 'A behind-the-scenes look at recording Delta Circle at Fire Wave Sound near Savannah, GA—how we built the record from a live scratch take.',
  image: ogImage,
  datePublished: '2025-02-04T00:00:00.000Z',
  dateModified: '2025-02-04T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'Fire Wave Sound',
    url: baseUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fire Wave Sound',
    logo: {
      '@type': 'ImageObject',
      url: publisherLogo,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': canonical,
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
