import { Metadata } from 'next'
import Script from 'next/script'
import DrumPrepContent from './DrumPrepContent'
import { toAbsoluteCdnSrc } from '../../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/blog/how-to-prepare-for-drum-tracking-session`
const ogImage = toAbsoluteCdnSrc('/drums.jpg', baseUrl)
const publisherLogo = toAbsoluteCdnSrc('/logo.png', baseUrl)

export const metadata: Metadata = {
  title: 'How to Prepare for a Drum Tracking Session | Fire Wave Sound',
  description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared for studio recording.',
  keywords: ['drum tracking preparation', 'recording drums', 'drum session tips', 'studio drum recording', 'Savannah drum tracking'],
  openGraph: {
    title: 'How to Prepare for a Drum Tracking Session',
    description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Drum kit ready for recording at Fire Wave Sound',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-04T00:00:00.000Z',
    authors: ['Fire Wave Sound'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare for a Drum Tracking Session',
    description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Prepare for a Drum Tracking Session',
  description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared for studio recording.',
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

export default function DrumPrepPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <DrumPrepContent />
    </>
  )
}
