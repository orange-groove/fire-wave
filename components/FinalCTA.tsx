'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import Reveal from './Reveal'

interface FinalCTAProps {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export default function FinalCTA({ title, subtitle, primaryCta, secondaryCta }: FinalCTAProps) {
  return (
    <Box
      bg="linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)"
      py={20}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        bg="radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)"
        pointerEvents="none"
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Reveal>
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl" color="white">
              {title}
            </Heading>
            <Text color="gray.400" maxW="2xl" fontSize="lg">
              {subtitle}
            </Text>

            <HStack spacing={4} pt={4} flexDirection={{ base: 'column', sm: 'row' }}>
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  bg="brand.500"
                  color="white"
                  fontWeight="600"
                  px={8}
                  _hover={{
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s"
                >
                  {primaryCta.text}
                </Button>
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    fontWeight="600"
                    px={8}
                    _hover={{
                      bg: 'whiteAlpha.100',
                      borderColor: 'gray.400',
                      transform: 'translateY(-2px)',
                    }}
                    transition="all 0.2s"
                  >
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </HStack>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
