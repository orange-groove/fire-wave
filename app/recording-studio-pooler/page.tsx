import { Metadata } from 'next'
import Script from 'next/script'
import RecordingStudioPoolerContent from './recording-studio-pooler-content'

const baseUrl = 'https://www.firewave912.com'
const canonical = `${baseUrl}/recording-studio-pooler`

export const metadata: Metadata = {
  title: 'Recording Studio in Pooler, GA | Fire Wave Sound (Near Savannah)',
  description:
    'Looking for a recording studio near Pooler, GA? Fire Wave Sound offers live drum tracking, full band recording, vocals, and mixing & mastering with an efficient, musician-friendly process.',
  alternates: {
    canonical,
  },
  openGraph: {
    title: 'Recording Studio in Pooler, GA | Fire Wave Sound',
    description:
      'A recording studio option for Pooler, GA artists and bands: drums, full band sessions, vocals, mixing & mastering.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: `${baseUrl}/og-board.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound control room and mixing console',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recording Studio in Pooler, GA | Fire Wave Sound',
    description:
      'A recording studio option for Pooler, GA artists and bands: drums, full band sessions, vocals, mixing & mastering.',
    images: [`${baseUrl}/og-board.jpg`],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MusicRecordingStudio'],
  '@id': baseUrl,
  name: 'Fire Wave Sound',
  url: baseUrl,
  image: `${baseUrl}/og-board.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Richmond Hill',
    addressRegion: 'GA',
    postalCode: '31324',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Pooler', addressRegion: 'GA' },
    { '@type': 'City', name: 'Savannah', addressRegion: 'GA' },
    { '@type': 'City', name: 'Richmond Hill', addressRegion: 'GA' },
    'Coastal Georgia',
  ],
}

export default function RecordingStudioPoolerPage() {
  return (
    <>
      <Script
        id="localbusiness-jsonld-recording-studio-pooler"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <RecordingStudioPoolerContent />
    </>
  )
}

