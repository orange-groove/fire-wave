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

export default function StudioSessionChecklistContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="What Should You Bring to a Studio Session?"
              date="February 4, 2026"
              readTime="4 min read"
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
                src="/guitars.jpg"
                alt="Guitars ready for a recording session at Fire Wave Sound"
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
                Showing up prepared makes a huge difference in how smoothly a recording session runs.
              </Text>
              <Text>
                Studio time moves quickly. The more organized you are, the more time we spend capturing performances instead of
                solving preventable problems.
              </Text>
              <Text>
                Here&apos;s what you should bring to your session.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                For Guitarists
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Your guitar (obviously)</ListItem>
                <ListItem>Extra strings (fresh strings are strongly recommended)</ListItem>
                <ListItem>Picks</ListItem>
                <ListItem>Strap</ListItem>
                <ListItem>Any pedals you plan to use</ListItem>
                <ListItem>Power supplies for pedals</ListItem>
                <ListItem>Backup instrument cable (even if we have extras)</ListItem>
              </UnorderedList>
              <Text>
                If you&apos;re chasing a specific tone, bring the gear that creates it. We can shape sound in the mix — but tone
                starts with your hands and your rig.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                For Drummers
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Drum key (bring two)</ListItem>
                <ListItem>Extra sticks</ListItem>
                <ListItem>Spare snare head if possible</ListItem>
                <ListItem>Any dampening you prefer (moon gels, tape, etc.)</ListItem>
                <ListItem>Kick pedal (don&apos;t assume one will be there)</ListItem>
              </UnorderedList>
              <Text>
                If your kit is being used, fresh or trusted heads make a noticeable difference. Tuning before the session saves
                time once mics go up. If you want to go deeper on drum-specific prep, our{' '}
                <ChakraLink as={Link} href="/drum-tracking-savannah" color="brand.400" _hover={{ color: 'brand.300' }}>
                  drum tracking
                </ChakraLink>{' '}
                page is a good starting point.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                For Vocalists
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Water</ListItem>
                <ListItem>Lyrics printed or clearly accessible</ListItem>
                <ListItem>Any reference tracks</ListItem>
                <ListItem>Rested voice (avoid strain the day before)</ListItem>
              </UnorderedList>
              <Text>
                If there are harmonies or doubles, know them in advance. Studio time is not ideal for writing parts on the spot.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                For Bass / Keys
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Cables</ListItem>
                <ListItem>Power supplies</ListItem>
                <ListItem>Backup batteries if needed</ListItem>
                <ListItem>Any MIDI controllers or interfaces required for your setup</ListItem>
              </UnorderedList>
              <Text>
                If you&apos;re unsure whether something is needed, bring it. It&apos;s better to have it than wish you did.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                For Everyone
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Finalized song structure</ListItem>
                <ListItem>Confirmed tempos (if using a click)</ListItem>
                <ListItem>Rough demos or references</ListItem>
                <ListItem>A clear idea of what you want the finished product to feel like</ListItem>
              </UnorderedList>
              <Text>
                Preparation shortens sessions and lowers costs.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                What You Don&apos;t Need to Bring
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Studio mics</ListItem>
                <ListItem>Recording software</ListItem>
                <ListItem>Panic</ListItem>
              </UnorderedList>
              <Text>
                We&apos;ll handle mic placement, routing, session setup, and monitoring. Your job is to perform.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={6}>
                The Bottom Line
              </Heading>
              <Text>
                A studio session runs best when everyone shows up ready. Rehearse the songs. Know the arrangements. Bring the
                right gear. The rest is about capturing the performance.
              </Text>
              <Text>
                If you&apos;re planning a recording session near Savannah and want to talk through what to expect, get in touch and
                we&apos;ll map it out before you arrive.
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
                    Want to plan your session ahead of time?
                  </Text>
                  <HStack spacing={4} flexWrap="wrap">
                    <Button as={Link} href="/contact" variant="brand">
                      Get in Touch
                    </Button>
                    <Button
                      as={Link}
                      href="/blog/what-to-expect-first-recording-session"
                      variant="outline"
                      borderColor="gray.600"
                      color="white"
                    >
                      What to Expect
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

