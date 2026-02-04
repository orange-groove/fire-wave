'use client'

import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Hero from '../components/Hero'

// Lazy-load below-the-fold sections to reduce initial JS bundle
const ProofSection = dynamic(() => import('../components/ProofSection'), { ssr: false })
const About = dynamic(() => import('../components/About'), { ssr: false })
const Services = dynamic(() => import('../components/Services'), { ssr: false })
const ArtistsSection = dynamic(() => import('../components/ArtistsSection'), { ssr: false })
const Gallery = dynamic(() => import('../components/Gallery'), { ssr: false })
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: false })
const LiveSound = dynamic(() => import('../components/LiveSound'), { ssr: false })
const Contact = dynamic(() => import('../components/Contact'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export default function Home() {
  return (
    <Box bg="#0a0a0a">
      <Hero />
      <ProofSection />
      <About />
      <Services />
      <ArtistsSection />
      <Gallery />
      <Pricing />
      <LiveSound />
      <Contact />
      <Footer />
    </Box>
  )
}
