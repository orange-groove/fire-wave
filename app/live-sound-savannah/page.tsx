import { Metadata } from 'next'
import LiveSoundSavannahContent from './LiveSoundSavannahContent'
import { toAbsoluteCdnSrc } from '../../lib/cloudflareImages'

const baseUrl = 'https://www.firewavesound.com'
const canonical = `${baseUrl}/live-sound-savannah`
const ogImage = toAbsoluteCdnSrc('/og-board.jpg', baseUrl)

export const metadata: Metadata = {
  title: 'Live Sound Services in Savannah, GA | Fire Wave Sound',
  description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events. Get a free quote today.',
  keywords: ['live sound Savannah GA', 'live sound engineer Savannah', 'event audio Savannah', 'PA system rental Savannah', 'concert sound Savannah'],
  openGraph: {
    title: 'Live Sound Services in Savannah, GA | Fire Wave Sound',
    description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events.',
    url: canonical,
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound - Live Sound Services Savannah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Sound Services in Savannah, GA | Fire Wave Sound',
    description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events.',
    images: [ogImage],
  },
  alternates: {
    canonical,
  },
}

export default function LiveSoundSavannahPage() {
  return <LiveSoundSavannahContent />
}
