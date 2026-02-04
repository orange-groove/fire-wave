'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function ArtistsSection() {
  return (
    <Box bg="#0a0a0a" py={20} id="artists">
      <Container maxW="container.lg">
        <VStack spacing={10}>
          <Heading as="h2" size="lg" color="white" textAlign="center">
            Artists We&apos;ve Worked With
          </Heading>

          <VStack spacing={4}>
            <Box
              w={{ base: '180px', md: '220px' }}
              h={{ base: '180px', md: '220px' }}
              rounded="full"
              overflow="hidden"
            >
              <img
                src="/artists/delta-circle/delta-circle-logo.jpg"
                alt="Delta Circle"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Text color="gray.400" fontSize="md">
              Delta Circle – Savannah, GA
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
