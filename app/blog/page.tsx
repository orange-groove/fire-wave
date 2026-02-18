import { Metadata } from 'next'
import BlogIndexContent from './BlogIndexContent'

export const metadata: Metadata = {
  title: 'Blog | Fire Wave Sound',
  description: 'Session notes, recording insights, and behind-the-scenes from Fire Wave Sound in Richmond Hill, GA.',
  openGraph: {
    title: 'Blog | Fire Wave Sound',
    description: 'Session notes, recording insights, and behind-the-scenes from Fire Wave Sound.',
    url: 'https://www.firewavesound.com/blog',
    siteName: 'Fire Wave Sound',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.firewavesound.com/blog',
  },
}

export default function BlogPage() {
  return <BlogIndexContent />
}
