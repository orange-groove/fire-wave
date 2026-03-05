'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  Link as ChakraLink,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'

export default function RecordingCostContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="How Much Does It Cost to Record a Song in Savannah?"
              date="February 4, 2025"
              readTime="4 min read"
            />

            {/* Featured Image */}
            <Box
              w="full"
              h={{ base: '220px', md: '320px' }}
              rounded="lg"
              overflow="hidden"
              bg="#141414"
            >
              <img
                src="/board.jpg"
                alt="Recording studio mixing board at Fire Wave Sound"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
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
              {/* Intro */}
              <Text>
                If you&apos;re planning to record music in the Savannah area, one of the first questions is simple: how much will it cost?
              </Text>
              <Text>
                The answer depends on a few variables — how prepared you are, how many musicians are involved, and how polished you want the final result to be.
              </Text>
              <Text>
                Here&apos;s a realistic breakdown.
              </Text>

              {/* Typical Studio Rates */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Typical Studio Rates in Savannah
              </Heading>
              <Text>
                In and around Savannah, recording studios generally charge:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>$50–$100 per hour for studio time</ListItem>
                <ListItem>Day rates may be available for longer sessions</ListItem>
                <ListItem>Mixing and mastering are often priced separately</ListItem>
              </UnorderedList>
              <Text>
                Rates vary based on the size of the studio, available gear, and the engineer&apos;s experience.
              </Text>
              <Text>
                At Fire Wave Sound, our standard rate is <strong>$40 per hour</strong> (2-hour minimum), with package options available for singles, EPs, and full projects.
              </Text>

              {/* What Affects Cost */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                What Affects the Cost of Recording?
              </Heading>

              <Heading as="h3" size="md" color="white" pt={4}>
                1. Preparation
              </Heading>
              <Text>
                Bands that rehearse beforehand finish faster. That directly lowers cost.
              </Text>

              <Heading as="h3" size="md" color="white" pt={4}>
                2. Number of Musicians
              </Heading>
              <Text>
                Tracking a full band takes more setup time than recording a solo artist.
              </Text>

              <Heading as="h3" size="md" color="white" pt={4}>
                3. Production Complexity
              </Heading>
              <Text>
                Layered guitars, vocal stacks, editing, tuning, and detailed mixing add time.
              </Text>

              <Heading as="h3" size="md" color="white" pt={4}>
                4. Mixing &amp; Mastering
              </Heading>
              <Text>
                Tracking is only part of the process.{' '}
                <Link href="/mixing-mastering-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    Mixing and mastering
                  </ChakraLink>
                </Link>{' '}
                shape the final sound for streaming platforms.
              </Text>

              {/* Budget Ranges */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Realistic Budget Ranges
              </Heading>
              <Text>
                Here&apos;s what most artists in Savannah can expect:
              </Text>

              <TableContainer>
                <Table variant="simple" size="sm">
                  <Thead>
                    <Tr>
                      <Th color="gray.400" borderColor="gray.700">Project Type</Th>
                      <Th color="gray.400" borderColor="gray.700">Estimated Cost</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td color="gray.300" borderColor="gray.800">Single (1 song)</Td>
                      <Td color="gray.300" borderColor="gray.800">$300–$600</Td>
                    </Tr>
                    <Tr>
                      <Td color="gray.300" borderColor="gray.800">EP (4–6 songs)</Td>
                      <Td color="gray.300" borderColor="gray.800">$1,000–$2,500</Td>
                    </Tr>
                    <Tr>
                      <Td color="gray.300" borderColor="gray.800">Full-length album</Td>
                      <Td color="gray.300" borderColor="gray.800">$2,500+</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>

              <Text>
                These are general estimates. A tight, well-rehearsed band recording efficiently can stay on the lower end. More complex productions will require more time.
              </Text>

              {/* Studio vs Home */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                Studio vs. Home Recording
              </Heading>
              <Text>
                Home setups are more accessible than ever — and they can work. But when recording{' '}
                <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    live drums
                  </ChakraLink>
                </Link>
                , full bands, or layered projects, a dedicated studio environment often speeds up the process and improves consistency.
              </Text>
              <Text>
                A professional studio provides:
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Controlled monitoring</ListItem>
                <ListItem>Proper mic placement</ListItem>
                <ListItem>Organized signal flow</ListItem>
                <ListItem>Efficient session workflow</ListItem>
              </UnorderedList>
              <Text>
                That usually means fewer revisions later.
              </Text>

              {/* What Should You Budget */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                So What Should You Budget?
              </Heading>
              <Text>
                If you&apos;re serious about releasing music on Spotify or Apple Music, plan for more than just tracking time. Factor in mixing, mastering, and artwork.
              </Text>
              <Text>
                If you&apos;re unsure where to start, reach out. We&apos;re happy to talk through your project and give you a realistic estimate based on your goals.
              </Text>
              <Text>
                If you&apos;re looking for a{' '}
                <Link href="/savannah-recording-studio" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    Savannah recording studio
                  </ChakraLink>
                </Link>
                , you can also view our current rates and packages on our pricing page.
              </Text>

              <Divider borderColor="gray.800" my={8} />

              {/* CTA */}
              <Box
                p={8}
                bg="#141414"
                rounded="lg"
                border="1px solid"
                borderColor="gray.800"
              >
                <VStack spacing={4} align="start">
                  <Text color="gray.300">
                    Ready to plan your project? Get in touch for a free estimate.
                  </Text>
                  <Link href="/#contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      variant="brand"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </VStack>
              </Box>

              {/* Back to Blog */}
              <Box pt={4}>
                <Link href="/blog" passHref legacyBehavior>
                  <ChakraLink color="gray.500" fontSize="sm" _hover={{ color: 'brand.400' }}>
                    ← Back to Blog
                  </ChakraLink>
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
