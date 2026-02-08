'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Divider,
  Button,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'

export default function RecordingTimelineContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="How Long Does It Take to Record a Song?"
              date="February 4, 2026"
              readTime="5 min read"
            />

            {/* Featured Image */}
            <Box
              w="full"
              h={{ base: '220px', md: '320px' }}
              rounded="lg"
              overflow="hidden"
              bg="#141414"
            >
              <img
                src="/board.jpg"
                alt="Recording studio mixing board at Fire Wave Sound"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Article Content */}
            <VStack
              spacing={6}
              align="stretch"
              color="gray.300"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.8"
            >
              <Text>
                One of the most common questions we get is simple:
              </Text>
              <Text fontStyle="italic">
                “How long will it take to record a song?”
              </Text>
              <Text>
                The honest answer is: it depends — mostly on preparation and production goals.
              </Text>
              <Text>
                Here&apos;s a realistic breakdown of what goes into recording a single song.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Step 1: Tracking the Foundation
              </Heading>
              <Text>
                For a full band, recording typically starts with drums and bass.
              </Text>

              <Heading as="h3" size="md" color="white" pt={2}>
                Drums (3–6 hours)
              </Heading>
              <Text>
                Setup, mic placement, tuning, and multiple takes.
              </Text>

              <Heading as="h3" size="md" color="white" pt={2}>
                Bass (1–2 hours)
              </Heading>
              <Text>
                Depending on complexity and whether parts are locked in.
              </Text>

              <Text>
                If the band tracks together for a scratch take and keeps the drum performance, this can move faster.
              </Text>
              <Text>
                For a solo artist working with programmed instruments, tracking may be much quicker.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Step 2: Guitars and Additional Instruments
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Rhythm guitars (1–3 hours)</ListItem>
                <ListItem>Lead parts / layers (1–2 hours)</ListItem>
                <ListItem>Keys, overdubs, textures as needed</ListItem>
              </UnorderedList>
              <Text>
                The more layered the arrangement, the more time it takes.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Step 3: Vocals
              </Heading>
              <Text>
                Vocals often take longer than people expect.
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Lead vocals: 1–3 hours</ListItem>
                <ListItem>Background vocals / doubles: 1–2 hours</ListItem>
              </UnorderedList>
              <Text>
                This includes comping (choosing the best takes) and basic editing.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Step 4: Editing, Mixing &amp; Mastering
              </Heading>
              <Text>
                Recording is only part of the process.
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Editing &amp; cleanup: 1–3 hours</ListItem>
                <ListItem>Mixing: 3–6+ hours</ListItem>
                <ListItem>Mastering: 1–2 hours</ListItem>
              </UnorderedList>
              <Text>
                This stage shapes how the song translates on Spotify, Apple Music, car speakers, and larger systems.
                If you&apos;re curious about the finishing side, read our{' '}
                <ChakraLink as={Link} href="/mixing-and-mastering-savannah" color="brand.400" _hover={{ color: 'brand.300' }}>
                  mixing &amp; mastering
                </ChakraLink>{' '}
                page.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Realistic Total Time
              </Heading>
              <Text>
                Here&apos;s what most projects look like:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>
                  <strong>Solo artist (minimal layers)</strong>: 6–10 total hours
                </ListItem>
                <ListItem>
                  <strong>Full band (tight and rehearsed)</strong>: 10–16 total hours
                </ListItem>
                <ListItem>
                  <strong>Heavily layered production</strong>: 20+ hours
                </ListItem>
              </UnorderedList>
              <Text>
                Preparation makes a huge difference. Bands that rehearse beforehand and finalize arrangements can cut session
                time significantly.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                What Slows Things Down
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Unrehearsed parts</ListItem>
                <ListItem>Unclear song structure</ListItem>
                <ListItem>Tuning issues</ListItem>
                <ListItem>Frequent arrangement changes mid-session</ListItem>
                <ListItem>Overthinking takes</ListItem>
              </UnorderedList>
              <Text>
                Studio time moves fastest when everyone knows their parts.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                Can You Record a Song in One Day?
              </Heading>
              <Text>
                Yes — especially if:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>The band is well-rehearsed</ListItem>
                <ListItem>The arrangement is locked</ListItem>
                <ListItem>The performance is solid</ListItem>
              </UnorderedList>
              <Text>
                But finishing a fully mixed and mastered track often requires additional time after tracking.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                The Bigger Picture
              </Heading>
              <Text>
                Recording isn&apos;t about rushing. It&apos;s about capturing strong performances and building a mix that holds up.
              </Text>
              <Text>
                If you&apos;re planning to record in the Savannah area and want to talk through your project timeline, reach out.
                We&apos;re happy to give you a realistic estimate based on your setup and goals.
              </Text>

              <Box
                p={8}
                bg="#141414"
                rounded="lg"
                border="1px solid"
                borderColor="gray.800"
                mt={4}
              >
                <VStack spacing={4} align="start">
                  <Text color="gray.300">
                    Want to track live drums or a full band session? Start here:
                  </Text>
                  <Text color="gray.400" fontSize="md">
                    And before you load the car, skim{' '}
                    <ChakraLink
                      as={Link}
                      href="/blog/what-should-you-bring-to-a-studio-session"
                      color="brand.400"
                      _hover={{ color: 'brand.300' }}
                    >
                      what to bring to a studio session
                    </ChakraLink>
                    .
                  </Text>
                  <HStack spacing={4} flexWrap="wrap">
                    <Button as={Link} href="/drum-tracking" variant="brand">
                      Drum Tracking
                    </Button>
                    <Button as={Link} href="/contact" variant="outline" borderColor="gray.600" color="white">
                      Book a Session
                    </Button>
                  </HStack>
                </VStack>
              </Box>

              <Divider borderColor="gray.800" my={6} />

              <Box pt={2}>
                <Link href="/blog" passHref legacyBehavior>
                  <ChakraLink color="gray.500" fontSize="sm" _hover={{ color: 'brand.400' }}>
                    ← Back to Blog
                  </ChakraLink>
                </Link>
              </Box>
            </VStack>
          </VStack>
        </Reveal>
      </Container>
      <Footer />
    </Box>
  )
}

