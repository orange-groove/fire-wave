'use client'

import {
  Box,
  Container,
  SimpleGrid,
  VStack,
  Text,
  Icon,
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import Reveal from './Reveal'

interface Benefit {
  icon: IconType
  title: string
  description: string
}

interface BenefitsRowProps {
  benefits: Benefit[]
}

export default function BenefitsRow({ benefits }: BenefitsRowProps) {
  return (
    <Box bg="#0f0f0f" py={16}>
      <Container maxW="container.xl">
        <Reveal>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <VStack
                key={index}
                spacing={4}
                p={6}
                bg="rgba(255,255,255,0.02)"
                rounded="lg"
                border="1px solid"
                borderColor="gray.800"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                  borderColor: 'brand.500',
                }}
              >
                <Icon as={benefit.icon} boxSize={10} color="brand.500" />
                <Text color="white" fontWeight="600" fontSize="lg" textAlign="center">
                  {benefit.title}
                </Text>
                <Text color="gray.400" fontSize="sm" textAlign="center">
                  {benefit.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Reveal>
      </Container>
    </Box>
  )
}
