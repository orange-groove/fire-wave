'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react'
import Reveal from './Reveal'

interface ImageItem {
  src: string
  alt: string
  caption?: string
}

interface ImageSectionProps {
  title?: string
  subtitle?: string
  images: ImageItem[]
}

export default function ImageSection({ title, subtitle, images }: ImageSectionProps) {
  return (
    <Box bg="#0f0f0f" py={16}>
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={10}>
            {(title || subtitle) && (
              <VStack spacing={3} textAlign="center">
                {title && (
                  <Heading as="h2" size="lg" color="white">
                    {title}
                  </Heading>
                )}
                {subtitle && (
                  <Text color="gray.400" maxW="xl">
                    {subtitle}
                  </Text>
                )}
              </VStack>
            )}

            <SimpleGrid columns={{ base: 1, md: images.length > 1 ? 2 : 1 }} spacing={6} w="full">
              {images.map((image, index) => (
                <Box
                  key={index}
                  position="relative"
                  rounded="lg"
                  overflow="hidden"
                  h={{ base: '250px', md: '350px' }}
                  role="group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {image.caption && (
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="linear-gradient(transparent, rgba(0,0,0,0.8))"
                      p={4}
                    >
                      <Text color="white" fontWeight="500">
                        {image.caption}
                      </Text>
                    </Box>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
