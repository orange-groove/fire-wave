'use client'

import {
  Box,
  Container,
  Stack,
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Divider,
  Icon,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

const serviceLinks = [
  { label: 'Savannah Recording Studio', href: '/savannah-recording-studio' },
  { label: 'Mixing & Mastering', href: '/mixing-mastering-savannah' },
  { label: 'Drum Tracking', href: '/drum-tracking-savannah' },
  { label: 'Live Sound Savannah', href: '/live-sound-savannah' },
]

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/firewavestudio912/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61578999137660', label: 'Facebook' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHomePage && href.startsWith('/#')) {
      e.preventDefault()
      const element = document.querySelector(href.replace('/', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <Box bg="#0a0a0a" borderTop="1px solid" borderColor="gray.800">
      <Container maxW="container.xl" py={12}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={8}
          justify="space-between"
          align={{ base: 'center', lg: 'flex-start' }}
        >
          {/* Logo & Description */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4} maxW="250px">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Fire Wave Sound"
                width={180}
                height={180}
                style={{ filter: 'brightness(1.1)' }}
              />
            </Link>
            <Text color="gray.500" fontSize="sm" textAlign={{ base: 'center', lg: 'left' }}>
              Professional recording studio & live sound serving Savannah and Coastal Georgia.
            </Text>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Quick Links
            </Text>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.label}
                as={Link}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.500' }}
                transition="color 0.2s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          {/* Services Links */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Services
            </Text>
            {serviceLinks.map((link) => (
              <ChakraLink
                key={link.label}
                as={Link}
                href={link.href}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.500' }}
                transition="color 0.2s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>

          {/* Contact Info */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Contact
            </Text>
            <HStack color="gray.400" fontSize="sm">
              <Icon as={FaMapMarkerAlt} color="brand.500" />
              <ChakraLink 
                href="https://www.google.com/maps/search/Clarktown+Road,+Richmond+Hill,+GA" 
                isExternal
                _hover={{ color: 'brand.500' }}
              >
                Richmond Hill, GA
              </ChakraLink>
            </HStack>
            <HStack color="gray.400" fontSize="sm">
              <Icon as={FaEnvelope} color="brand.500" />
              <ChakraLink href="mailto:info@firewave912.com" _hover={{ color: 'brand.500' }}>
                info@firewave912.com
              </ChakraLink>
            </HStack>
          </VStack>

          {/* Social Links */}
          <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Follow Us
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social) => (
                <ChakraLink
                  key={social.label}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                  color="gray.400"
                  _hover={{ color: 'brand.500', transform: 'scale(1.2)' }}
                  transition="all 0.2s"
                >
                  <Icon as={social.icon} w={5} h={5} />
                </ChakraLink>
              ))}
            </HStack>
          </VStack>
        </Stack>

        <Divider borderColor="gray.800" my={8} />

        {/* Copyright */}
        <VStack spacing={3} align="center">
          <Text color="gray.500" fontSize="sm" textAlign="center">
            &copy; {currentYear} Fire Wave Sound. All rights reserved.
          </Text>

          <Text color="gray.500" fontSize="sm" textAlign="center">
            Made with love by Orange Groove Solutions
            <Box as="span" display="inline-block" verticalAlign="middle" ms={2} pb={6}>
              <Image
                src="/orange-groove-mark.png"
                alt=""
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
