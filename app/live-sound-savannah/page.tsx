import { Metadata } from 'next'
import LiveSoundSavannahContent from './LiveSoundSavannahContent'

export const metadata: Metadata = {
  title: 'Live Sound Services in Savannah, GA | Fire Wave Sound',
  description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events. Get a free quote today.',
  keywords: ['live sound Savannah GA', 'live sound engineer Savannah', 'event audio Savannah', 'PA system rental Savannah', 'concert sound Savannah'],
  openGraph: {
    title: 'Live Sound Services in Savannah, GA | Fire Wave Sound',
    description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events.',
    url: 'https://www.firewavesound.com/live-sound-savannah',
    siteName: 'Fire Wave Sound',
    images: [
      {
        url: 'https://www.firewavesound.com/og-board.jpg',
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
    images: ['https://www.firewavesound.com/og-board.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewavesound.com/live-sound-savannah',
  },
}

export default function LiveSoundSavannahPage() {
  return <LiveSoundSavannahContent />
}
