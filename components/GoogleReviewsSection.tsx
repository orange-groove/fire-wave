'use client'

import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { FaGoogle, FaStar } from 'react-icons/fa'
import Reveal from './Reveal'

type GoogleReview = {
  authorName: string
  authorUrl: string | null
  profilePhotoUrl: string | null
  rating: number | null
  relativeTimeDescription: string | null
  text: string | null
  time: number | null
}

type GoogleReviewsPayload = {
  placeId: string
  placeName: string | null
  placeUrl: string | null
  rating: number | null
  userRatingsTotal: number | null
  reviews: GoogleReview[]
  attribution: 'Google'
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <HStack spacing={1}>
      {[...Array(full)].map((_, i) => (
        <Icon key={i} as={FaStar} color="brand.400" boxSize={4} />
      ))}
      {[...Array(5 - full)].map((_, i) => (
        <Icon key={`e-${i}`} as={FaStar} color="gray.700" boxSize={4} />
      ))}
    </HStack>
  )
}

export default function GoogleReviewsSection() {
  const [data, setData] = useState<GoogleReviewsPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function run() {
      setLoading(true)
      try {
        const resp = await fetch('/api/google-reviews')
        if (!resp.ok) {
          let message = `Google reviews unavailable (${resp.status})`
          try {
            const body = (await resp.json()) as { error?: string; message?: string }
            message = body.error || body.message || message
          } catch {
            // ignore
          }
          throw new Error(message)
        }
        const json = (await resp.json()) as GoogleReviewsPayload
        if (!cancelled) {
          setData(json)
          setError(null)
        }
      } catch (err) {
        console.warn('Failed to load Google reviews', err)
        if (!cancelled) {
          setData(null)
          setError(err instanceof Error ? err.message : 'Failed to load Google reviews')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  const headerLine = useMemo(() => {
    if (!data || data.rating == null || data.userRatingsTotal == null) return null
    return `${data.rating.toFixed(1)} • ${data.userRatingsTotal.toLocaleString()} reviews`
  }, [data])

  return (
    <Box bg="#111111" py={20} id="google-reviews">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12} align="stretch">
            <VStack spacing={3} textAlign="center">
              <Heading as="h2" size="xl" color="white">
                Google Reviews
              </Heading>
              {loading ? (
                <Skeleton height="18px" width="320px" />
              ) : error ? (
                <Text color="red.300">{error}</Text>
              ) : headerLine ? (
                <VStack spacing={2}>
                  <Text color="gray.400">{headerLine}</Text>
                  {data?.rating != null ? <Stars rating={data.rating} /> : null}
                </VStack>
              ) : (
                <Text color="gray.400">See what artists are saying</Text>
              )}
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {loading
                ? [...Array(3)].map((_, i) => (
                    <Box
                      key={i}
                      p={6}
                      bg="#1a1a1a"
                      rounded="lg"
                      border="1px solid"
                      borderColor="gray.800"
                    >
                      <VStack align="start" spacing={4}>
                        <HStack spacing={3}>
                          <SkeletonCircle size="10" />
                          <Box flex="1">
                            <Skeleton height="14px" width="140px" mb={2} />
                            <Skeleton height="12px" width="100px" />
                          </Box>
                        </HStack>
                        <Skeleton height="12px" width="120px" />
                        <SkeletonText noOfLines={4} spacing="3" skeletonHeight="10px" />
                      </VStack>
                    </Box>
                  ))
                : (data?.reviews ?? []).length > 0
                  ? (data?.reviews ?? []).slice(0, 6).map((review, idx) => (
                    <Box
                      key={`${review.authorName}-${idx}`}
                      p={6}
                      bg="#1a1a1a"
                      rounded="lg"
                      border="1px solid"
                      borderColor="gray.800"
                      transition="all 0.3s ease"
                      _hover={{
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                        borderColor: 'brand.500',
                      }}
                    >
                      <VStack align="start" spacing={4}>
                        <HStack spacing={3} w="full">
                          <Avatar
                            size="sm"
                            name={review.authorName}
                            src={review.profilePhotoUrl ?? undefined}
                          />
                          <Box flex="1" minW={0}>
                            {review.authorUrl ? (
                              <Link href={review.authorUrl} isExternal color="white" fontWeight="600" noOfLines={1}>
                                {review.authorName}
                              </Link>
                            ) : (
                              <Text color="white" fontWeight="600" noOfLines={1}>
                                {review.authorName}
                              </Text>
                            )}
                            <Text color="gray.500" fontSize="sm">
                              {review.relativeTimeDescription ?? ''}
                            </Text>
                          </Box>
                        </HStack>

                        {typeof review.rating === 'number' ? <Stars rating={review.rating} /> : null}

                        {review.text ? (
                          <Text color="gray.300" fontSize="md" fontStyle="italic">
                            &ldquo;{review.text}&rdquo;
                          </Text>
                        ) : null}
                      </VStack>
                    </Box>
                  ))
                  : (
                    <Box
                      p={6}
                      bg="#1a1a1a"
                      rounded="lg"
                      border="1px solid"
                      borderColor="gray.800"
                    >
                      <Text color="gray.400">
                        No reviews returned from Google yet. If you’re expecting reviews here, double-check that{' '}
                        <Text as="span" color="white" fontWeight="600">
                          Places API (New)
                        </Text>{' '}
                        is enabled and billing is active for your Google Cloud project.
                      </Text>
                    </Box>
                  )}
            </SimpleGrid>

            <VStack spacing={2} pt={2}>
              <HStack spacing={2} color="gray.500" fontSize="sm">
                <Icon as={FaGoogle} />
                <Text>Reviews from Google</Text>
              </HStack>

              {data?.placeUrl ? (
                <Link href={data.placeUrl} isExternal color="gray.400" fontSize="sm" _hover={{ color: 'brand.400' }}>
                  View all reviews on Google
                </Link>
              ) : (
                <Link
                  href="https://www.google.com/search?q=fire+wave+sound+reviews"
                  isExternal
                  color="gray.400"
                  fontSize="sm"
                  _hover={{ color: 'brand.400' }}
                >
                  View reviews on Google
                </Link>
              )}
            </VStack>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}

