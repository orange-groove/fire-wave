import { Metadata } from 'next'
import RehearsalSpaceSavannahContent from './RehearsalSpaceSavannahContent'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/rehearsal-space-savannah`

export const metadata: Metadata = {
  title: 'Rehearsal Space in Savannah, GA | Fire Wave Sound',
  description:
    'Private rehearsal space for bands and artists near Savannah, GA. $50/hr with a 2-hour minimum. Check availability and book rehearsal time.',
  keywords: [
    'rehearsal space Savannah GA',
    'band rehearsal space Savannah',
    'practice space Savannah',
    'rehearsal room Savannah',
    'rehearsal space near Savannah',
  ],
  alternates: {
    canonical,
  },
  openGraph: {
    title: 'Rehearsal Space in Savannah, GA | Fire Wave Sound',
    description:
      'Private rehearsal space for bands and artists near Savannah, GA. $50/hr with a 2-hour minimum.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: `${baseUrl}/og-board.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound rehearsal space',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rehearsal Space in Savannah, GA | Fire Wave Sound',
    description:
      'Private rehearsal space for bands and artists near Savannah, GA. $50/hr with a 2-hour minimum.',
    images: [`${baseUrl}/og-board.jpg`],
  },
}

export default function RehearsalSpaceSavannahPage() {
  return <RehearsalSpaceSavannahContent />
}

