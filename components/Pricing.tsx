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
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

interface PricingSection {
  title: string
  emoji: string
  items: {
    title: string
    price?: string
    description?: string
    bullets?: string[]
  }[]
}

const pricingData: PricingSection[] = [
  {
    title: 'Studio Time',
    emoji: '🎛',
    items: [
      {
        title: 'Hourly Rate',
        price: '$60 per hour',
        description: '(Intro / indie artist rate available by request)',
      },
      {
        title: 'Session Blocks',
        bullets: [
          'Half-Day Session (4 hours) — $200',
          'Full-Day Lockout (8 hours) — $375',
        ],
        description: 'Session time includes engineering, setup, and basic session prep.',
      },
    ],
  },
  {
    title: 'Mixing & Production',
    emoji: '🎚',
    items: [
      {
        title: 'Mixing',
        bullets: [
          '$150 per song',
          'EP / Album (5+ songs) — $125 per song',
        ],
        description: 'Includes editing, vocal tuning, timing correction, cleanup, and up to 3 revision passes.',
      },
    ],
  },
  {
    title: 'Project Packages',
    emoji: '🎸',
    items: [
      {
        title: 'Single Release Package',
        price: '$350',
        description: 'Track, edit, mix, and master one song (Up to 8 hours total studio time)',
      },
      {
        title: 'EP Package (4–6 songs)',
        price: 'Starting at $1,400',
        description: 'Full tracking, editing, mixing, and mastering. Flexible scheduling over multiple sessions',
      },
      {
        title: 'Album Production',
        price: 'Starting at $2,800',
        description: 'Custom quote based on band size, style, and production needs',
      },
    ],
  },
  {
    title: 'Specialty Sessions',
    emoji: '🥁',
    items: [
      {
        title: 'Drum Tracking',
        bullets: [
          '4-hour minimum session',
          'Additional setup time may apply for large kits or complex mic setups',
        ],
      },
    ],
  },
]

export default function Pricing() {
  return (
    <Box bg="background.primary" py={16} id="pricing">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary">
              Pricing
            </Heading>
            <Text textAlign="center" color="text.secondary" maxW="2xl">
              Transparent pricing for all our services. Contact us for custom quotes or special arrangements.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {pricingData.map((section, sectionIdx) => (
              <Box
                key={sectionIdx}
                p={8}
                bg="background.primary"
                rounded="lg"
                shadow="lg"
                border="1px solid"
                borderColor="border.medium"
                _hover={{
                  shadow: 'xl',
                  borderColor: 'white',
                }}
                transition="all 0.3s"
              >
                <VStack spacing={6} align="stretch">
                  <HStack spacing={3}>
                    <Text fontSize="2xl">{section.emoji}</Text>
                    <Heading as="h3" size="lg" color="text.primary">
                      {section.title}
                    </Heading>
                  </HStack>

                  <Divider borderColor="border.medium" />

                  <VStack spacing={6} align="stretch">
                    {section.items.map((item, itemIdx) => (
                      <Box key={itemIdx}>
                        <VStack spacing={3} align="stretch">
                          <HStack justify="space-between" align="flex-start">
                            <Heading as="h4" size="md" color="text.primary">
                              {item.title}
                            </Heading>
                            {item.price && (
                              <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="white"
                                whiteSpace="nowrap"
                                ml={4}
                              >
                                {item.price}
                              </Text>
                            )}
                          </HStack>

                          {item.bullets && (
                            <List spacing={2}>
                              {item.bullets.map((bullet, bulletIdx) => (
                                <ListItem key={bulletIdx} color="text.secondary">
                                  <HStack align="flex-start" spacing={2}>
                                    <ListIcon
                                      as={FaCheckCircle}
                                      color="white"
                                      mt={1}
                                    />
                                    <Text>{bullet}</Text>
                                  </HStack>
                                </ListItem>
                              ))}
                            </List>
                          )}

                          {item.description && (
                            <Text color="text.secondary" fontSize="sm" fontStyle="italic">
                              {item.description}
                            </Text>
                          )}
                        </VStack>
                        {itemIdx < section.items.length - 1 && (
                          <Divider borderColor="border.medium" mt={4} />
                        )}
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
