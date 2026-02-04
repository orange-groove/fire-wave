'use client'

import {
  Box,
  Container,
  Heading,
  VStack,
} from '@chakra-ui/react'
import Reveal from './Reveal'
import ImageCarousel from './ImageCarousel'

const studioImages = [
  { src: '/board.jpg', alt: 'Mixing Board' },
  { src: '/control_room.jpg', alt: 'Control Room' },
  { src: '/drums.jpg', alt: 'Drum Kit' },
  { src: '/drums_2.jpg', alt: 'Drum Setup' },
  { src: '/guitars.jpg', alt: 'Guitars' },
  { src: '/mic.jpg', alt: 'Microphone' },
  { src: '/room_1.jpg', alt: 'Studio Room' },
  { src: '/room_2.jpg', alt: 'Recording Space' },
  { src: '/room_3.jpg', alt: 'Live Room' },
  { src: '/room_4.jpg', alt: 'Studio View' },
]

export default function Gallery() {
  return (
    <Box bg="#0a0a0a" py={20} id="gallery">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="white">
              The Studio
            </Heading>
            
            <Box w="full" px={{ base: 0, md: 4 }}>
              <ImageCarousel
                images={studioImages}
                id="gallery-carousel"
                slidesToShow={3}
                autoplay={true}
              />
            </Box>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
