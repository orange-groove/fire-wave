import type { Metadata } from 'next'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Contact | Fire Wave Sound',
  description: 'Get in touch to book studio time or request a live sound quote. Fire Wave Sound serves Richmond Hill and Savannah, GA.',
  alternates: {
    canonical: 'https://www.firewave912.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div style={{ background: '#0a0a0a', paddingTop: 64 }}>
      <Contact />
      <Footer />
    </div>
  )
}

