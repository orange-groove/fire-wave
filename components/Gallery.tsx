'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Heading,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Slider from 'react-slick'
import Reveal from './Reveal'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    onOpen()
  }

  const goToPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? studioImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === studioImages.length - 1 ? 0 : prev + 1))
  }

  // Preload all images on mount for faster lightbox
  useEffect(() => {
    studioImages.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <Box bg="#0a0a0a" py={20} id="gallery">
      <Container maxW="container.xl">
        <Reveal>
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center" color="white">
              The Studio
            </Heading>
            
            <Box w="full" px={{ base: 0, md: 4 }}>
              <Slider {...sliderSettings}>
                {studioImages.map((image, index) => (
                  <Box key={index} px={2}>
                    <Box
                      position="relative"
                      h={{ base: '250px', md: '350px' }}
                      rounded="lg"
                      overflow="hidden"
                      cursor="pointer"
                      onClick={() => openLightbox(index)}
                      role="group"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          transition: 'transform 0.3s ease',
                        }}
                        loading="eager"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </VStack>
        </Reveal>
      </Container>

      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay bg="blackAlpha.900" />
        <ModalContent bg="transparent" boxShadow="none" maxW="100vw" maxH="100vh" m={0}>
          <ModalCloseButton color="white" size="lg" zIndex={10} top={4} right={4} />
          
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="100vh"
            w="100vw"
            position="relative"
          >
            {/* Prev Button */}
            <IconButton
              aria-label="Previous image"
              icon={<ChevronLeftIcon boxSize={10} />}
              position="absolute"
              left={4}
              zIndex={10}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={goToPrev}
              size="lg"
            />

            {/* Images - render all, show selected */}
            <Box position="relative" w="90vw" h="85vh" maxW="1400px">
              {studioImages.map((image, index) => (
                <Box
                  key={index}
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  opacity={index === selectedIndex ? 1 : 0}
                  transition="opacity 0.2s"
                  pointerEvents={index === selectedIndex ? 'auto' : 'none'}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Box>

            {/* Next Button */}
            <IconButton
              aria-label="Next image"
              icon={<ChevronRightIcon boxSize={10} />}
              position="absolute"
              right={4}
              zIndex={10}
              variant="ghost"
              color="white"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={goToNext}
              size="lg"
            />
          </Box>
        </ModalContent>
      </Modal>

      <style jsx global>{`
        #gallery .slick-dots li button:before {
          color: #666;
          font-size: 10px;
        }
        #gallery .slick-dots li.slick-active button:before {
          color: #f97316;
        }
        #gallery .slick-prev,
        #gallery .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        #gallery .slick-prev {
          left: -5px;
        }
        #gallery .slick-next {
          right: -5px;
        }
        #gallery .slick-prev:before,
        #gallery .slick-next:before {
          font-size: 40px;
          color: #f97316;
          opacity: 0.8;
        }
        #gallery .slick-prev:hover:before,
        #gallery .slick-next:hover:before {
          opacity: 1;
        }
        @media (max-width: 640px) {
          #gallery .slick-prev,
          #gallery .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </Box>
  )
}
