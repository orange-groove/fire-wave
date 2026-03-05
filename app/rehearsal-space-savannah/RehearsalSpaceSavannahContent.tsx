'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Badge,
  HStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FaCheckCircle, FaClock, FaDoorClosed, FaUsers } from 'react-icons/fa'
import type { CarouselImage } from '../../components/ImageCarousel'
import ServiceHero from '../../components/ServiceHero'
import BenefitsRow from '../../components/BenefitsRow'
import FAQSection from '../../components/FAQSection'
import FinalCTA from '../../components/FinalCTA'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const ImageCarousel = dynamic(() => import('../../components/ImageCarousel'), {
  ssr: false,
  loading: () => <Box h={{ base: '220px', md: '320px' }} bg="gray.900" rounded="lg" />,
})

const benefits = [
  {
    icon: FaDoorClosed,
    title: 'Private, Focused Room',
    description: 'A dedicated rehearsal space for running your set without distractions.',
  },
  {
    icon: FaClock,
    title: 'Straightforward Rates',
    description: '$50/hr with a 2-hour minimum. Block rates available.',
  },
  {
    icon: FaUsers,
    title: 'Band-Friendly Booking',
    description: 'Tell us your preferred dates/times and we’ll confirm availability quickly.',
  },
]

const rehearsalImages: CarouselImage[] = Array.from({ length: 12 }, (_, idx) => ({
  src: `/rehearsal-${idx + 1}.png`,
  alt: `Rehearsal space photo ${idx + 1}`,
}))

const faqs = [
  {
    question: 'How much does rehearsal space cost?',
    answer: 'Rehearsal time is $50 per hour with a 2-hour minimum.',
  },
  {
    question: 'Do you offer block rates or recurring rehearsals?',
    answer: 'Yes — block rates and recurring rehearsal arrangements are available. Reach out with what you’re looking for and we’ll work out a plan.',
  },
  {
    question: 'How do we book rehearsal time?',
    answer: 'Use the contact form to request times/dates. We’ll confirm availability and get you scheduled.',
  },
]

export default function RehearsalSpaceSavannahContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Rehearsal Space"
        highlight="Near Savannah, GA"
        subtitle="Private rehearsal space for bands and artists. $50/hr with a 2-hour minimum."
        ctaText="Check Availability"
        ctaHref="/contact"
        bgImage="/rehearsal-3.png"
      />

      <BenefitsRow benefits={benefits} />

      {/* Rates */}
      <Box bg="#0a0a0a" py={16}>
        <Container maxW="container.lg">
          <Reveal>
            <VStack spacing={10} align="stretch">
              <VStack spacing={3} textAlign="center">
                <Badge colorScheme="orange" fontSize="sm" px={4} py={1} borderRadius="full">
                  Rates
                </Badge>
                <Heading as="h2" size="xl" color="white">
                  $50/hr Rehearsal Space (2-hour minimum)
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  Straightforward hourly booking for focused practices, full-band run-throughs, and pre-show rehearsals.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
                <Box
                  p={8}
                  bg="#141414"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.800"
                >
                  <VStack spacing={4} align="start">
                    <Heading as="h3" size="lg" color="white">
                      Rehearsal Rates
                    </Heading>
                    <HStack spacing={3} align="baseline">
                      <Text color="brand.400" fontWeight="bold" fontSize="3xl">
                        $50
                      </Text>
                      <Text color="gray.400" fontSize="lg">
                        / hour
                      </Text>
                    </HStack>
                    <List spacing={2}>
                      <ListItem color="gray.300">
                        <HStack align="flex-start" spacing={2}>
                          <ListIcon as={FaCheckCircle} color="brand.500" mt={1} />
                          <Text>2-hour minimum</Text>
                        </HStack>
                      </ListItem>
                      <ListItem color="gray.300">
                        <HStack align="flex-start" spacing={2}>
                          <ListIcon as={FaCheckCircle} color="brand.500" mt={1} />
                          <Text>Block rates available</Text>
                        </HStack>
                      </ListItem>
                    </List>
                    <Text color="gray.500" fontSize="sm" fontStyle="italic">
                      Contact us to check availability or to set up a recurring rehearsal schedule.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  p={8}
                  bg="#141414"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.800"
                >
                  <VStack spacing={4} align="start">
                    <Heading as="h3" size="lg" color="white">
                      Best For
                    </Heading>
                    <List spacing={2}>
                      {[
                        'Full-band practices and run-throughs',
                        'Tightening arrangements before studio sessions',
                        'Pre-show rehearsals and set prep',
                        'Consistent weekly rehearsals (ask about block rates)',
                      ].map((item) => (
                        <ListItem key={item} color="gray.300">
                          <HStack align="flex-start" spacing={2}>
                            <ListIcon as={FaCheckCircle} color="brand.500" mt={1} />
                            <Text>{item}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      {/* Photos Carousel */}
      <Box bg="#0f0f0f" py={20}>
        <Container maxW="container.xl">
          <Reveal>
            <VStack spacing={12}>
              <VStack spacing={3} textAlign="center">
                <Heading as="h2" size="xl" color="white">
                  Inside the Rehearsal Space
                </Heading>
                <Text color="gray.400" maxW="2xl">
                  A quick look at the room and setup.
                </Text>
              </VStack>

              <Box w="full" px={{ base: 0, md: 4 }}>
                <ImageCarousel
                  images={rehearsalImages}
                  id="rehearsal-carousel"
                  slidesToShow={3}
                  autoplay={true}
                  height={{ base: '220px', md: '320px' }}
                />
              </Box>
            </VStack>
          </Reveal>
        </Container>
      </Box>

      <FAQSection title="Rehearsal Space FAQs" faqs={faqs} />

      <FinalCTA
        title="Want to Book Rehearsal Time?"
        subtitle="Tell us what days/times you’re looking for and we’ll confirm availability. $50/hr with a 2-hour minimum."
        primaryCta={{ text: 'Check Availability', href: '/#contact' }}
        secondaryCta={{ text: 'View Pricing', href: '/#pricing' }}
      />

      <Footer />
    </Box>
  )
}

