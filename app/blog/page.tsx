import { Metadata } from 'next'
import BlogIndexContent from './BlogIndexContent'

export const metadata: Metadata = {
  title: 'Blog | Fire Wave Studio',
  description: 'Session notes, recording insights, and behind-the-scenes from Fire Wave Studio in Richmond Hill, GA.',
  openGraph: {
    title: 'Blog | Fire Wave Studio',
    description: 'Session notes, recording insights, and behind-the-scenes from Fire Wave Studio.',
    url: 'https://www.firewave912.com/blog',
    siteName: 'Fire Wave Studio',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.firewave912.com/blog',
  },
}

export default function BlogPage() {
  return <BlogIndexContent />
}
