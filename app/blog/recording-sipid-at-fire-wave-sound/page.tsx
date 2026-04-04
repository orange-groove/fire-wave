import { Metadata } from 'next'
import Script from 'next/script'
import SipidPostContent from './SipidPostContent'
import { toAbsoluteCdnSrc } from '../../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/recording-sipid-at-fire-wave-sound`

const ogImage = toAbsoluteCdnSrc('/sipid_30.jpg', baseUrl)
const publisherLogo = toAbsoluteCdnSrc('/logo.png', baseUrl)

export const metadata: Metadata = {
  title: 'Recording Sipid at Fire Wave Sound | Fire Wave Sound',
  description:
    'We had a great session with Sipid at Fire Wave Sound, building their song from a scratch track to a fully layered recording with click-tight performances, amp capture through a Two Notes Torpedo, and stacked vocals.',
  keywords: [
    'Sipid',
    'recording session',
    'Savannah recording studio',
    'Richmond Hill recording studio',
    'Two Notes Torpedo',
    'stacked vocals',
    'scratch track',
  ],
  openGraph: {
    title: 'Recording Sipid at Fire Wave Sound',
    description:
      'A studio recap: scratch track to click, layered production, Two Notes Torpedo amp capture, and stacked vocals at Fire Wave Sound.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Sipid recording at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-04-03T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recording Sipid at Fire Wave Sound',
    description:
      'A studio recap: scratch track to click, layered production, Two Notes Torpedo amp capture, and stacked vocals at Fire Wave Sound.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Recording Sipid at Fire Wave Sound',
  description:
    'We had a great session with Sipid at Fire Wave Sound, building their song from a scratch track to a fully layered recording with click-tight performances, amp capture through a Two Notes Torpedo, and stacked vocals.',
  image: ogImage,
  datePublished: '2026-04-03T00:00:00.000Z',
  dateModified: '2026-04-03T00:00:00.000Z',
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

export default function RecordingSipidPostPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SipidPostContent />
    </>
  )
}

