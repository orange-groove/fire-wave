'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaDrum, FaMicrophone, FaMusic, FaCheckCircle } from 'react-icons/fa'
import ServiceHero from '../../components/ServiceHero'
import BenefitsRow from '../../components/BenefitsRow'
import HowItWorks from '../../components/HowItWorks'
import ImageSection from '../../components/ImageSection'
import FAQSection from '../../components/FAQSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const benefits = [
  {
    icon: FaDrum,
    title: 'Purpose-Built Drum Room',
    description: 'Acoustically treated live room designed for natural, powerful drum sounds with proper decay.',
  },
  {
    icon: FaMicrophone,
    title: 'Premium Mic Collection',
    description: 'Industry-standard microphones for kick, snare, toms, and overheads—the full professional setup.',
  },
  {
    icon: FaMusic,
    title: 'Band-Ready Workflow',
    description: 'Track with your full band or play to click and scratch tracks. We accommodate your process.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Pre-Production Call',
    description: 'We discuss your songs, tempo maps, and the drum sounds you\'re going for. Bring reference tracks so we\'re aligned on the vibe.',
  },
  {
    number: 2,
    title: 'Setup & Sound Check',
    description: 'We mic up the kit, tune drums as needed, and dial in sounds. This is where we capture the tone you\'re after.',
  },
  {
    number: 3,
    title: 'Track Your Songs',
    description: 'Record your drum parts with real-time feedback. We\'ll comp takes and make sure every song has solid performances.',
  },
  {
    number: 4,
    title: 'Edit & Deliver',
    description: 'We clean up the tracks, export stems, and deliver files ready for mixing—or continue with us for the full production.',
  },
]

const faqs = [
  {
    question: 'What makes Fire Wave a good choice for drum tracking in Savannah?',
    answer: 'We record live drums in a dedicated tracking space that gives us the flexibility to shape the sound properly. We focus on tuning, mic placement, and getting tones right at the source instead of relying on heavy processing later. That approach consistently delivers drum tracks with punch, clarity, and headroom.',
  },
  {
    question: 'Do I need to bring my own drum kit?',
    answer: 'You can bring your own kit if you prefer your specific drums and cymbals. We also have a house kit available if you\'d rather travel light. Let us know in advance so we can have everything set up and ready when you arrive.',
  },
  {
    question: 'How long does a drum tracking session typically take?',
    answer: 'Most bands book a half-day (4 hours) or full-day (8 hours) for drum tracking. A 4-hour session typically allows for setup, sound check, and tracking 3-5 songs depending on complexity. We require a 4-hour minimum for drum sessions.',
  },
  {
    question: 'Can I track drums to click or scratch tracks?',
    answer: 'Absolutely. We can set up a click track, import your demo recordings, or have band members play live in the room with the drummer. Whatever helps capture the best performance, we accommodate.',
  },
  {
    question: 'What microphones do you use for drum recording?',
    answer: 'We use a combination of dynamic and condenser microphones on each part of the kit: dedicated kick mics (inside and outside), snare top and bottom, individual tom mics, and quality overhead condensers for cymbals and room sound. The specific mics depend on the sound we\'re going for.',
  },
]

const images = [
  { src: '/drums.jpg', alt: 'Drum kit setup at Fire Wave Sound Savannah', caption: 'Professional drum setup' },
  { src: '/drums_2.jpg', alt: 'Drum tracking room Fire Wave Sound', caption: 'Acoustically treated live room' },
]

export default function DrumTrackingContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Drum Tracking Studio"
        highlight="in Savannah, GA"
        subtitle="Capture powerful, authentic drum sounds in a room built for live tracking. Premium mics, experienced engineering, killer tones."
        ctaText="Book a Drum Session"
        ctaHref="#contact"
        bgImage="/drums.jpg"
      />

      <BenefitsRow benefits={benefits} />

      {/* Intro Content Section */}
      <Box bg="#0a0a0a" py={16}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={8} align="start">
              <Heading as="h2" size="xl" color="white">
                There&apos;s a Difference Between Programmed Drums<br />and a Kit Played in an Actual Room.
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                At Fire Wave Sound in Richmond Hill, we record live drums in a dedicated tracking space designed to give the kit room to breathe. It&apos;s not about hype — it&apos;s about capturing a solid performance with proper mic placement, good gain staging, and attention to detail.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                Whether you&apos;re tracking rock, country, indie, or something stripped back, we focus on getting a strong sound at the source so the mix doesn&apos;t have to fix what should&apos;ve been right from the start.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We use reliable studio-grade microphones and clean signal paths, but more importantly, we take the time to position the kit and dial in tones before hitting record.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                If live drums are part of your sound, we&apos;ll capture them the way they&apos;re meant to be played.
              </Text>
              <Box pt={4}>
                <Text color="gray.500" fontSize="md">
                  Need full production? Our{' '}
                  <Link href="/savannah-recording-studio" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      Savannah recording studio
                    </ChakraLink>
                  </Link>{' '}
                  handles everything from tracking to{' '}
                  <Link href="/mixing-mastering-savannah" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      mixing and mastering
                    </ChakraLink>
                  </Link>.
                </Text>
                <Text color="gray.500" fontSize="md" mt={2}>
                  Helpful reads:{' '}
                  <Link href="/blog/recording-live-drums-vs-programmed-drums" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      live vs programmed drums
                    </ChakraLink>
                  </Link>
                  ,{' '}
                  <Link href="/blog/how-to-prepare-for-drum-tracking-session" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      how to prepare for drum tracking
                    </ChakraLink>
                  </Link>
                  , and{' '}
                  <Link href="/blog/what-should-you-bring-to-a-studio-session" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      what to bring to a studio session
                    </ChakraLink>
                  </Link>
                  .
                </Text>
              </Box>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <ImageSection images={images} title="The Drum Room" subtitle="Built for capturing great performances" />

      {/* What You Get */}
      <Box bg="#111111" py={20}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  What&apos;s Included
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  Everything you need for professional drum tracks
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                <VStack align="start" spacing={4} p={6} bg="#1a1a1a" rounded="lg" border="1px solid" borderColor="gray.800">
                  <Text color="white" fontWeight="600" fontSize="lg">Room & Setup</Text>
                  {[
                    'Acoustically treated live room',
                    'Adjustable room sound (bright to dead)',
                    'Comfortable headphone monitoring',
                    'Click track and scratch track playback',
                    'Climate-controlled environment',
                  ].map((item, idx) => (
                    <HStack key={idx} spacing={3}>
                      <Icon as={FaCheckCircle} color="brand.500" />
                      <Text color="gray.400">{item}</Text>
                    </HStack>
                  ))}
                </VStack>

                <VStack align="start" spacing={4} p={6} bg="#1a1a1a" rounded="lg" border="1px solid" borderColor="gray.800">
                  <Text color="white" fontWeight="600" fontSize="lg">Mics & Engineering</Text>
                  {[
                    'Full drum mic kit (kick, snare, toms, OH)',
                    'Quality preamps and converters',
                    'Experienced drum engineer',
                    'Multiple mic options per source',
                    'Phase-aligned multi-track recording',
                  ].map((item, idx) => (
                    <HStack key={idx} spacing={3}>
                      <Icon as={FaCheckCircle} color="brand.500" />
                      <Text color="gray.400">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </SimpleGrid>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <HowItWorks title="How Drum Tracking Works" steps={steps} />

      {/* Session Rates */}
      <Box bg="#0f0f0f" py={20}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={12}>
              <Heading as="h2" size="xl" color="white" textAlign="center">
                Drum Session Rates
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                <VStack
                  p={8}
                  bg="#1a1a1a"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.800"
                  spacing={4}
                  transition="all 0.3s ease"
                  _hover={{ borderColor: 'brand.500' }}
                >
                  <Text color="white" fontWeight="600" fontSize="xl">Half-Day Session</Text>
                  <Text color="brand.400" fontWeight="bold" fontSize="3xl">$200</Text>
                  <Text color="gray.400" fontSize="sm" textAlign="center">4 hours — setup, sound check, and tracking 3-5 songs</Text>
                </VStack>

                <VStack
                  p={8}
                  bg="#1a1a1a"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.800"
                  spacing={4}
                  transition="all 0.3s ease"
                  _hover={{ borderColor: 'brand.500' }}
                >
                  <Text color="white" fontWeight="600" fontSize="xl">Full-Day Lockout</Text>
                  <Text color="brand.400" fontWeight="bold" fontSize="3xl">$375</Text>
                  <Text color="gray.400" fontSize="sm" textAlign="center">8 hours — full album tracking or complex sessions</Text>
                </VStack>
              </SimpleGrid>

              <Text color="gray.500" fontSize="sm" textAlign="center">
                4-hour minimum for drum sessions. Additional setup time may apply for complex mic configurations.
              </Text>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <FAQSection faqs={faqs} />

      {/* <TestimonialsSection /> */}

      <FinalCTA
        title="Ready to Track Drums?"
        subtitle="Book a session at Fire Wave Sound and capture the drum sounds your music deserves. Serving bands from Savannah, Richmond Hill, and all of Coastal Georgia."
        primaryCta={{ text: 'Book Your Session', href: '/#contact' }}
        secondaryCta={{ text: 'View Full Pricing', href: '/#pricing' }}
      />

      <Footer />
    </Box>
  )
}
