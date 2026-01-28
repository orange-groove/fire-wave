'use client'

import {
  Box,
  Container,
} from '@chakra-ui/react'
import Image from 'next/image'
import Slider from 'react-slick'

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
      bg="white"
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
        <Container maxW="container.xl" display="flex" justifyContent="center">
          <Image
            src="/logo.png"
            alt="Fire Wave Studios"
            width={600}
            height={600}
            priority
            style={{
              filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.5))',
              maxWidth: '80vw',
              height: 'auto',
            }}
          />
        </Container>
      </Box>
    </Box>
  )
}