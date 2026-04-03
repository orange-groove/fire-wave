'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { toCdnSrc } from '../lib/cloudflareImages'

export interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
  id?: string
  slidesToShow?: number
  autoplay?: boolean
  height?: { base: string; md: string }
}

export default function ImageCarousel({
  images,
  id = 'carousel',
  slidesToShow = 3,
  autoplay = true,
  height = { base: '250px', md: '350px' },
}: ImageCarouselProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
    onOpen()
  }

  const goToPrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Preload all images on mount for faster lightbox
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image()
      img.src = toCdnSrc(image.src)
    })
  }, [images])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: Math.min(slidesToShow, images.length),
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, images.length),
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
    <>
      <Box w="full" id={id}>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <Box key={index} px={2}>
              <Box
                position="relative"
                h={height}
                rounded="lg"
                overflow="hidden"
                cursor="pointer"
                onClick={() => openLightbox(index)}
                role="group"
              >
                <img
                  src={toCdnSrc(image.src)}
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
              {images.map((image, index) => (
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
                    src={toCdnSrc(image.src)}
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

            {/* Image counter */}
            <Box
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
              color="white"
              fontSize="sm"
              bg="blackAlpha.600"
              px={3}
              py={1}
              rounded="full"
            >
              {selectedIndex + 1} / {images.length}
            </Box>
          </Box>
        </ModalContent>
      </Modal>

      {/* Keep slick-theme styles, but avoid loading the slick icon font */}
      <style jsx global>{`
        #${id} .slick-prev:before,
        #${id} .slick-next:before,
        #${id} .slick-dots li button:before {
          font-family: inherit !important;
        }
        #${id} .slick-prev:before {
          content: '‹' !important;
        }
        #${id} .slick-next:before {
          content: '›' !important;
        }
        #${id} .slick-dots li button:before {
          content: '•' !important;
        }
      `}</style>
    </>
  )
}
