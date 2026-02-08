'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'

const posts = [
  {
    slug: 'recording-live-drums-vs-programmed-drums',
    title: 'Recording Live Drums vs Programmed Drums — What’s the Difference?',
    excerpt: 'A practical comparison of feel, tone, workflow, budget, and genre—plus when a hybrid approach makes the most sense.',
    date: 'February 4, 2026',
    image: '/drums.jpg',
  },
  {
    slug: 'how-long-does-it-take-to-record-a-song',
    title: 'How Long Does It Take to Record a Song?',
    excerpt: 'A realistic timeline for tracking, vocals, editing, mixing, and mastering—plus what speeds sessions up (and what slows them down).',
    date: 'February 4, 2026',
    image: '/board.jpg',
  },
  {
    slug: 'what-should-you-bring-to-a-studio-session',
    title: 'What Should You Bring to a Studio Session?',
    excerpt: 'A practical checklist for guitarists, drummers, vocalists, and keys/bass players—plus what you don’t need and how to avoid wasted time.',
    date: 'February 4, 2026',
    image: '/guitars.jpg',
  },
  {
    slug: 'what-to-expect-first-recording-session',
    title: 'What to Expect During Your First Recording Session',
    excerpt: 'Never recorded in a studio before? Here\'s what typically happens—setup, tracking, breaks, and how to prepare.',
    date: 'February 4, 2025',
    image: '/control_room.jpg',
  },
  {
    slug: 'how-to-prepare-for-drum-tracking-session',
    title: 'How to Prepare for a Drum Tracking Session',
    excerpt: 'Get the most out of your drum tracking session—tips on kit selection, tuning, click tracks, and showing up prepared.',
    date: 'February 4, 2025',
    image: '/drums.jpg',
  },
  {
    slug: 'how-much-does-it-cost-to-record-a-song-savannah',
    title: 'How Much Does It Cost to Record a Song in Savannah?',
    excerpt: 'A realistic breakdown of recording studio costs—hourly rates, what affects pricing, and budget ranges for singles, EPs, and albums.',
    date: 'February 4, 2025',
    image: '/board.jpg',
  },
  {
    slug: 'recording-delta-circle-fire-wave-studio',
    title: 'Recording Delta Circle at Fire Wave Sound',
    excerpt: 'How we built Delta Circle\'s record from a live scratch take—keeping the energy while layering guitars, bass, and vocals.',
    date: 'February 4, 2025',
    image: '/artists/delta-circle/1.jpeg',
  },
]

export default function BlogIndexContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={24}>
      <Container maxW="container.lg" py={12}>
        <Reveal>
          <VStack spacing={12} align="stretch">
            <VStack spacing={4} align="start">
              <Heading as="h1" size="2xl" color="white">
                Blog
              </Heading>
              <Text color="gray.400" fontSize="lg">
                Session notes and recording insights from Fire Wave Sound.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} passHref legacyBehavior>
                  <ChakraLink _hover={{ textDecoration: 'none' }} h="full" display="block">
                    <Box
                      p={6}
                      bg="#141414"
                      rounded="lg"
                      border="1px solid"
                      borderColor="gray.800"
                      transition="all 0.3s ease"
                      h="full"
                      display="flex"
                      flexDirection="column"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      {post.image && (
                        <Box
                          w="full"
                          h="180px"
                          rounded="md"
                          overflow="hidden"
                          bg="#0a0a0a"
                          flexShrink={0}
                          mb={4}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </Box>
                      )}
                      <Text color="gray.500" fontSize="sm" mb={2}>
                        {post.date}
                      </Text>
                      <Heading as="h2" size="md" color="white" mb={2} noOfLines={2}>
                        {post.title}
                      </Heading>
                      <Text color="gray.400" fontSize="sm" noOfLines={3} flex={1}>
                        {post.excerpt}
                      </Text>
                    </Box>
                  </ChakraLink>
                </Link>
              ))}
            </SimpleGrid>
          </VStack>
        </Reveal>
      </Container>
      <Footer />
    </Box>
  )
}
