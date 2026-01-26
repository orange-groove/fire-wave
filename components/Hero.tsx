'use client'

import {
  Box,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { getContent } from '../lib/content'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const studioImages = [
  '/board.png',
  '/control_room.png',
  '/drums.png',
  '/drums_2.png',
  '/guitars.png',
  '/mic.png',
  '/room_1.png',
  '/room_2.png',
  '/room_3.png',
  '/room_4.png',
]

export default function Hero() {
  const content = getContent()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Trigger logo animation after component mounts
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

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
        {isMounted ? (
          <Slider {...sliderSettings}>
            {studioImages.map((image, index) => (
              <div key={index}>
                <Box
                  position="relative"
                  w="100%"
                  h="100vh"
                  sx={{
                    '& img': {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    },
                  }}
                >
                  <img
                    src={image}
                    alt={`Studio image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </Box>
              </div>
            ))}
          </Slider>
        ) : (
          // Fallback: show first image while slider loads
          <Box position="relative" w="100%" h="100%">
            <img
              src={studioImages[0]}
              alt="Studio image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}
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
            <Box
              transition="all 3s ease-in-out"
              transform={isLoaded ? 'scale(1.1)' : 'scale(1)'}
              overflow="visible"
            >
              <Text fontSize={['40px', '60px', '80px']} color="text.primary">Fire Wave Studios</Text>
            </Box>
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