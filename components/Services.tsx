'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react'
import { FaMicrophone, FaMusic, FaHeadphones } from 'react-icons/fa'
import { getContent } from '../lib/content'

const iconMap = {
  FaMicrophone,
  FaMusic,
  FaHeadphones,
}

export default function Services() {
  const content = getContent()

  return (
    <Box bg="#111111" py={20} id="services">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center" color="white">
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
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
                  _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)' }}
                  transition="all 0.3s"
                >
                  <Icon as={IconComponent} w={12} h={12} color="brand.500" />
                  <Heading as="h3" size="md" color="white">
                    {service.title}
                  </Heading>
                  <Text textAlign="center" color="gray.400">
                    {service.description}
                  </Text>
                </VStack>
              )
            })}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 