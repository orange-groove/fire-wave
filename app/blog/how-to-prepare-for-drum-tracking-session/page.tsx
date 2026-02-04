import { Metadata } from 'next'
import Script from 'next/script'
import DrumPrepContent from './DrumPrepContent'

export const metadata: Metadata = {
  title: 'How to Prepare for a Drum Tracking Session | Fire Wave Studio',
  description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared for studio recording.',
  keywords: ['drum tracking preparation', 'recording drums', 'drum session tips', 'studio drum recording', 'Savannah drum tracking'],
  openGraph: {
    title: 'How to Prepare for a Drum Tracking Session',
    description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared.',
    url: 'https://www.firewave912.com/blog/how-to-prepare-for-drum-tracking-session',
    siteName: 'Fire Wave Studio',
    images: [
      {
        url: 'https://www.firewave912.com/drums.jpg',
        width: 1200,
        height: 630,
        alt: 'Drum kit ready for recording at Fire Wave Studio',
      },
    ],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2025-02-04T00:00:00.000Z',
    authors: ['Fire Wave Studio'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Prepare for a Drum Tracking Session',
    description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared.',
    images: ['https://www.firewave912.com/drums.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/blog/how-to-prepare-for-drum-tracking-session',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Prepare for a Drum Tracking Session',
  description: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared for studio recording.',
  image: 'https://www.firewave912.com/drums.jpg',
  datePublished: '2025-02-04T00:00:00.000Z',
  dateModified: '2025-02-04T00:00:00.000Z',
  author: {
    '@type': 'Organization',
    name: 'Fire Wave Studio',
    url: 'https://www.firewave912.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Fire Wave Studio',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.firewave912.com/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.firewave912.com/blog/how-to-prepare-for-drum-tracking-session',
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
