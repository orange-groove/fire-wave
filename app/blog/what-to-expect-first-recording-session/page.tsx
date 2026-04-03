import { Metadata } from 'next'
import Script from 'next/script'
import FirstSessionContent from './FirstSessionContent'
import { toAbsoluteCdnSrc } from '../../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/what-to-expect-first-recording-session`
const ogImage = toAbsoluteCdnSrc('/control_room.jpg', baseUrl)
const publisherLogo = toAbsoluteCdnSrc('/logo.png', baseUrl)

export const metadata: Metadata = {
  title: 'What to Expect During Your First Recording Session | Fire Wave Sound',
  description: 'Never recorded in a studio before? Here\'s what typically happens during a session—setup, tracking, breaks, and how to get the most out of your time.',
  keywords: ['first recording session', 'recording studio experience', 'what to expect studio', 'Savannah recording session'],
  openGraph: {
    title: 'What to Expect During Your First Recording Session',
    description: 'Never recorded in a studio before? Here\'s what typically happens during a session—setup, tracking, and how to prepare.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Control room at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect During Your First Recording Session',
    description: 'Never recorded in a studio before? Here\'s what typically happens during a session.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What to Expect During Your First Recording Session',
  description: 'Never recorded in a studio before? Here\'s what typically happens during a session—setup, tracking, breaks, and how to get the most out of your time.',
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

export default function FirstSessionPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FirstSessionContent />
    </>
  )
}
