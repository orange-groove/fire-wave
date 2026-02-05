'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Icon,
  Wrap,
  WrapItem,
  keyframes,
} from '@chakra-ui/react'
import { FaStar, FaDrum, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import heroImage from '../public/hero-bg.jpg'

// CSS keyframes for fade-in animation (replaces framer-motion for LCP optimization)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Animation style helper - respects prefers-reduced-motion via CSS
const getAnimationStyle = (delay: number) => ({
  opacity: 0,
  animation: `${fadeInUp} 0.6s ease-out ${delay}s forwards`,
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    animation: 'none',
  },
})

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
    >
      {/* Hero background image - using Next.js Image for LCP optimization */}
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={85}
        placeholder="blur"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      {/* Dark overlay for text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.2)"
        zIndex={1}
      />

      <Container maxW="container.lg" position="relative" zIndex={2}>
        <VStack spacing={6} textAlign="center">
          {/* SEO-Optimized H1 */}
          <Heading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="700"
            color="white"
            letterSpacing="tight"
            lineHeight="1.1"
            sx={getAnimationStyle(0)}
          >
            Savannah Recording Studio<br />
            <Text as="span" color="brand.400">for Bands & Artists</Text>
          </Heading>

          {/* Subheadline with location + services */}
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.300"
            fontWeight="400"
            maxW="2xl"
            sx={getAnimationStyle(0.1)}
          >
            Professional recording, mixing, mastering, and live sound serving Savannah and Coastal Georgia.
          </Text>

          {/* CTAs */}
          <HStack 
            spacing={4} 
            pt={4}
            flexDirection={{ base: 'column', sm: 'row' }}
            w={{ base: 'full', sm: 'auto' }}
            sx={getAnimationStyle(0.2)}
          >
            <Button
              size="lg"
              variant="brand"
              px={8}
              onClick={() => handleScrollTo('#contact')}
              w={{ base: 'full', sm: 'auto' }}
            >
              Book Studio Time
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              fontWeight="600"
              px={8}
              _hover={{ 
                bg: 'whiteAlpha.200',
                transform: 'translateY(-2px)',
              }}
              transition="all 0.2s"
              onClick={() => handleScrollTo('#live-sound')}
              w={{ base: 'full', sm: 'auto' }}
            >
              Get a Live Sound Quote
            </Button>
          </HStack>

          {/* Trust Signals */}
          <Wrap 
            spacing={{ base: 4, md: 8 }} 
            justify="center" 
            pt={6}
            color="gray.400"
            fontSize="sm"
            sx={getAnimationStyle(0.3)}
          >
            <WrapItem>
              {/* <HStack spacing={2}>
                <HStack spacing={0.5} color="brand.400">
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                </HStack>
                <Text>Top-rated on Google</Text>
              </HStack> */}
            </WrapItem>
            <WrapItem>
              <HStack spacing={2}>
                <Icon as={FaDrum} color="brand.400" />
                <Text>Band-ready tracking room + live drum setup</Text>
              </HStack>
            </WrapItem>
            <WrapItem>
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} color="brand.400" />
                <Text>Serving Savannah, Richmond Hill, Pooler & Coastal GA</Text>
              </HStack>
            </WrapItem>
          </Wrap>
        </VStack>
      </Container>
    </Box>
  )
}
