import type { Metadata } from 'next'
import { Box } from '@chakra-ui/react'
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
    <Box bg="#0a0a0a" pt={16}>
      <Contact />
      <Footer />
    </Box>
  )
}

