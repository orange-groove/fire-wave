'use client'

import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import ProofSection from '../components/ProofSection'
import About from '../components/About'
import Services from '../components/Services'
import TestimonialsSection from '../components/TestimonialsSection'
import ArtistsSection from '../components/ArtistsSection'
import Gallery from '../components/Gallery'
import Pricing from '../components/Pricing'
import LiveSound from '../components/LiveSound'
import Contact from '../components/Contact'
import LocalSeoFooter from '../components/LocalSeoFooter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box bg="#0a0a0a">
      <Hero />
      <ProofSection />
      <About />
      <Services />
      {/* <TestimonialsSection /> */}
      <ArtistsSection />
      <Gallery />
      <Pricing />
      <LiveSound />
      <Contact />
      <LocalSeoFooter />
      <Footer />
    </Box>
  )
}
