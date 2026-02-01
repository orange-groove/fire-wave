'use client'

import { Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Gallery from '../components/Gallery'
import LiveSound from '../components/LiveSound'
import Gear from '../components/Gear'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Box bg="#0a0a0a">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <LiveSound />
      {/* <Gear />
      <Clients />
      <Testimonials /> */}
      <Contact />
      <Footer />
    </Box>
  )
}
