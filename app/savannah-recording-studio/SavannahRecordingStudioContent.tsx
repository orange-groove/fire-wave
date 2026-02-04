'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FaDrum, FaMicrophone, FaClock, FaMusic, FaHeadphones, FaUsers } from 'react-icons/fa'
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
    title: 'Band-Ready Live Room',
    description: 'Spacious tracking room designed for full band sessions with premium acoustics and isolation.',
  },
  {
    icon: FaMicrophone,
    title: 'Pro-Grade Signal Chain',
    description: 'Industry-standard preamps, compressors, and converters for pristine audio capture.',
  },
  {
    icon: FaClock,
    title: 'Flexible Scheduling',
    description: 'Book hourly sessions, half-days, or full lockouts to fit your project timeline and budget.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Book Your Session',
    description: 'Contact us with your project details. We\'ll discuss your vision, timeline, and recommend the right package for your needs.',
  },
  {
    number: 2,
    title: 'Pre-Production Planning',
    description: 'Before your session, we\'ll create input lists, discuss arrangements, and ensure everything is ready for an efficient recording day.',
  },
  {
    number: 3,
    title: 'Track Your Music',
    description: 'Come in and capture your best performances. Our engineer guides the session while you focus on playing.',
  },
  {
    number: 4,
    title: 'Review & Next Steps',
    description: 'Listen back to your tracks and decide on mixing, mastering, or additional sessions to complete your project.',
  },
]

const faqs = [
  {
    question: 'What makes Fire Wave Sound different from other Savannah recording studios?',
    answer: 'Fire Wave Sound is built specifically for bands and artists who want to capture authentic performances. Our live room is designed for full band tracking with live drums, and our engineer understands how to get the sounds that translate to streaming platforms. We focus on efficiency and collaboration, not running up hours.',
  },
  {
    question: 'How much does it cost to record at your Savannah studio?',
    answer: 'Studio time is $60/hour, with discounted rates for half-day ($200/4hrs) and full-day lockouts ($375/8hrs). We also offer project packages starting at $400 for a single release that includes tracking, editing, mixing, and mastering. Contact us for a custom quote based on your project scope.',
  },
  {
    question: 'Can I record live drums at your studio?',
    answer: 'Absolutely. Drum tracking is one of our specialties. Our live room is acoustically treated for natural drum sounds, and we have a premium mic collection including kick, snare, toms, and overhead microphones. Many bands come specifically for our drum sounds.',
  },
  {
    question: 'Do I need to bring my own equipment?',
    answer: 'Bring your instruments and any gear you\'re comfortable with. We provide microphones, preamps, a drum kit (if needed), guitar/bass amps, and all recording equipment. If you have specific gear preferences, let us know in advance and we can accommodate.',
  },
  {
    question: 'How do I book a session at your Savannah recording studio?',
    answer: 'The easiest way is to use our contact form or email us directly. Let us know your project type, estimated timeline, and preferred dates. We typically respond within 24 hours and can often accommodate sessions within a week of booking.',
  },
]

const images = [
  { src: '/drums.jpg', alt: 'Live drum setup at Fire Wave Sound Savannah', caption: 'Band-ready tracking room' },
  { src: '/board.jpg', alt: 'Mixing console at Fire Wave recording studio', caption: 'Professional control room' },
]

export default function SavannahRecordingStudioContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Savannah Recording Studio"
        highlight="for Bands & Artists"
        subtitle="Professional recording studio serving Savannah, Richmond Hill, and Coastal Georgia. Band-ready live room, expert engineering, and results that translate."
        ctaText="Book Studio Time"
        ctaHref="#contact"
        bgImage="/bg.jpg"
      />

      <BenefitsRow benefits={benefits} />

      {/* Intro Content Section */}
      <Box bg="#0a0a0a" py={16}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={8} align="start">
              <Heading as="h2" size="xl" color="white">
                Professional Recording Near Savannah
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                If you&apos;re looking for a professional recording studio near Savannah, Fire Wave Sound offers the space, gear, and engineering to capture performances the right way.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                Located in Richmond Hill, just minutes from Savannah, our studio is built for real musicians. Whether you&apos;re tracking a full band, cutting live drums, recording vocals, or building an acoustic record from the ground up, we provide a focused environment designed for serious work.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We believe great records start with great performances. That means proper mic placement, tuned rooms, attention to detail, and sessions that move efficiently without killing the vibe. No rushed setups. No guesswork. Just clean signal paths and results that translate.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We regularly work with rock bands, country artists, singer-songwriters, and independent acts throughout Coastal Georgia. If you&apos;re ready to make something that sounds as powerful as it feels in the room, we&apos;re ready to help you do it.
              </Text>
              <Box pt={4}>
                <Text color="gray.500" fontSize="md">
                  Need something specific? Explore our{' '}
                  <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      drum tracking sessions
                    </ChakraLink>
                  </Link>{' '}
                  or{' '}
                  <Link href="/mixing-mastering-savannah" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      mixing &amp; mastering services
                    </ChakraLink>
                  </Link>.
                </Text>
              </Box>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <ImageSection images={images} title="Inside the Studio" subtitle="Purpose-built for capturing great performances" />

      <HowItWorks title="How Recording Works" steps={steps} />

      {/* Services Overview */}
      <Box bg="#111111" py={20}>
        <Container maxW="container.xl">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  What We Offer
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  Full-service recording for artists at every level
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                {[
                  { icon: FaDrum, title: 'Live Drum Tracking', desc: 'Capture powerful, authentic drum sounds in our acoustically-designed live room.' },
                  { icon: FaMicrophone, title: 'Vocal Recording', desc: 'Isolated vocal booth with premium mics and preamps for polished vocal takes.' },
                  { icon: FaMusic, title: 'Full Band Sessions', desc: 'Track together as a band for natural energy and tighter performances.' },
                  { icon: FaHeadphones, title: 'Overdubs & Layering', desc: 'Add guitars, keys, vocals, and any additional layers your song needs.' },
                  { icon: FaUsers, title: 'Producer Collaboration', desc: 'Work with our engineer to shape arrangements and capture your vision.' },
                  { icon: FaClock, title: 'Flexible Booking', desc: 'Hourly, half-day, and full-day rates to match your project and budget.' },
                ].map((service, idx) => (
                  <VStack
                    key={idx}
                    p={6}
                    bg="#1a1a1a"
                    rounded="lg"
                    border="1px solid"
                    borderColor="gray.800"
                    spacing={4}
                    align="start"
                    transition="all 0.3s ease"
                    _hover={{ borderColor: 'brand.500', transform: 'translateY(-4px)' }}
                  >
                    <Box as={service.icon} boxSize={8} color="brand.500" />
                    <Text color="white" fontWeight="600">{service.title}</Text>
                    <Text color="gray.400" fontSize="sm">{service.desc}</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <FAQSection faqs={faqs} />

      {/* <TestimonialsSection /> */}

      <FinalCTA
        title="Ready to Record?"
        subtitle="Book your session at Fire Wave Sound and let's make something you're proud of. Serving Savannah, Richmond Hill, Pooler, and all of Coastal Georgia."
        primaryCta={{ text: 'Book Studio Time', href: '/#contact' }}
        secondaryCta={{ text: 'View Pricing', href: '/#pricing' }}
      />

      <Footer />
    </Box>
  )
}
