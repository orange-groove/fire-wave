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
import dynamic from 'next/dynamic'
import { toCdnSrc } from '../../../lib/cloudflareImages'

// Lazy-load ImageCarousel to reduce initial JS bundle
const ImageCarousel = dynamic(() => import('../../../components/ImageCarousel'), {
  ssr: false,
  loading: () => (
    <Box h={{ base: '250px', md: '350px' }} bg="gray.900" rounded="lg" />
  ),
})

const sessionImages = [
  { src: '/delta-circle-1.jpeg', alt: 'Delta Circle recording session' },
  { src: '/delta-circle-2.jpeg', alt: 'Delta Circle in the studio' },
  { src: '/delta-circle-3.jpeg', alt: 'Delta Circle tracking' },
  { src: '/delta-circle-4.jpeg', alt: 'Delta Circle session photo' },
  { src: '/delta-circle-5.jpeg', alt: 'Delta Circle at Fire Wave Sound' },
  { src: '/delta-circle-6.jpeg', alt: 'Delta Circle recording' },
  { src: '/delta-circle-7.jpeg', alt: 'Delta Circle session' },
  { src: '/delta-circle-8.jpeg', alt: 'Delta Circle in studio' },
  { src: '/delta-circle-9.jpeg', alt: 'Delta Circle tracking session' },
  { src: '/delta-circle-10.jpeg', alt: 'Delta Circle at the studio' },
]
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'

export default function DeltaCirclePostContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="Recording Delta Circle at Fire Wave Sound"
              date="February 4, 2025"
              readTime="5 min read"
            />

            {/* Featured Image */}
            <Box
              w="full"
              h={{ base: '250px', md: '350px' }}
              rounded="lg"
              overflow="hidden"
              bg="#141414"
            >
              <img
                src={toCdnSrc('/delta-circle-1.jpeg')}
                alt="Delta Circle recording session at Fire Wave Sound"
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
                Delta Circle came into Fire Wave Sound to track two cover songs. The goal was simple: capture the band&apos;s live energy first, then build the songs from that foundation without overcomplicating the process.
              </Text>

              {/* Session Photos Carousel */}
              <Box pt={4}>
                <ImageCarousel
                  images={sessionImages}
                  id="delta-circle-carousel"
                  slidesToShow={2}
                  autoplay={false}
                  height={{ base: '220px', md: '300px' }}
                />
              </Box>

              {/* The Goal */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                The Goal of the Session
              </Heading>
              <Text>
                Delta Circle wanted the songs to feel like a band playing together — tight, punchy, and real — without polishing the life out of it. The plan was to start with everyone in the room and get a scratch performance with enough feel to guide everything that came after.
              </Text>

              {/* How We Recorded It */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                How We Recorded It
              </Heading>
              <Text>
                We tracked the full band together first to capture a scratch take and lock the arrangement. The unexpected win: the{' '}
                <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    drum recording
                  </ChakraLink>
                </Link>{' '}
                during the scratch pass came out strong enough that we kept it as the final drum performance.
              </Text>
              <Text>
                From there, we built the song in layers:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Kept the scratch drums as the foundation</ListItem>
                <ListItem>Layered guitars starting with rhythm parts, then leads</ListItem>
                <ListItem>Replaced the scratch bass with a tighter final performance</ListItem>
                <ListItem>Added vocals after the core instrumentation was locked</ListItem>
                <ListItem>Mixed and mastered for release</ListItem>
                <ListItem>Delivered final masters for Spotify distribution</ListItem>
              </UnorderedList>
              <Text>
                This workflow kept the energy of the live performance while still giving us control over tone and polish where it mattered.
              </Text>

              {/* What We Tracked */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                What We Tracked
              </Heading>
              <Text>
                For this session, we captured:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Drums (tracked live with the full band on the scratch pass — kept for final)</ListItem>
                <ListItem>Guitars (layered after: rhythms first, then leads)</ListItem>
                <ListItem>Bass (scratch replaced with final takes)</ListItem>
                <ListItem>Vocals (tracked after the arrangement and guitars were solid)</ListItem>
              </UnorderedList>

              {/* Why Keeping Scratch Drums Worked */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Why Keeping the Scratch Drums Worked
              </Heading>
              <Text>
                A lot of the time, scratch takes are just placeholders — but sometimes you capture the feel early and it&apos;s hard to beat later. Keeping the scratch drums worked because the performance had momentum, the groove was there, and everything else could be built around it.
              </Text>
              <Text>
                Once the drums were locked, it made the rest of the production decisions easier: guitars could be layered with intention, bass could be tightened to the kick, and vocals could be recorded against a track that already felt alive.
              </Text>

              {/* Mix + Master Approach */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Mix + Master Approach
              </Heading>
              <Text>
                The{' '}
                <Link href="/mixing-mastering-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    mix
                  </ChakraLink>
                </Link>{' '}
                goal was clarity and punch without sterilizing the band:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Drums forward enough to drive the song</ListItem>
                <ListItem>Low end controlled (kick + bass working together)</ListItem>
                <ListItem>Guitars layered for size without getting harsh</ListItem>
                <ListItem>Vocals present and understandable without sounding &ldquo;pasted on&rdquo;</ListItem>
              </UnorderedList>
              <Text>
                After mixing, we mastered the tracks for streaming and delivered final versions to the band for release.
              </Text>

              {/* Final Result */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Final Result
              </Heading>
              <Text>
                Delta Circle left with finished mixes and masters ready for Spotify release — and songs that still feels like them.
              </Text>

              {/* Follow Delta Circle */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Follow Delta Circle
              </Heading>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={4}
                py={4}
              >
                <Box
                  w={{ base: '150px', md: '180px' }}
                  h={{ base: '150px', md: '180px' }}
                  rounded="full"
                  overflow="hidden"
                  border="2px solid"
                  borderColor="gray.700"
                >
                  <img
                    src={toCdnSrc('/delta-circle-logo.jpg')}
                    alt="Delta Circle logo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <ChakraLink
                  href="https://www.facebook.com/deltacircle"
                  isExternal
                  color="brand.400"
                  _hover={{ color: 'brand.300' }}
                  fontWeight="500"
                >
                  Delta Circle on Facebook
                </ChakraLink>
              </Box>

              <Divider borderColor="gray.800" my={8} />

              {/* CTA */}
              <Box
                p={8}
                bg="#141414"
                rounded="lg"
                border="1px solid"
                borderColor="gray.800"
              >
                <VStack spacing={4} align="start">
                  <Text color="gray.300">
                    If you&apos;re a band in the Savannah area looking for a{' '}
                    <Link href="/savannah-recording-studio" passHref legacyBehavior>
                      <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                        Savannah recording studio
                      </ChakraLink>
                    </Link>{' '}
                    to track a project (or you want to build songs from a strong live foundation), reach out and we&apos;ll talk through your plan.
                  </Text>
                  <Link href="/#contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      variant="brand"
                    >
                      Contact / Book Time
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
