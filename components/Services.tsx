'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { FaMicrophone, FaMusic, FaHeadphones, FaVolumeUp, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { getContent } from '../lib/content'
import Reveal from './Reveal'

const iconMap = {
  FaMicrophone,
  FaMusic,
  FaHeadphones,
  FaVolumeUp,
  FaUsers,
}

export default function Services() {
  const content = getContent()

  return (
    <Box bg="#111111" py={20} id="services">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="white">
              Our Services
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={8} w="full">
              {content.services.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <VStack 
                    key={service.id} 
                    spacing={4} 
                    p={8} 
                    bg="#1a1a1a" 
                    rounded="lg" 
                    border="1px solid" 
                    borderColor="gray.800"
                    _hover={{ 
                      borderColor: 'brand.500', 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={IconComponent} w={12} h={12} color="brand.500" />
                    <Heading as="h3" size="md" color="white">
                      {service.title}
                    </Heading>
                    <Text textAlign="center" color="gray.400">
                      {service.description}
                    </Text>
                    {service.ctaHref && service.ctaLabel && (
                      <ChakraLink
                        as={Link}
                        href={service.ctaHref}
                        color="brand.400"
                        _hover={{ color: 'brand.300' }}
                        fontWeight="500"
                      >
                        {service.ctaLabel}
                      </ChakraLink>
                    )}
                  </VStack>
                )
              })}
            </SimpleGrid>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
} 