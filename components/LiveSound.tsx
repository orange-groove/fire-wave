'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  HStack,
  Divider,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import Reveal from './Reveal'

interface Package {
  title: string
  emoji: string
  price: string
  idealFor: string[]
  includes: string[]
  additionalHours?: string
  notes?: string[]
}

const packages: Package[] = [
  {
    title: 'Basic Event Package',
    emoji: '🎤',
    price: 'Starting at $400',
    idealFor: [
      'Solo artists',
      'Acoustic duos',
      'Small private events',
      'Speaking engagements',
    ],
    includes: [
      'Professional mixing console',
      '1 monitor mix',
      'On-site engineer (up to 4 hours)',
      'Setup + teardown',
    ],
    additionalHours: '$75/hr',
  },
  {
    title: 'Full Band Package',
    emoji: '🎸',
    price: 'Starting at $750',
    idealFor: [
      'Rock / country / worship bands',
      'Multi-instrument acts',
      'Medium-sized events',
    ],
    includes: [
      '24-channel digital console',
      '4 monitor mixes',
      'Drum mic kit',
      '5 vocal microphones',
      '8-channel DI rack',
      'On-site engineer (up to 6 hours)',
      'Setup + teardown',
    ],
    additionalHours: '$100/hr',
  },
  {
    title: 'Festival / Multi-Act Package',
    emoji: '🎪',
    price: 'Starting at $1,200',
    idealFor: [
      'Multi-band lineups',
      'City events',
      'Church festivals',
      'Corporate events',
    ],
    includes: [
      '24-channel digital console',
      'Up to 24 inputs',
      'Multiple monitor mixes',
      'Dual drum kit capability',
      '8-channel DI rack',
      'Stage power & cabling',
      'IEM capability (if requested)',
      'Professional event audio engineer',
      'Pre-event planning + input list coordination',
      'Setup + teardown',
    ],
    notes: [
      'Custom quotes based on: number of acts, stage size, duration, power requirements, additional tech staff',
      'Events outside Savannah area may incur travel fees',
    ],
  },
]

export default function LiveSound() {
  return (
    <Box bg="#0f0f0f" py={20} id="live-sound">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            {/* Header */}
            <VStack spacing={4} textAlign="center">
              <Badge 
                colorScheme="orange" 
                fontSize="sm" 
                px={4} 
                py={1} 
                borderRadius="full"
              >
                Fire Wave Live
              </Badge>
              <Heading as="h2" size="xl" color="white">
                Live Sound & Event Production
              </Heading>
              <Text color="gray.400" maxW="2xl">
                Professional live audio services for events and corporate functions throughout Savannah, and Coastal Georgia.
              </Text>
            </VStack>

            {/* Packages */}
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="full">
              {packages.map((pkg, idx) => (
                <Box
                  key={idx}
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
                  display="flex"
                  flexDirection="column"
                >
                <VStack spacing={4} align="stretch" flex={1}>
                  {/* Package Header */}
                  <HStack spacing={3}>
                    <Text fontSize="2xl">{pkg.emoji}</Text>
                    <Heading as="h3" size="md" color="white">
                      {pkg.title}
                    </Heading>
                  </HStack>

                  <Text fontSize="xl" fontWeight="bold" color="brand.400">
                    {pkg.price}
                  </Text>

                  <Divider borderColor="gray.700" />

                  {/* Ideal For */}
                  <Box>
                    <Text color="gray.500" fontSize="sm" fontWeight="600" mb={2}>
                      IDEAL FOR
                    </Text>
                    <List spacing={1}>
                      {pkg.idealFor.map((item, i) => (
                        <ListItem key={i} color="gray.300" fontSize="sm">
                          <HStack align="flex-start" spacing={2}>
                            <Text color="gray.500">•</Text>
                            <Text>{item}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Divider borderColor="gray.700" />

                  {/* Includes */}
                  <Box flex={1}>
                    <Text color="gray.500" fontSize="sm" fontWeight="600" mb={2}>
                      INCLUDES
                    </Text>
                    <List spacing={2}>
                      {pkg.includes.map((item, i) => (
                        <ListItem key={i} color="gray.300" fontSize="sm">
                          <HStack align="flex-start" spacing={2}>
                            <ListIcon
                              as={FaCheckCircle}
                              color="brand.500"
                              mt={0.5}
                            />
                            <Text>{item}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* Additional Hours */}
                  {pkg.additionalHours && (
                    <Text color="gray.400" fontSize="sm" fontStyle="italic">
                      Additional hours: {pkg.additionalHours}
                    </Text>
                  )}

                  {/* Notes */}
                  {pkg.notes && (
                    <VStack spacing={1} align="stretch">
                      {pkg.notes.map((note, i) => (
                        <Text key={i} color="gray.500" fontSize="xs" fontStyle="italic">
                          {note}
                        </Text>
                      ))}
                    </VStack>
                  )}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          {/* Booking Policy */}
          <Box 
            w="full" 
            maxW="2xl" 
            p={6} 
            bg="#141414" 
            rounded="lg" 
            border="1px solid" 
            borderColor="gray.800"
          >
            <HStack spacing={3} mb={4}>
              <Text fontSize="xl">📅</Text>
              <Heading as="h4" size="md" color="white">
                Booking Policy
              </Heading>
            </HStack>
            <List spacing={2}>
              <ListItem color="gray.300" fontSize="sm">
                <HStack align="flex-start" spacing={2}>
                  <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} />
                  <Text>50% deposit required to secure date</Text>
                </HStack>
              </ListItem>
              <ListItem color="gray.300" fontSize="sm">
                <HStack align="flex-start" spacing={2}>
                  <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} />
                  <Text>Final payment due day of event</Text>
                </HStack>
              </ListItem>
              <ListItem color="gray.300" fontSize="sm">
                <HStack align="flex-start" spacing={2}>
                  <ListIcon as={FaCheckCircle} color="brand.500" mt={0.5} />
                  <Text>Cancellation policy applies</Text>
                </HStack>
              </ListItem>
            </List>
            </Box>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
