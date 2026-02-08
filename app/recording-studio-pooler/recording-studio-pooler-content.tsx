'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  UnorderedList,
  ListItem,
  Divider,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import ServiceHero from '../../components/ServiceHero'
import Footer from '../../components/Footer'

export default function RecordingStudioPoolerContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Recording Studio in Pooler, GA"
        subtitle="A straightforward studio option near Pooler—built for bands who want strong takes, real drums, and mixes that hold up everywhere."
        ctaText="Book a Session"
        ctaHref="/contact"
      />

      <Box py={{ base: 14, md: 18 }}>
        <Container maxW="container.lg">
          <VStack spacing={10} align="stretch">
            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                Easy drive from Pooler, built for serious sessions
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                Pooler is growing fast—more bands, more gigs, more releases. If you&apos;re ready to record without turning it
                into a months-long project, Fire Wave Sound is a nearby studio that keeps things simple: capture the performance,
                commit to tones, and finish the record.
              </Text>
              <HStack spacing={4} pt={2} flexWrap="wrap">
                <Button as={Link} href="/contact" variant="brand">
                  Book a Session
                </Button>
                <Button as={Link} href="/contact" variant="outline" borderColor="gray.600" color="white">
                  Get in Touch
                </Button>
              </HStack>
            </VStack>

            <Divider borderColor="gray.800" />

            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                Why artists in Pooler choose Fire Wave Sound
              </Heading>
              <UnorderedList color="gray.300" spacing={3} pl={6} lineHeight="1.8">
                <ListItem>
                  Convenient access from Pooler without paying “downtown studio” overhead for every hour.
                </ListItem>
                <ListItem>
                  A <strong>band-first setup</strong> that works for live drums and full instrumentation, not just overdubs.
                </ListItem>
                <ListItem>
                  Clean monitoring and clear communication—so you know what&apos;s happening and why.
                </ListItem>
                <ListItem>
                  Options for tracking, mixing, and finishing under one roof when you want a consistent sound.
                </ListItem>
              </UnorderedList>
              <Text color="gray.500" fontSize="md">
                If you&apos;re deciding between a kit and samples, read{' '}
                <ChakraLink as={Link} href="/blog/recording-live-drums-vs-programmed-drums" color="brand.400" _hover={{ color: 'brand.300' }}>
                  live drums vs programmed drums
                </ChakraLink>
                .
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} pt={2}>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Live drum tracking
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  For many Pooler bands, the drum sound is the difference between a demo and a release. We help you get punch,
                  clarity, and consistency from the kit so the rest of the track builds naturally. Start here:{' '}
                  <ChakraLink as={Link} href="/drum-tracking-savannah" color="brand.400" _hover={{ color: 'brand.300' }}>
                    drum tracking
                  </ChakraLink>
                  .
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Full band recording
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  We can capture a tight scratch take with the whole band to lock the arrangement, then re-track parts as needed.
                  It&apos;s a practical way to keep momentum—especially when you&apos;re coordinating multiple schedules around Pooler.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Vocal tracking
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Whether you&apos;re tracking a single hook or finishing an EP, we keep vocals clean and controlled. You&apos;ll get
                  takes that sit in a mix without sounding over-processed, and comps that feel natural.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Mixing &amp; mastering
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Mixing is where the record becomes a record. We prioritize translation and impact, then master for streaming
                  deliverables with clarity. If you want the process details, see{' '}
                  <ChakraLink
                    as={Link}
                    href="/mixing-mastering-savannah"
                    color="brand.400"
                    _hover={{ color: 'brand.300' }}
                  >
                    mixing &amp; mastering
                  </ChakraLink>
                  .
                </Text>
              </Box>
            </SimpleGrid>

            <Box
              bg="#141414"
              border="1px solid"
              borderColor="gray.800"
              rounded="lg"
              p={{ base: 6, md: 8 }}
            >
              <VStack spacing={3} align="start">
                <Heading as="h2" size="md" color="white">
                  Book time and keep it moving
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  The fastest sessions happen when the plan is clear. Tell us your goals and we&apos;ll help you choose the right
                  setup—drums first, full band scratch, or vocals and overdubs.
                </Text>
                <HStack spacing={4} pt={2} flexWrap="wrap">
                  <Button as={Link} href="/contact" variant="brand">
                    Book a Session
                  </Button>
                  <Button as={Link} href="/contact" variant="outline" borderColor="gray.600" color="white">
                    Get in Touch
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Footer />
    </Box>
  )
}

