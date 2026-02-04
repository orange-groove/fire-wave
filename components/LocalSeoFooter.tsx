'use client'

import {
  Box,
  Container,
  Text,
  VStack,
  Divider,
} from '@chakra-ui/react'

export default function LocalSeoFooter() {
  return (
    <Box bg="#0a0a0a" py={10} borderTop="1px solid" borderColor="gray.800">
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center">
          <Text color="gray.500" fontSize="sm" fontWeight="500">
            Recording • Mixing • Mastering • Live Sound
          </Text>
          <Divider borderColor="gray.800" maxW="200px" />
          <Text color="gray.600" fontSize="xs">
            Proudly serving Savannah, Richmond Hill, Pooler, Hinesville, and Coastal Georgia.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
