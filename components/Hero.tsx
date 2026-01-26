'use client'

import {
  Box,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Slider from 'react-slick'
import { getContent } from '../lib/content'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const studioImages = [
  '/board.jpg',
  '/control_room.jpg',
  '/drums.jpg',
  '/drums_2.jpg',
  '/guitars.jpg',
  '/mic.jpg',
  '/room_1.jpg',
  '/room_2.jpg',
  '/room_3.jpg',
  '/room_4.jpg',
]

export default function Hero() {
  const content = getContent()

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    cssEase: 'ease-in-out',
    lazyLoad: 'ondemand' as const,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
  }

  return (
    <Box 
      position="relative" 
      h="100vh" 
      w="100vw" 
      overflow="hidden"
      bg="background.primary"
    >
      {/* Background Images Slider */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={1}
      >
        <Slider {...sliderSettings}>
          {studioImages.map((image, index) => (
            <div key={image}>
              <Box
                position="relative"
                w="100%"
                h="100vh"
                overflow="hidden"
              >
                <Image
                  src={image}
                  alt={`Studio image ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  priority={index === 0}
                  quality={85}
                />
              </Box>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Black Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={2}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={3}
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Text fontSize={['40px', '60px', '80px']} color="text.primary">Fire Wave Studios</Text>
            <Text
              fontSize="xl"
              color="text.primary"
              maxW="2xl"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
            >
              {content.hero.subtitle}
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
} 