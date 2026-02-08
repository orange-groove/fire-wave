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

export default function RecordingStudioSavannahContent() {
  return (
    <Box bg="#0a0a0a" pt={16}>
      <ServiceHero
        title="Recording Studio in Savannah, GA"
        subtitle="A focused, band-ready room just outside the city—built for real performances, clean captures, and mixes that translate."
        ctaText="Book a Session"
        ctaHref="/contact"
      />

      <Box py={{ base: 14, md: 18 }}>
        <Container maxW="container.lg">
          <VStack spacing={10} align="stretch">
            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                A practical studio option for Savannah artists
              </Heading>
              <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
                If you&apos;re based in Savannah and you want a recording day that feels organized (not chaotic), Fire Wave
                Sound gives you a place to lock in. We&apos;re close enough for an easy drive, but far enough from the
                noise to keep sessions moving—especially when you&apos;re tracking live drums or a full band.
              </Text>
              <HStack spacing={4} pt={2} flexWrap="wrap">
                <Button as={Link} href="/contact" variant="brand">
                  Get in Touch
                </Button>
                <Button as={Link} href="/savannah-recording-studio" variant="outline" borderColor="gray.600" color="white">
                  See Studio Services
                </Button>
              </HStack>
            </VStack>

            <Divider borderColor="gray.800" />

            <VStack spacing={4} align="start">
              <Heading as="h2" size="lg" color="white">
                Why artists in Savannah choose Fire Wave Sound
              </Heading>
              <UnorderedList color="gray.300" spacing={3} pl={6} lineHeight="1.8">
                <ListItem>
                  A <strong>focused environment</strong> that helps you get keepers faster—less waiting, more takes.
                </ListItem>
                <ListItem>
                  <strong>Real drum tracking</strong> that doesn&apos;t rely on “fix it later.” We build the sound at the source.
                </ListItem>
                <ListItem>
                  A workflow that respects your time: clear inputs, quick resets, and decisions made early.
                </ListItem>
                <ListItem>
                  Easy scheduling for weekend bands and working musicians—hourly, half-day, or lockout.
                </ListItem>
              </UnorderedList>
              <Text color="gray.500" fontSize="md">
                If you&apos;re mapping out your first session, these two are worth a quick read:{' '}
                <ChakraLink as={Link} href="/blog/what-should-you-bring-to-a-studio-session" color="brand.400" _hover={{ color: 'brand.300' }}>
                  what to bring
                </ChakraLink>{' '}
                and{' '}
                <ChakraLink as={Link} href="/blog/how-long-does-it-take-to-record-a-song" color="brand.400" _hover={{ color: 'brand.300' }}>
                  how long recording usually takes
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
                  Savannah bands often come in with a strong live feel—our job is to capture it without fighting the room.
                  We dial in the kit, mic it with intention, and print tones that already sit where they should. Learn more
                  about how we approach drums on our{' '}
                  <ChakraLink as={Link} href="/drum-tracking" color="brand.400" _hover={{ color: 'brand.300' }}>
                    drum tracking
                  </ChakraLink>{' '}
                  page.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Full band recording
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Want scratch takes that actually feel like the band? We can track together to lock arrangement and energy,
                  then build layers with clean, repeatable tones. It&apos;s a workflow that keeps Savannah sessions moving
                  without over-editing the life out of the song.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Vocal tracking
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Vocals are about comfort and confidence. We keep the signal chain simple and the feedback clear, so you can
                  focus on performance. Expect efficient comps, tasteful editing, and takes that feel natural—especially for
                  rock and indie artists coming out of Savannah.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md" color="white" mb={2}>
                  Mixing &amp; mastering
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  If you&apos;re finishing a release, we can mix with translation in mind—phones, cars, club systems, and streaming.
                  When it&apos;s time to finalize, we master for loudness and clarity without crushing dynamics. Details on our{' '}
                  <ChakraLink
                    as={Link}
                    href="/mixing-and-mastering-savannah"
                    color="brand.400"
                    _hover={{ color: 'brand.300' }}
                  >
                    mixing &amp; mastering
                  </ChakraLink>{' '}
                  workflow.
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
                  Ready to book studio time?
                </Heading>
                <Text color="gray.300" lineHeight="1.8">
                  Tell us what you&apos;re recording (single, EP, live session), and we&apos;ll recommend a plan that fits your timeline.
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

