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
import Image from 'next/image'
import { toCdnSrc } from '../lib/cloudflareImages'

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
  bgImage = '/hero-bg.jpg',
}: ServiceHeroProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : heroContainer

  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : heroItem

  const handleScrollTo = (id: string) => {
    // Hash links scroll within the page; path links navigate.
    if (id.startsWith('#')) {
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // Allow passing real routes like "/contact"
    window.location.assign(id)
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
      pt={{ base: 20, md: 0 }}
    >
      {/* Hero background image - using Next.js Image for LCP optimization */}
      <Image
        src={toCdnSrc(bgImage)}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={85}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      {/* Dark overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.65)"
        zIndex={1}
      />

      <Container maxW="container.lg" position="relative" zIndex={2}>
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
              variant="brand"
              px={8}
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
