import { Metadata } from 'next'
import Script from 'next/script'
import StudioSessionChecklistContent from './StudioSessionChecklistContent'
import { toAbsoluteCdnSrc } from '../../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/what-should-you-bring-to-a-studio-session`
const ogImage = toAbsoluteCdnSrc('/guitars.jpg', baseUrl)
const publisherLogo = toAbsoluteCdnSrc('/logo.png', baseUrl)

export const metadata: Metadata = {
  title: 'What Should You Bring to a Studio Session? | Fire Wave Sound',
  description:
    'A practical checklist for studio sessions: what guitarists, drummers, vocalists, and keys/bass players should bring—plus what you don’t need and how to avoid wasted time.',
  keywords: [
    'what to bring to a recording studio',
    'studio session checklist',
    'recording session preparation',
    'what to bring for drum tracking',
    'Savannah recording studio',
  ],
  openGraph: {
    title: 'What Should You Bring to a Studio Session?',
    description:
      'A practical checklist for studio sessions—what to bring, what not to bring, and how to keep your recording day moving.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Guitars ready for a recording session at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Should You Bring to a Studio Session?',
    description:
      'A practical checklist for studio sessions—what to bring, what not to bring, and how to keep your recording day moving.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Should You Bring to a Studio Session?',
  description:
    'A practical checklist for studio sessions: what guitarists, drummers, vocalists, and keys/bass players should bring—plus what you don’t need and how to avoid wasted time.',
  image: ogImage,
  datePublished: '2026-02-04T00:00:00.000Z',
  dateModified: '2026-02-04T00:00:00.000Z',
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

export default function StudioSessionChecklistPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <StudioSessionChecklistContent />
    </>
  )
}

