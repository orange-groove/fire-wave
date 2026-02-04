'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react'
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'

export default function FirstSessionContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="What to Expect During Your First Recording Session"
              date="February 4, 2025"
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
                src="/control_room.jpg"
                alt="Control room at Fire Wave Sound"
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
              {/* Intro */}
              <Text>
                If you&apos;ve never recorded in a studio before, it&apos;s normal to feel unsure about how the day will go.
              </Text>
              <Text>
                Here&apos;s what typically happens during a session at Fire Wave Sound in Richmond Hill, just outside Savannah.
              </Text>

              {/* Before You Arrive */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Before You Arrive
              </Heading>
              <Text>
                Preparation makes the biggest difference.
              </Text>
              <Text>Before your session, we&apos;ll confirm:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Song structure</ListItem>
                <ListItem>Tempo (if using a click)</ListItem>
                <ListItem>Number of musicians</ListItem>
                <ListItem>What we&apos;re tracking first</ListItem>
                <ListItem>Rough timeline for the day</ListItem>
              </UnorderedList>
              <Text>
                The more rehearsed you are, the more time we can spend capturing performances instead of figuring things out.
              </Text>

              {/* Setup and Sound Check */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Setup and Sound Check
              </Heading>
              <Text>
                When you arrive, we start with setup.
              </Text>
              <Text>That includes:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Placing mics</ListItem>
                <ListItem>Dialing in tones</ListItem>
                <ListItem>Setting headphone mixes</ListItem>
                <ListItem>Running scratch takes to check levels</ListItem>
              </UnorderedList>
              <Text>
                This part isn&apos;t rushed. Getting things right early saves time later.
              </Text>

              {/* Tracking */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Tracking
              </Heading>
              <Text>
                Once levels feel good and everyone&apos;s comfortable, we move into real takes.
              </Text>
              <Text>Depending on the project, we may:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Track the full band together first</ListItem>
                <ListItem>Capture{' '}
                  <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                    <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                      drums
                    </ChakraLink>
                  </Link>{' '}
                  as a foundation
                </ListItem>
                <ListItem>Layer instruments one by one</ListItem>
                <ListItem>Build from a scratch performance</ListItem>
              </UnorderedList>
              <Text>
                We&apos;ll review takes as we go and keep what feels right.
              </Text>
              <Text>
                The goal isn&apos;t perfection — it&apos;s strong, confident performances.
              </Text>

              {/* Breaks and Adjustments */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Breaks and Adjustments
              </Heading>
              <Text>
                Sessions are focused, but they&apos;re not chaotic.
              </Text>
              <Text>
                We pause when needed, adjust tones if something isn&apos;t sitting right, and keep the momentum steady. If something feels off, we address it while everything is still set up.
              </Text>

              {/* After Tracking */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                After Tracking
              </Heading>
              <Text>
                Once tracking is complete, we move into editing,{' '}
                <Link href="/mixing-mastering-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    mixing, and mastering
                  </ChakraLink>
                </Link>.
              </Text>
              <Text>
                You&apos;ll receive rough mixes to review, and we&apos;ll make revisions as needed to lock in the final sound before delivery.
              </Text>

              {/* How to Get the Most */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                How to Get the Most Out of Your Session
              </Heading>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Rehearse beforehand</ListItem>
                <ListItem>Bring spare strings, sticks, cables</ListItem>
                <ListItem>Know your parts</ListItem>
                <ListItem>Don&apos;t overthink it</ListItem>
              </UnorderedList>
              <Text>
                The studio is there to capture what you already know how to do.
              </Text>

              <Divider borderColor="gray.800" my={8} />

              {/* CTA */}
              <Heading as="h2" size="lg" color="white">
                Recording Near Savannah
              </Heading>
              <Text>
                Fire Wave Sound works with bands and artists throughout Savannah, Richmond Hill, Pooler, and Coastal Georgia.
              </Text>
              <Text>
                If you&apos;re booking your first session and want to talk through what the day will look like, reach out and we&apos;ll map it out ahead of time.
              </Text>
              <Text>
                Learn more about our{' '}
                <Link href="/savannah-recording-studio" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    Savannah recording studio
                  </ChakraLink>
                </Link>.
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
                    Ready to book your first session? Let&apos;s talk.
                  </Text>
                  <Link href="/#contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      bg="brand.500"
                      color="white"
                      _hover={{ bg: 'brand.600' }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </VStack>
              </Box>

              {/* Back to Blog */}
              <Box pt={4}>
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
