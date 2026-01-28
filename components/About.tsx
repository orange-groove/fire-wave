'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { getContent } from '../lib/content'

export default function About() {
  const content = getContent()

  return (
    <Box 
      py={24} 
      id="about" 
      bgGradient="linear(to-br, #0a0a0a 0%, #151515 40%, #1a1a1a 60%, #0f0f0f 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Subtle accent glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)"
        pointerEvents="none"
      />
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" color="white">
            {content.about.title}
          </Heading>
          <Text fontSize="lg" color="gray.300" maxW="3xl" textAlign="center" lineHeight="tall">
            {content.about.description}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
} 