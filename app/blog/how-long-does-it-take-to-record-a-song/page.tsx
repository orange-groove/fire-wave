import { Metadata } from 'next'
import Script from 'next/script'
import RecordingTimelineContent from './RecordingTimelineContent'

const baseUrl = 'https://www.firewave912.com'
const canonical = `${baseUrl}/blog/how-long-does-it-take-to-record-a-song`

export const metadata: Metadata = {
  title: 'How Long Does It Take to Record a Song? | Fire Wave Sound',
  description:
    'A realistic breakdown of how long it takes to record a song—tracking, vocals, editing, mixing, and mastering—plus what speeds things up (and what slows sessions down).',
  keywords: [
    'how long to record a song',
    'studio recording timeline',
    'recording session time',
    'mixing mastering time',
    'Savannah recording studio',
  ],
  openGraph: {
    title: 'How Long Does It Take to Record a Song?',
    description:
      'A realistic breakdown of tracking, vocals, editing, mixing, and mastering—plus what speeds sessions up (and what slows them down).',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: `${baseUrl}/board.jpg`,
        width: 1200,
        height: 630,
        alt: 'Recording studio mixing board at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Long Does It Take to Record a Song?',
    description:
      'A realistic breakdown of tracking, vocals, editing, mixing, and mastering—plus what speeds sessions up (and what slows them down).',
    images: [`${baseUrl}/board.jpg`],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How Long Does It Take to Record a Song?',
  description:
    'A realistic breakdown of how long it takes to record a song—tracking, vocals, editing, mixing, and mastering—plus what speeds things up (and what slows sessions down).',
  image: `${baseUrl}/board.jpg`,
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
      url: `${baseUrl}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': canonical,
  },
}

export default function RecordingTimelinePage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <RecordingTimelineContent />
    </>
  )
}

