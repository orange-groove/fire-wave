import { Metadata } from 'next'
import Script from 'next/script'
import RecordingStudioRichmondHillContent from './recording-studio-richmond-hill-content'

const baseUrl = 'https://www.firewave912.com'
const canonical = `${baseUrl}/recording-studio-richmond-hill`

export const metadata: Metadata = {
  title: 'Recording Studio in Richmond Hill, GA | Fire Wave Sound',
  description:
    'Fire Wave Sound is a Richmond Hill, GA recording studio for bands and artists—live drums, full-band tracking, vocals, and mixing & mastering with a clean, efficient workflow.',
  alternates: {
    canonical,
  },
  openGraph: {
    title: 'Recording Studio in Richmond Hill, GA | Fire Wave Sound',
    description:
      'Richmond Hill, GA recording studio for bands and artists: live drum tracking, full band recording, vocals, mixing & mastering.',
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
    title: 'Recording Studio in Richmond Hill, GA | Fire Wave Sound',
    description:
      'Richmond Hill, GA recording studio for bands and artists: live drums, full band tracking, vocals, mixing & mastering.',
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
    { '@type': 'City', name: 'Richmond Hill', addressRegion: 'GA' },
    { '@type': 'City', name: 'Savannah', addressRegion: 'GA' },
    { '@type': 'City', name: 'Pooler', addressRegion: 'GA' },
    'Coastal Georgia',
  ],
}

export default function RecordingStudioRichmondHillPage() {
  return (
    <>
      <Script
        id="localbusiness-jsonld-recording-studio-richmond-hill"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <RecordingStudioRichmondHillContent />
    </>
  )
}

