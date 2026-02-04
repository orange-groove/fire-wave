import { Metadata } from 'next'
import LiveSoundSavannahContent from './LiveSoundSavannahContent'

export const metadata: Metadata = {
  title: 'Live Sound Services in Savannah, GA | Fire Wave Studio',
  description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events. Get a free quote today.',
  keywords: ['live sound Savannah GA', 'live sound engineer Savannah', 'event audio Savannah', 'PA system rental Savannah', 'concert sound Savannah'],
  openGraph: {
    title: 'Live Sound Services in Savannah, GA | Fire Wave Studio',
    description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events.',
    url: 'https://www.firewave912.com/live-sound-savannah',
    siteName: 'Fire Wave Studio',
    images: [
      {
        url: 'https://www.firewave912.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fire Wave Studio - Live Sound Services Savannah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Sound Services in Savannah, GA | Fire Wave Studio',
    description: 'Professional live sound engineering and event audio in Savannah, GA. Concerts, festivals, weddings, and corporate events.',
    images: ['https://www.firewave912.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.firewave912.com/live-sound-savannah',
  },
}

export default function LiveSoundSavannahPage() {
  return <LiveSoundSavannahContent />
}
