import { Metadata } from 'next'
import Script from 'next/script'
import LiveVsProgrammedDrumsContent from './LiveVsProgrammedDrumsContent'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/recording-live-drums-vs-programmed-drums`

export const metadata: Metadata = {
  title: 'Recording Live Drums vs Programmed Drums — What’s the Difference? | Fire Wave Sound',
  description:
    'A practical comparison of live drum recording vs programmed drums: feel, tone, workflow, budget, genre, and a hybrid approach—so you can pick what fits your song.',
  keywords: [
    'live drums vs programmed drums',
    'recording live drums',
    'programmed drums',
    'drum tracking Savannah',
    'recording studio Savannah',
  ],
  openGraph: {
    title: 'Recording Live Drums vs Programmed Drums — What’s the Difference?',
    description:
      'Feel, tone, workflow, budget, and genre—what actually separates live drum recording from programmed drums (and when a hybrid makes sense).',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: `${baseUrl}/drums.jpg`,
        width: 1200,
        height: 630,
        alt: 'Live drum setup at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recording Live Drums vs Programmed Drums — What’s the Difference?',
    description:
      'A practical comparison of live drum recording vs programmed drums—plus when a hybrid approach is the best move.',
    images: [`${baseUrl}/drums.jpg`],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Recording Live Drums vs Programmed Drums — What’s the Difference?',
  description:
    'A practical comparison of live drum recording vs programmed drums: feel, tone, workflow, budget, genre, and a hybrid approach—so you can pick what fits your song.',
  image: `${baseUrl}/drums.jpg`,
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

export default function LiveVsProgrammedDrumsPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <LiveVsProgrammedDrumsContent />
    </>
  )
}

