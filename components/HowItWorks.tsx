'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
} from '@chakra-ui/react'
import Reveal from './Reveal'

interface Step {
  number: number
  title: string
  description: string
}

interface HowItWorksProps {
  title?: string
  steps: Step[]
}

export default function HowItWorks({ title = 'How It Works', steps }: HowItWorksProps) {
  return (
    <Box bg="#0a0a0a" py={20}>
      <Container maxW="container.lg">
        <Reveal>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" color="white" textAlign="center">
              {title}
            </Heading>

            <VStack spacing={8} w="full">
              {steps.map((step, index) => (
                <HStack
                  key={index}
                  spacing={6}
                  align="flex-start"
                  w="full"
                  p={6}
                  bg="#141414"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.800"
                  transition="all 0.3s ease"
                  _hover={{
                    borderColor: 'brand.500',
                    transform: 'translateX(8px)',
                  }}
                >
                  <Circle
                    size="50px"
                    bg="brand.500"
                    color="gray.900"
                    fontWeight="bold"
                    fontSize="xl"
                    flexShrink={0}
                  >
                    {step.number}
                  </Circle>
                  <VStack align="start" spacing={2}>
                    <Text color="white" fontWeight="600" fontSize="lg">
                      {step.title}
                    </Text>
                    <Text color="gray.400" fontSize="md">
                      {step.description}
                    </Text>
                  </VStack>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
