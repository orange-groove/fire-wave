'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroContainer, heroItem } from '../lib/motion'

const MotionVStack = motion(VStack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionBox = motion(Box)

interface ServiceHeroProps {
  title: string
  highlight?: string
  subtitle: string
  ctaText: string
  ctaHref: string
  bgImage?: string
}

export default function ServiceHero({
  title,
  highlight,
  subtitle,
  ctaText,
  ctaHref,
  bgImage = '/bg.jpg',
}: ServiceHeroProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroContainer

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroItem

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      position="relative"
      minH={{ base: '70vh', md: '80vh' }}
      w="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bgImage={`url('${bgImage}')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      pt={{ base: 20, md: 0 }}
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.65)"
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
          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="700"
            color="white"
            letterSpacing="tight"
            lineHeight="1.1"
            variants={itemVariants}
          >
            {title}
            {highlight && (
              <>
                <br />
                <Text as="span" color="brand.400">
                  {highlight}
                </Text>
              </>
            )}
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.300"
            fontWeight="400"
            maxW="2xl"
            variants={itemVariants}
          >
            {subtitle}
          </MotionText>

          <MotionBox variants={itemVariants} pt={4}>
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
              onClick={() => handleScrollTo(ctaHref)}
            >
              {ctaText}
            </Button>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  )
}
