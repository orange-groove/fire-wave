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

export default function RecordingStudioRichmondHillContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Recording Studio in Richmond Hill, GA"
        subtitle="A quiet, purpose-built space for bands and artists who want sessions that stay on track—great drum tones, clean vocals, and mixes that translate."
        ctaText="Book a Session"
        ctaHref="/contact"
      />

      <Box py={{ base: 14, md: 18 }}>
        <Container maxW="container.lg">
          <VStack spacing={10} align="stretch">
            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                Home base for tracking in Richmond Hill
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                Fire Wave Sound is based in Richmond Hill, and that shows up in the way sessions feel: calm, focused, and
                efficient. If you&apos;re tired of recording in bedrooms or trying to force a “studio day” into a noisy schedule,
                this is the kind of room where you can actually finish something.
              </Text>
              <HStack spacing={4} pt={2} flexWrap="wrap">
                <Button as={Link} href="/contact" variant="brand">
                  Book a Session
                </Button>
                <Button as={Link} href="/savannah-recording-studio" variant="outline" borderColor="gray.600" color="white">
                  Recording Services
                </Button>
              </HStack>
            </VStack>

            <Divider borderColor="gray.800" />

            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                Why artists in Richmond Hill choose Fire Wave Sound
              </Heading>
              <UnorderedList color="gray.300" spacing={3} pl={6} lineHeight="1.8">
                <ListItem>
                  A <strong>quiet setting</strong> that keeps takes consistent—no fighting distractions between passes.
                </ListItem>
                <ListItem>
                  <strong>Band-ready tracking</strong> with real drum recording options when the song needs impact.
                </ListItem>
                <ListItem>
                  Straightforward engineering: we solve problems early and don&apos;t hide behind endless revisions.
                </ListItem>
                <ListItem>
                  Local convenience—easy to plan multiple sessions if you&apos;re building an EP or full release.
                </ListItem>
              </UnorderedList>
              <Text color="gray.500" fontSize="md">
                Want to keep the day moving? Start with{' '}
                <ChakraLink as={Link} href="/blog/what-should-you-bring-to-a-studio-session" color="brand.400" _hover={{ color: 'brand.300' }}>
                  this studio session checklist
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
                  If you want drums that feel like a player (not a preset), we track them. We work through tuning, mic placement,
                  and phase so the kit hits hard without getting harsh. If you want the deeper breakdown, see{' '}
                  <ChakraLink as={Link} href="/drum-tracking" color="brand.400" _hover={{ color: 'brand.300' }}>
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
                  Richmond Hill bands often prefer a “let&apos;s get it right” approach. We can track together for feel, then tighten
                  layers as needed—guitars, bass, and vocals—without losing the original energy.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Vocal tracking
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Great vocals start with comfort and repeatability. We set up quickly, keep monitoring simple, and capture clean
                  takes you can build a mix around—whether it&apos;s aggressive rock, singer-songwriter, or something in between.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Mixing &amp; mastering
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  When the tracking is solid, mixing becomes about translation and intent. We aim for impact without harshness,
                  and we master for streaming without flattening everything. More details on{' '}
                  <ChakraLink
                    as={Link}
                    href="/mixing-and-mastering-savannah"
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
                  Let&apos;s plan your session
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Send a few details—genre, number of songs, and whether you&apos;re tracking drums—and we&apos;ll map out a schedule that
                  keeps momentum.
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

