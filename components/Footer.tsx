'use client'

import {
  Box,
  Container,
  Stack,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
  Icon,
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import Image from 'next/image'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/firewavestudio912/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61578999137660', label: 'Facebook' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box bg="#0a0a0a" borderTop="1px solid" borderColor="gray.800">
      <Container maxW="container.xl" py={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
        >
          {/* Logo & Description */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} maxW="300px">
            <Image
              src="/logo.png"
              alt="Fire Wave Studios"
              width={200}
              height={200}
              style={{ filter: 'brightness(1.1)' }}
            />
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Quick Links
            </Text>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                color="gray.400"
                fontSize="sm"
                _hover={{ color: 'brand.500' }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Contact Info */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Contact
            </Text>
            <HStack color="gray.400" fontSize="sm">
              <Icon as={FaMapMarkerAlt} color="brand.500" />
              <Text>Richmond Hill, GA</Text>
            </HStack>
            <HStack color="gray.400" fontSize="sm">
              <Icon as={FaEnvelope} color="brand.500" />
              <Link href="mailto:info@firewave912.com" _hover={{ color: 'brand.500' }}>
                info@firewave912.com
              </Link>
            </HStack>
          </VStack>

          {/* Social Links */}
          <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
            <Text color="white" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="wider">
              Follow Us
            </Text>
            <HStack spacing={4}>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                  color="gray.400"
                  _hover={{ color: 'brand.500', transform: 'scale(1.2)' }}
                  transition="all 0.2s"
                >
                  <Icon as={social.icon} w={5} h={5} />
                </Link>
              ))}
            </HStack>
          </VStack>
        </Stack>
        {/* Copyright */}
        <Text color="gray.500" fontSize="sm" textAlign="center">
          &copy; {currentYear} Fire Wave Studios. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
