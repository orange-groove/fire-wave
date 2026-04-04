'use client'

import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'
import { toCdnSrc } from '../../../lib/cloudflareImages'

// Lazy-load ImageCarousel to reduce initial JS bundle
const ImageCarousel = dynamic(() => import('../../../components/ImageCarousel'), {
  ssr: false,
  loading: () => <Box h={{ base: '250px', md: '350px' }} bg="gray.900" rounded="lg" />,
})

const sessionImages = [
  { src: '/sipid_30.jpg', alt: 'Sipid recording session at Fire Wave Sound' },
  { src: '/sipid_29.jpg', alt: 'Sipid tracking at Fire Wave Sound' },
  { src: '/sipid_25.jpg', alt: 'Sipid in the studio at Fire Wave Sound' },
  { src: '/sipid_22.jpg', alt: 'Sipid recording at Fire Wave Sound' },
  { src: '/sipid_19.jpg', alt: 'Sipid session photo at Fire Wave Sound' },
  { src: '/sipid_18.jpg', alt: 'Sipid band recording at Fire Wave Sound' },
  { src: '/sipid_16.jpg', alt: 'Sipid studio moment at Fire Wave Sound' },
  { src: '/sipid_14.jpg', alt: 'Sipid tracking session at Fire Wave Sound' },
  { src: '/sipid_7.jpg', alt: 'Sipid recording session photo at Fire Wave Sound' },
  { src: '/sipid_3.jpg', alt: 'Sipid in-studio photo at Fire Wave Sound' },
  { src: '/sipid_2.jpg', alt: 'Sipid recording at Fire Wave Sound studio' },
]

export default function SipidPostContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <Box>
              <Link href="/blog" passHref legacyBehavior>
                <ChakraLink color="gray.500" fontSize="sm" _hover={{ color: 'brand.400' }}>
                  ← Back to Blog
                </ChakraLink>
              </Link>
            </Box>

            <BlogHeader
              title="Recording Sipid at Fire Wave Sound"
              date="April 3, 2026"
              readTime="4 min read"
            />

            {/* Featured Image */}
            <Box
              w="full"
              h={{ base: '250px', md: '350px' }}
              rounded="lg"
              overflow="hidden"
              bg="#141414"
            >
              <img
                src={toCdnSrc('/sipid_30.jpg')}
                alt="Sipid recording at Fire Wave Sound"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Session Photos Carousel */}
            <Box pt={2}>
              <ImageCarousel
                images={sessionImages}
                id="sipid-carousel"
                slidesToShow={2}
                autoplay={false}
                height={{ base: '220px', md: '300px' }}
              />
            </Box>

            {/* Article Content */}
            <VStack
              spacing={6}
              align="stretch"
              color="gray.300"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.8"
            >
              <Text>
                We recently had Sipid in at Fire Wave Sound for a recording session, and they were an awesome group to work with
                from start to finish.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={4}>
                Building the Song from a Scratch Track
              </Heading>
              <Text>
                For this session, we started with a scratch track to a click, which gave us a solid foundation for the song.
              </Text>
              <Text>
                From there, we replaced each instrument one by one over the click track to build the final production with tight
                performances and a clean arrangement.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={4}>
                Amp Capture with a Two Notes Torpedo
              </Heading>
              <Text>
                We didn&apos;t mic amps during this session. Instead, we used a Two Notes Torpedo load box to capture Andrew&apos;s amp
                tone, which gave us a controlled workflow while still holding onto the character of his sound.
              </Text>

              <Heading as="h2" size="lg" color="white" pt={4}>
                Stacked Vocals for Size
              </Heading>
              <Text>
                For vocals, we triple tracked them and layered them together for a bigger, fuller sound.
              </Text>
              <Text>
                The lead vocal stayed up front, while the additional vocal layers supported it and helped give the chorus and key
                moments more energy and width.
              </Text>

              <Text>
                Sipid was a blast to work with, and we&apos;re excited to have them back at Fire Wave Sound to work on their upcoming
                EP.
              </Text>

              <Divider borderColor="gray.800" my={4} />

              <Text>
                If your band is looking for a studio in the Savannah / Richmond Hill area to track your next single or EP, Fire
                Wave Sound offers a comfortable, creative environment for rock, country, indie, and heavy music projects.
              </Text>

              <Box pt={2}>
                <Link href="/#contact" passHref legacyBehavior>
                  <Button as="a" variant="brand">
                    Contact / Book Time
                  </Button>
                </Link>
              </Box>
            </VStack>
          </VStack>
        </Reveal>
      </Container>
      <Footer />
    </Box>
  )
}

