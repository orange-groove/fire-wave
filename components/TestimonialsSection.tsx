'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { FaStar, FaGoogle } from 'react-icons/fa'
import Reveal from './Reveal'

// TODO_REVIEW: Replace with real testimonials when available
const testimonials = [
  {
    id: 1,
    quote: "Fire Wave nailed the sound we were going for. The drum tones were massive and the mix translated perfectly to streaming. Highly recommend for any band in the Savannah area.",
    name: "Marcus T.",
    city: "Savannah, GA",
    rating: 5,
  },
  {
    id: 2,
    quote: "Super professional and easy to work with. They got my vocals sounding radio-ready and the session was relaxed and efficient. Will definitely be back.",
    name: "Ashley R.",
    city: "Richmond Hill, GA",
    rating: 5,
  },
  {
    id: 3,
    quote: "We tracked our entire EP here. Great gear, great ears, and they really understood our vision. The live room is perfect for full band tracking.",
    name: "Jake M.",
    city: "Pooler, GA",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <Box bg="#111111" py={20} id="reviews">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            <VStack spacing={3} textAlign="center">
              <Heading as="h2" size="xl" color="white">
                What Artists Are Saying
              </Heading>
              <Text color="gray.400">
                Trusted by bands and solo artists across Coastal Georgia
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {testimonials.map((testimonial) => (
                <Box
                  key={testimonial.id}
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
                    {/* Stars */}
                    <HStack spacing={1}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} as={FaStar} color="brand.400" boxSize={4} />
                      ))}
                    </HStack>

                    {/* Quote */}
                    <Text color="gray.300" fontSize="md" fontStyle="italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </Text>

                    {/* Attribution */}
                    <Box pt={2}>
                      <Text color="white" fontWeight="600">
                        {testimonial.name}
                      </Text>
                      <Text color="gray.500" fontSize="sm">
                        {testimonial.city}
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* Google Reviews Link */}
            <Link
              href="https://www.google.com/search?q=fire+wave+studio+richmond+hill+ga+reviews"
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <HStack
                spacing={2}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.400' }}
                transition="color 0.2s"
              >
                <Icon as={FaGoogle} />
                <Text>Read more reviews on Google</Text>
              </HStack>
            </Link>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
