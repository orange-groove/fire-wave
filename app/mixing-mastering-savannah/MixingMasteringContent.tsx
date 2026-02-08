'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink, HStack, Icon } from '@chakra-ui/react'
import Link from 'next/link'
import { FaHeadphones, FaCloudUploadAlt, FaCheckCircle, FaRedo } from 'react-icons/fa'
import ServiceHero from '../../components/ServiceHero'
import BenefitsRow from '../../components/BenefitsRow'
import HowItWorks from '../../components/HowItWorks'
import FAQSection from '../../components/FAQSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const benefits = [
  {
    icon: FaHeadphones,
    title: 'Mixes That Translate',
    description: 'Your music will sound great on earbuds, car speakers, club systems, and streaming platforms.',
  },
  {
    icon: FaCloudUploadAlt,
    title: 'Remote-Friendly',
    description: 'Send us your tracks from anywhere. We work with artists across the country, not just Savannah.',
  },
  {
    icon: FaRedo,
    title: 'Revisions Included',
    description: 'Every mix includes revision rounds so we can dial in exactly what you\'re hearing.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Submit Your Tracks',
    description: 'Send us your recorded stems (individual tracks) via Dropbox, Google Drive, or WeTransfer. Include any reference tracks or notes about your vision.',
  },
  {
    number: 2,
    title: 'Initial Mix',
    description: 'We create a full mix of your song, balancing levels, adding EQ, compression, and effects to bring out the best in your recording.',
  },
  {
    number: 3,
    title: 'Review & Revise',
    description: 'Listen to the mix and send feedback. We make revisions until you\'re happy with the result (up to 3 rounds included).',
  },
  {
    number: 4,
    title: 'Mastering & Delivery',
    description: 'Once the mix is approved, we master the track for streaming loudness and deliver high-quality files ready for release.',
  },
]

const faqs = [
  {
    question: 'What\'s the difference between mixing and mastering?',
    answer: 'Mixing is the process of balancing and processing individual tracks (vocals, drums, guitars, etc.) into a cohesive stereo mix. Mastering is the final step that optimizes the overall sound for distribution—adjusting loudness, EQ, and dynamics so your song sounds professional on all playback systems.',
  },
  {
    question: 'How much does mixing and mastering cost in Savannah?',
    answer: 'Mixing is $150 per song, or $125/song for EPs and albums (5+ songs). Mastering is typically included in our project packages, or available separately. Contact us for a custom quote based on your project size and complexity.',
  },
  {
    question: 'Can you mix tracks I recorded somewhere else?',
    answer: 'Absolutely. We mix tracks from home studios, other professional studios, and remote sessions all the time. As long as you can provide quality stems (individual track files), we can work with it. We\'ll let you know if there are any issues with your recordings before starting.',
  },
  {
    question: 'How do I send you my tracks for mixing?',
    answer: 'Export each track as a separate audio file (WAV or AIFF, 24-bit preferred) starting from the same point. Upload to Dropbox, Google Drive, or WeTransfer and send us the link. Include any notes about your vision, reference tracks you like, and rough mixes if you have them.',
  },
  {
    question: 'How long does mixing and mastering take?',
    answer: 'Typical turnaround is 3-5 business days for an initial mix, then 1-2 days per revision round. Rush services are available if you\'re on a tight deadline. We\'ll give you a timeline estimate when you submit your project.',
  },
]

export default function MixingMasteringContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Mixing & Mastering"
        highlight="in Savannah, GA"
        subtitle="Professional mixing and mastering that makes your music radio-ready. Local expertise, remote-friendly workflow."
        ctaText="Get Started"
        ctaHref="#contact"
        bgImage="/board.jpg"
      />

      <BenefitsRow benefits={benefits} />

      {/* Intro Content Section */}
      <Box bg="#0a0a0a" py={16}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={8} align="start">
              <Heading as="h2" size="xl" color="white">
                You&apos;ve Captured the Performance.<br />Now It&apos;s Time to Shape It.
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                At Fire Wave Sound, mixing isn&apos;t about throwing presets on tracks — it&apos;s about building depth, clarity, and impact so your music translates everywhere. From phones to cars to full-range systems, your record should hit with confidence.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We mix with intention. Every balance choice, EQ move, and automation pass is made to support the emotion of the song. If the chorus needs to lift, it lifts. If the low end needs weight without mud, it gets it. The goal isn&apos;t loudness for the sake of loudness — it&apos;s control, punch, and musicality.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                Whether your tracks were recorded at our{' '}
                <Link href="/savannah-recording-studio" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    studio
                  </ChakraLink>
                </Link>, at home, or at another facility, we&apos;ll bring them into a focused mix environment and refine them into a cohesive final product.
              </Text>

              <Text color="gray.500" fontSize="md">
                Still planning the recording side? Start with{' '}
                <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    drum tracking
                  </ChakraLink>
                </Link>{' '}
                and this quick timeline guide:{' '}
                <Link href="/blog/how-long-does-it-take-to-record-a-song" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    how long it takes to record a song
                  </ChakraLink>
                </Link>
                .
              </Text>

              <Heading as="h3" size="md" color="white" pt={4}>
                What You Can Expect
              </Heading>
              <VStack align="start" spacing={2} pl={2}>
                <Text color="gray.400">• Clean, powerful low end that translates</Text>
                <Text color="gray.400">• Clear vocals that sit naturally in the track</Text>
                <Text color="gray.400">• Width without phase issues</Text>
                <Text color="gray.400">• Dynamic control without sacrificing feel</Text>
                <Text color="gray.400">• Mastering optimized for streaming platforms</Text>
              </VStack>

              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We include revisions because collaboration matters — but we also guide the process so decisions move forward, not in circles.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                If you&apos;re ready for your music to compete sonically with what&apos;s coming out of Nashville and Atlanta, let&apos;s build a mix that stands up anywhere.
              </Text>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      {/* What's Included */}
      <Box bg="#111111" py={20}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  What&apos;s Included
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  Everything you need for a professional release
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                <VStack align="start" spacing={4} p={6} bg="#1a1a1a" rounded="lg" border="1px solid" borderColor="gray.800">
                  <Text color="white" fontWeight="600" fontSize="lg">Mixing Includes:</Text>
                  {[
                    'Level balancing across all tracks',
                    'EQ and frequency management',
                    'Compression and dynamics processing',
                    'Reverb, delay, and spatial effects',
                    'Vocal tuning and timing correction',
                    'Drum editing and enhancement',
                    'Up to 3 revision rounds',
                  ].map((item, idx) => (
                    <HStack key={idx} spacing={3}>
                      <Icon as={FaCheckCircle} color="brand.500" />
                      <Text color="gray.400">{item}</Text>
                    </HStack>
                  ))}
                </VStack>

                <VStack align="start" spacing={4} p={6} bg="#1a1a1a" rounded="lg" border="1px solid" borderColor="gray.800">
                  <Text color="white" fontWeight="600" fontSize="lg">Mastering Includes:</Text>
                  {[
                    'Final EQ and tonal shaping',
                    'Multiband compression',
                    'Stereo enhancement',
                    'Loudness optimization for streaming',
                    'Format conversion (WAV, MP3, etc.)',
                    'Metadata embedding',
                    'Quality control checks',
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

      <HowItWorks title="How It Works" steps={steps} />

      {/* Pricing Preview */}
      <Box bg="#0f0f0f" py={20}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={12}>
              <Heading as="h2" size="xl" color="white" textAlign="center">
                Simple Pricing
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
                  <Text color="white" fontWeight="600" fontSize="xl">Per Song</Text>
                  <Text color="brand.400" fontWeight="bold" fontSize="3xl">$150</Text>
                  <Text color="gray.400" fontSize="sm" textAlign="center">Full mixing with revisions</Text>
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
                  <Text color="white" fontWeight="600" fontSize="xl">EP/Album Rate</Text>
                  <Text color="brand.400" fontWeight="bold" fontSize="3xl">$125<Text as="span" fontSize="lg">/song</Text></Text>
                  <Text color="gray.400" fontSize="sm" textAlign="center">5+ songs, bulk discount</Text>
                </VStack>
              </SimpleGrid>

              <Text color="gray.500" fontSize="sm" textAlign="center">
                Mastering included with project packages or available separately. Contact us for a custom quote.
              </Text>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <FAQSection faqs={faqs} />

      {/* <TestimonialsSection /> */}

      <FinalCTA
        title="Ready to Get Your Music Mixed?"
        subtitle="Send us your tracks and let's create something you're proud to release. Fast turnaround, professional results."
        primaryCta={{ text: 'Start Your Project', href: '/#contact' }}
        secondaryCta={{ text: 'View Full Pricing', href: '/#pricing' }}
      />

      <Footer />
    </Box>
  )
}
