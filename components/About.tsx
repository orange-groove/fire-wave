'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { FaBolt, FaHeadphones, FaHandshake } from 'react-icons/fa'
import Reveal from './Reveal'

const benefits = [
  {
    icon: FaBolt,
    title: 'Efficient Sessions',
    description: 'Capture great performances fast — no wasted time, no wasted takes.',
  },
  {
    icon: FaHeadphones,
    title: 'Mixes That Translate',
    description: 'Modern sound that hits on car speakers, earbuds, and streaming platforms.',
  },
  {
    icon: FaHandshake,
    title: 'Collaborative & Pressure-Free',
    description: "Your vision drives the project. We guide when it matters, and stay out of the way when it doesn't.",
  },
]

export default function About() {
  return (
    <Box 
      py={20} 
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
        <Reveal>
          <VStack spacing={12}>
            {/* Headline */}
            <VStack spacing={3} textAlign="center">
              <Heading as="h2" size="xl" color="white">
                Musicians First. Results That Hit.
              </Heading>
              <Text color="gray.400" maxW="2xl">
                We&apos;re not just engineers — we&apos;re players who understand what it takes to make a record that connects.
              </Text>
            </VStack>

            {/* Benefit Cards */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {benefits.map((benefit, index) => (
                <VStack
                  key={index}
                  align="start"
                  spacing={4}
                  p={6}
                  bg="rgba(255,255,255,0.02)"
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
                  <Icon as={benefit.icon} boxSize={8} color="brand.500" />
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {benefit.title}
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    {benefit.description}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>

            {/* Short paragraph */}
            <Text 
              color="gray.400" 
              maxW="3xl" 
              textAlign="center" 
              fontSize="md"
              lineHeight="tall"
            >
              From tracking live drums in our band-ready room to delivering polished masters, Fire Wave Sound gives Savannah-area artists the tools and expertise to make music that sounds the way they imagined it.
            </Text>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
