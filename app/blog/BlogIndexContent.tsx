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
    slug: 'recording-delta-circle-fire-wave-studio',
    title: 'Recording Delta Circle at Fire Wave Studio',
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
                Session notes and recording insights from Fire Wave Studio.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} passHref legacyBehavior>
                  <ChakraLink _hover={{ textDecoration: 'none' }}>
                    <Box
                      p={6}
                      bg="#141414"
                      rounded="lg"
                      border="1px solid"
                      borderColor="gray.800"
                      transition="all 0.3s ease"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      <VStack align="start" spacing={4}>
                        {post.image && (
                          <Box
                            w="full"
                            h="180px"
                            rounded="md"
                            overflow="hidden"
                            bg="#0a0a0a"
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
                        <Text color="gray.500" fontSize="sm">
                          {post.date}
                        </Text>
                        <Heading as="h2" size="md" color="white">
                          {post.title}
                        </Heading>
                        <Text color="gray.400" fontSize="sm">
                          {post.excerpt}
                        </Text>
                      </VStack>
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
