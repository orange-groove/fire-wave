'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box 
      position="relative" 
      minH="100vh" 
      w="100vw" 
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bgImage="url('/bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <VStack spacing={8} textAlign="center">
          {/* Main Title */}
          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            fontWeight="700"
            color="white"
            letterSpacing="tight"
            lineHeight="1.1"
          >
            Fire Wave Sound
          </Heading>

          {/* Services Line */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.400"
            fontWeight="400"
            letterSpacing="wider"
          >
            Recording • Mixing • Mastering • Live Sound
          </Text>

          {/* Tagline */}
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.500"
            maxW="md"
          >
            Studio & Event Production in Coastal Georgia
          </Text>

          {/* CTAs */}
          <HStack 
            spacing={4} 
            pt={4}
            flexDirection={{ base: 'column', sm: 'row' }}
            w={{ base: 'full', sm: 'auto' }}
          >
            <Button
              size="lg"
              bg="white"
              color="black"
              fontWeight="600"
              px={8}
              _hover={{ 
                bg: 'gray.100',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
              onClick={() => handleScrollTo('#contact')}
              w={{ base: 'full', sm: 'auto' }}
            >
              Book a Session
            </Button>
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
              onClick={() => handleScrollTo('#live-sound')}
              w={{ base: 'full', sm: 'auto' }}
            >
              Get a Live Quote
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
