'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Link as ChakraLink, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import { FaVolumeUp, FaCalendarCheck, FaUsers, FaMusic, FaMicrophone, FaCog } from 'react-icons/fa'
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
    icon: FaVolumeUp,
    title: 'Professional-Grade Audio',
    description: 'Digital mixing consoles, quality speakers, and the expertise to make your event sound incredible.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Reliable & On-Time',
    description: 'We arrive early, set up efficiently, and stay until your event is complete. No surprises.',
  },
  {
    icon: FaUsers,
    title: 'Any Event Size',
    description: 'From intimate acoustic sets to multi-band festivals, we scale our setup to match your needs.',
  },
]

const steps = [
  {
    number: 1,
    title: 'Tell Us About Your Event',
    description: 'Contact us with your event date, venue, expected attendance, and what you need covered (bands, speeches, DJs, etc.).',
  },
  {
    number: 2,
    title: 'Get a Custom Quote',
    description: 'We\'ll put together a package that fits your event and budget, with clear pricing and no hidden fees.',
  },
  {
    number: 3,
    title: 'Pre-Event Planning',
    description: 'We coordinate with performers, create input lists, and plan the technical setup so event day runs smoothly.',
  },
  {
    number: 4,
    title: 'Professional Execution',
    description: 'Our team handles setup, sound check, and live mixing throughout your event. You focus on your guests.',
  },
]

const faqs = [
  {
    question: 'What types of events do you provide live sound for in Savannah?',
    answer: 'We handle live sound for concerts, festivals, corporate events, weddings, private parties, church services, and community events throughout Savannah, Richmond Hill, Pooler, and Coastal Georgia. Whether it\'s a solo acoustic performer or a multi-band lineup, we have the gear and experience.',
  },
  {
    question: 'How much does live sound cost for an event in Savannah?',
    answer: 'Our packages start at $600 for basic events (solo artists, small gatherings) and scale up based on your needs. Full band packages start at $1,200, and festival/multi-act events start at $2,000. Every quote is customized to your specific requirements—contact us for a free estimate.',
  },
  {
    question: 'Do you provide all the equipment, or do I need to rent separately?',
    answer: 'We bring everything needed for professional sound: mixing console, speakers, monitors, microphones, stands, cables, and DI boxes. You don\'t need to rent anything separately. If you have specific gear requests (e.g., in-ear monitors), let us know and we can accommodate.',
  },
  {
    question: 'How far in advance should I book live sound for my event?',
    answer: 'We recommend booking at least 2-4 weeks in advance for most events, and 1-2 months for larger events like festivals or weddings. Popular dates (weekends, holidays) fill up quickly, so earlier is better. Contact us even if your event is soon—we may still have availability.',
  },
  {
    question: 'What\'s included with your live sound engineer?',
    answer: 'Our engineer handles all technical aspects: setup, sound check with performers, live mixing during the event, and teardown. They\'re there to ensure great sound from start to finish. For larger events, we can provide additional crew as needed.',
  },
]

export default function LiveSoundSavannahContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Live Sound Services"
        highlight="in Savannah, GA"
        subtitle="Professional live audio for concerts, festivals, weddings, and corporate events. Reliable sound engineering throughout Coastal Georgia."
        ctaText="Get a Free Quote"
        ctaHref="#contact"
        bgImage="/hero-bg.jpg"
      />

      <BenefitsRow benefits={benefits} />

      {/* Intro Content Section */}
      <Box bg="#0a0a0a" py={16}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={8} align="start">
              <Heading as="h2" size="xl" color="white">
                Live Sound Throughout Coastal Georgia
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                Fire Wave Sound provides live sound for events throughout Savannah, Richmond Hill, Pooler, Hinesville, and the surrounding area.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We handle system setup, stage routing, soundcheck, and front-of-house mixing for weddings, local venues, private events, and community festivals. The goal is simple: clear vocals, balanced instruments, and a mix that feels controlled from start to finish.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                We bring the equipment, set it up properly, and stay on the console during the event. That means paying attention to levels, monitoring the room, and adjusting as the performance evolves.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                Whether it&apos;s a small reception or a full band on an outdoor stage, the approach is the same — keep it organized, keep it clean, and make sure it translates to the back of the room.
              </Text>
              <Text color="gray.400" fontSize="lg" lineHeight="tall">
                If you need someone to manage the sound from load-in to teardown, we&apos;re ready.
              </Text>
              <Box pt={4}>
                <Text color="gray.500" fontSize="md">
                  Also need studio recording? Check out our{' '}
                  <Link href="/savannah-recording-studio" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      Savannah recording studio
                    </ChakraLink>
                  </Link>{' '}
                  for tracking, mixing, and mastering services.
                </Text>
              </Box>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      {/* Event Types */}
      <Box bg="#111111" py={20}>
        <Container maxW="container.xl">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  Events We Cover
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  From intimate gatherings to large-scale productions
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                {[
                  { icon: FaMusic, title: 'Concerts & Festivals', desc: 'Multi-band lineups, outdoor stages, and full production support.' },
                  { icon: FaUsers, title: 'Weddings & Receptions', desc: 'Ceremony audio, reception music, speeches, and band/DJ support.' },
                  { icon: FaCog, title: 'Corporate Events', desc: 'Conferences, presentations, product launches, and company parties.' },
                  { icon: FaMicrophone, title: 'Private Parties', desc: 'Birthday celebrations, anniversaries, and special occasions.' },
                  { icon: FaVolumeUp, title: 'Venue Sound', desc: 'Regular sound support for bars, restaurants, and music venues.' },
                  { icon: FaCalendarCheck, title: 'Community Events', desc: 'City festivals, church services, charity events, and more.' },
                ].map((event, idx) => (
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
                    <Box as={event.icon} boxSize={8} color="brand.500" />
                    <Text color="white" fontWeight="600">{event.title}</Text>
                    <Text color="gray.400" fontSize="sm">{event.desc}</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <HowItWorks title="How It Works" steps={steps} />

      {/* Packages Preview */}
      <Box bg="#0f0f0f" py={20}>
        <Container maxW="container.xl">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Badge colorScheme="orange" fontSize="sm" px={4} py={1} borderRadius="full">
                  Packages
                </Badge>
                <Heading as="h2" size="xl" color="white">
                  Live Sound Packages
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  Transparent pricing, no surprises
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
                {[
                  { title: 'Basic Event', price: 'Starting at $400', desc: 'Solo artists, acoustic duos, small private events, speaking engagements' },
                  { title: 'Full Band', price: 'Starting at $750', desc: 'Rock/country/worship bands, multi-instrument acts, medium events' },
                  { title: 'Festival', price: 'Starting at $1,200', desc: 'Multi-band lineups, city events, large festivals, corporate events' },
                ].map((pkg, idx) => (
                  <VStack
                    key={idx}
                    p={8}
                    bg="#1a1a1a"
                    rounded="lg"
                    border="1px solid"
                    borderColor="gray.800"
                    spacing={4}
                    transition="all 0.3s ease"
                    _hover={{ borderColor: 'brand.500', transform: 'translateY(-4px)' }}
                  >
                    <Text color="white" fontWeight="600" fontSize="xl">{pkg.title}</Text>
                    <Text color="brand.400" fontWeight="bold" fontSize="2xl">{pkg.price}</Text>
                    <Text color="gray.400" fontSize="sm" textAlign="center">{pkg.desc}</Text>
                  </VStack>
                ))}
              </SimpleGrid>

              <Link href="/#live-sound" passHref legacyBehavior>
                <ChakraLink color="brand.400" fontWeight="500" _hover={{ color: 'brand.300' }}>
                  View full package details →
                </ChakraLink>
              </Link>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <FAQSection faqs={faqs} />

      {/* <TestimonialsSection /> */}

      <FinalCTA
        title="Let's Make Your Event Sound Amazing"
        subtitle="Get a free quote for professional live sound services in Savannah and Coastal Georgia. No obligation, fast response."
        primaryCta={{ text: 'Get a Free Quote', href: '/#contact' }}
        secondaryCta={{ text: 'View Packages', href: '/#live-sound' }}
      />

      <Footer />
    </Box>
  )
}
