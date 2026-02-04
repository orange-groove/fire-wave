'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import Reveal from './Reveal'

const proofItems = [
  {
    image: '/drums.jpg',
    title: 'Live Drum Tracking',
    description: 'Full kit recording with premium mics',
  },
  {
    image: '/mic.jpg',
    title: 'Vocal Sessions',
    description: 'Isolated booth, pro-grade signal chain',
  },
  {
    image: '/board.jpg',
    title: 'Mixing & Production',
    description: 'Polished mixes that translate everywhere',
  },
]

export default function ProofSection() {
  return (
    <Box bg="#0f0f0f" py={16} id="proof">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={10}>
            <VStack spacing={3} textAlign="center">
              <Heading as="h2" size="lg" color="white">
                Hear The Difference
              </Heading>
              <Text color="gray.400" maxW="xl">
                From live drum tracking to final masters — see what we do at Fire Wave Studio.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {proofItems.map((item, index) => (
                <Box
                  key={index}
                  position="relative"
                  rounded="lg"
                  overflow="hidden"
                  h={{ base: '220px', md: '280px' }}
                  cursor="pointer"
                  role="group"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                    }}
                  />
                  {/* Overlay */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="linear-gradient(transparent, rgba(0,0,0,0.9))"
                    p={5}
                    transition="all 0.3s"
                  >
                    <Text color="white" fontWeight="600" fontSize="lg">
                      {item.title}
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>

          {/* TODO_VIDEO: Add video embed here when ready
          <Box w="full" maxW="800px" mx="auto">
            <Box
              position="relative"
              paddingBottom="56.25%"
              bg="gray.900"
              rounded="lg"
              overflow="hidden"
            >
              <iframe
                src="https://www.youtube.com/embed/PLACEHOLDER"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
                loading="lazy"
              />
            </Box>
          </Box>
          */}
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
