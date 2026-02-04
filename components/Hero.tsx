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
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaStar, FaDrum, FaMapMarkerAlt } from 'react-icons/fa'
import { heroContainer, heroItem } from '../lib/motion'

const MotionVStack = motion(VStack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionHStack = motion(HStack)
const MotionWrap = motion(Wrap)

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // If reduced motion, use simple variants
  const containerVariants = prefersReducedMotion 
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroContainer

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroItem

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
      {/* Dark overlay for text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.2)"
        zIndex={0}
      />

      <Container maxW="container.lg" position="relative" zIndex={1}>
        <MotionVStack 
          spacing={6} 
          textAlign="center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* SEO-Optimized H1 */}
          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="700"
            color="white"
            letterSpacing="tight"
            lineHeight="1.1"
            variants={itemVariants}
          >
            Savannah Recording Studio<br />
            <Text as="span" color="brand.400">for Bands & Artists</Text>
          </MotionHeading>

          {/* Subheadline with location + services */}
          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.300"
            fontWeight="400"
            maxW="2xl"
            variants={itemVariants}
          >
            Professional recording, mixing, mastering, and live sound serving Savannah & Richmond Hill, GA.
          </MotionText>

          {/* CTAs */}
          <MotionHStack 
            spacing={4} 
            pt={4}
            flexDirection={{ base: 'column', sm: 'row' }}
            w={{ base: 'full', sm: 'auto' }}
            variants={itemVariants}
          >
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
          </MotionHStack>

          {/* Trust Signals */}
          <MotionWrap 
            spacing={{ base: 4, md: 8 }} 
            justify="center" 
            pt={6}
            color="gray.400"
            fontSize="sm"
            variants={itemVariants}
          >
            <WrapItem>
              <HStack spacing={2}>
                <HStack spacing={0.5} color="brand.400">
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                  <Icon as={FaStar} boxSize={3} />
                </HStack>
                <Text>Top-rated on Google</Text>
              </HStack>
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
          </MotionWrap>
        </MotionVStack>
      </Container>
    </Box>
  )
}
