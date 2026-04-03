'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { toCdnSrc } from '../lib/cloudflareImages'

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
                src={toCdnSrc('/artists/delta-circle/delta-circle-logo.jpg')}
                alt="Delta Circle"
                loading="lazy"
                decoding="async"
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
            <HStack spacing={4} pt={1}>
              <ChakraLink
                href="https://www.facebook.com/deltacircle"
                isExternal
                aria-label="Delta Circle on Facebook"
                color="gray.400"
                _hover={{ color: 'brand.400' }}
              >
                <Icon as={FaFacebook} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://www.instagram.com/deltacircle/"
                isExternal
                aria-label="Delta Circle on Instagram"
                color="gray.400"
                _hover={{ color: 'brand.400' }}
              >
                <Icon as={FaInstagram} boxSize={5} />
              </ChakraLink>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
