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
import Reveal from './Reveal'

interface PricingSection {
  title: string
  emoji: string
  anchorId?: string
  items: {
    title: string
    price?: string
    description?: string
    bullets?: string[]
  }[]
}

const pricingData: PricingSection[] = [
  {
    title: 'Project Packages',
    emoji: '🎸',
    items: [
      {
        title: 'Single Release Package',
        price: '$400',
        description: 'Track, edit, mix, and master one song (Up to 8 hours total studio time). Additional studio time billed at standard hourly or session rates.',
      },
      {
        title: 'EP Package (4–6 songs)',
        price: 'Starting at $1,400',
        description: 'Full tracking, editing, mixing, and mastering. Flexible scheduling over multiple sessions.',
      },
      {
        title: 'Album Production',
        price: 'Starting at $2,800',
        description: 'Custom quote based on band size, style, and production needs.',
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
    title: 'Specialty Sessions',
    emoji: '🥁',
    items: [
      {
        title: 'Drum Tracking',
        bullets: [
          '4-hour minimum session',
          'Additional setup time may apply for large kits or complex mic setups',
        ],
        description: 'Band-ready live room with premium drum mics.',
      },
    ],
  },
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
    title: 'Rehearsal Space',
    emoji: '👥',
    anchorId: 'rehearsal-space',
    items: [
      {
        title: 'Rates',
        bullets: [
          '$50 per hour (2-hour minimum)',
          'Block rates available',
          'Discounted rates for bands recording with us',
        ],
        description: 'Reach out to check availability or to discuss long-term rehearsal arrangements.',
      },
    ],
  },
]

export default function Pricing() {
  return (
    <Box bg="#0a0a0a" py={20} id="pricing">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            <VStack spacing={4}>
              <Heading as="h2" size="xl" textAlign="center" color="white">
                Pricing
              </Heading>
              <Text textAlign="center" color="gray.400" maxW="2xl">
                Transparent pricing for all our services. Contact us for custom quotes or special arrangements.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
              {pricingData.map((section, sectionIdx) => (
                <Box
                  key={sectionIdx}
                  id={section.anchorId}
                  p={8}
                  bg="#141414"
                  rounded="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  _hover={{
                    borderColor: 'brand.500',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                  }}
                  transition="all 0.3s ease"
                >
                <VStack spacing={6} align="stretch">
                  <HStack spacing={3}>
                    <Text fontSize="2xl">{section.emoji}</Text>
                    <Heading as="h3" size="lg" color="white">
                      {section.title}
                    </Heading>
                  </HStack>

                  <Divider borderColor="gray.700" />

                  <VStack spacing={6} align="stretch">
                    {section.items.map((item, itemIdx) => (
                      <Box key={itemIdx}>
                        <VStack spacing={3} align="stretch">
                          <HStack justify="space-between" align="flex-start">
                            <Heading as="h4" size="md" color="white">
                              {item.title}
                            </Heading>
                            {item.price && (
                              <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="brand.400"
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
                                <ListItem key={bulletIdx} color="gray.300">
                                  <HStack align="flex-start" spacing={2}>
                                    <ListIcon
                                      as={FaCheckCircle}
                                      color="brand.500"
                                      mt={1}
                                    />
                                    <Text>{bullet}</Text>
                                  </HStack>
                                </ListItem>
                              ))}
                            </List>
                          )}

                          {item.description && (
                            <Text color="gray.400" fontSize="sm" fontStyle="italic">
                              {item.description}
                            </Text>
                          )}
                        </VStack>
                        {itemIdx < section.items.length - 1 && (
                          <Divider borderColor="gray.700" mt={4} />
                        )}
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            ))}
            </SimpleGrid>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
