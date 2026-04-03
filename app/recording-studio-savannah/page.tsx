import { Metadata } from 'next'
import Script from 'next/script'
import RecordingStudioSavannahContent from './recording-studio-savannah-content'
import { toAbsoluteCdnSrc } from '../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/recording-studio-savannah`
const ogImage = toAbsoluteCdnSrc('/og-board.jpg', baseUrl)

export const metadata: Metadata = {
  title: 'Recording Studio in Savannah, GA | Fire Wave Sound (Bands & Artists)',
  description:
    'A band-ready recording studio near Savannah, GA for live drum tracking, full band sessions, vocals, and mixing & mastering. Practical workflow, clean results, no fluff.',
  alternates: {
    canonical,
  },
  openGraph: {
    title: 'Recording Studio in Savannah, GA | Fire Wave Sound',
    description:
      'Band-ready recording studio near Savannah, GA for live drum tracking, full band recording, vocals, and mixing & mastering.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
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
    title: 'Recording Studio in Savannah, GA | Fire Wave Sound',
    description:
      'Band-ready recording studio near Savannah, GA for live drum tracking, full band recording, vocals, and mixing & mastering.',
    images: [ogImage],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MusicRecordingStudio'],
  '@id': baseUrl,
  name: 'Fire Wave Sound',
  url: baseUrl,
  image: ogImage,
  areaServed: [
    { '@type': 'City', name: 'Savannah', addressRegion: 'GA' },
    { '@type': 'City', name: 'Richmond Hill', addressRegion: 'GA' },
    { '@type': 'City', name: 'Pooler', addressRegion: 'GA' },
    'Coastal Georgia',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Richmond Hill',
    addressRegion: 'GA',
    postalCode: '31324',
    addressCountry: 'US',
  },
}

export default function RecordingStudioSavannahPage() {
  return (
    <>
      <Script
        id="localbusiness-jsonld-recording-studio-savannah"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <RecordingStudioSavannahContent />
    </>
  )
}

