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
  OrderedList,
} from '@chakra-ui/react'
import Link from 'next/link'
import BlogHeader from '../../../components/BlogHeader'
import Reveal from '../../../components/Reveal'
import Footer from '../../../components/Footer'
import { toCdnSrc } from '../../../lib/cloudflareImages'

export default function DrumPrepContent() {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <Reveal>
          <VStack spacing={8} align="stretch">
            <BlogHeader
              title="How to Prepare for a Drum Tracking Session"
              date="February 4, 2025"
              readTime="6 min read"
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
                src={toCdnSrc('/drums.jpg')}
                alt="Drum kit ready for recording at Fire Wave Sound"
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
                If you want drums that hit hard and sit in the mix without endless fixing later, most of the work happens before the first mic goes up.
              </Text>
              <Text>
                Here&apos;s how to show up prepared and get the most out of a drum tracking session.
              </Text>

              {/* 1. Pick the Right Kit */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                1. Pick the Right Drum Kit for the Songs
              </Heading>
              <Text>
                This sounds obvious, but it matters.
              </Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Rock/metal usually needs a kit that can take hard hits without falling apart.</ListItem>
                <ListItem>Country/indie often benefits from a warmer, more controlled kit.</ListItem>
                <ListItem>Jazz or dynamic music needs sensitivity and consistent touch.</ListItem>
              </UnorderedList>
              <Text>
                If you have multiple snares or cymbals, bring options — a snare swap can change a track faster than any plugin.
              </Text>

              {/* 2. Fresh Heads */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                2. Fresh Heads (or At Least Heads You Trust)
              </Heading>
              <Text>
                If your heads are dead, the engineer can&apos;t save you.
              </Text>
              <Text>At minimum:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>New or lightly used batter heads</ListItem>
                <ListItem>A resonant kick head that isn&apos;t destroyed</ListItem>
                <ListItem>Snare that can hold tuning</ListItem>
              </UnorderedList>
              <Text>
                If you can&apos;t replace all heads, prioritize: <strong>snare batter + kick batter</strong>.
              </Text>

              {/* 3. Tune the Kit */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                3. Tune the Kit (or Be Ready to Tune)
              </Heading>
              <Text>
                You don&apos;t have to be a drum tech, but you should be ready for tuning time.
              </Text>
              <Text>Plan for:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>15–45 minutes of tuning depending on the kit</ListItem>
                <ListItem>Small adjustments after the first takes (normal)</ListItem>
              </UnorderedList>
              <Text>
                Also: stop chasing the &ldquo;solo drum&rdquo; sound. Tuning is about how the kit works <em>in the song</em>.
              </Text>

              {/* 4. Bring the Quiet Stuff */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                4. Bring the Quiet Stuff You Forget
              </Heading>
              <Text>These save sessions:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Drum key (bring two)</ListItem>
                <ListItem>Moon gels / dampening</ListItem>
                <ListItem>Gaffer tape</ListItem>
                <ListItem>Spare snare wires</ListItem>
                <ListItem>Extra sticks</ListItem>
                <ListItem>Pedal spring / beater backup</ListItem>
                <ListItem>A rug if your kick slips (studio may have one, but don&apos;t assume)</ListItem>
              </UnorderedList>
              <Text>
                Also: check your hardware for squeaks and rattles. That stuff will show up in close mics.
              </Text>

              {/* 5. Click Track */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                5. Decide: Click Track or No Click
              </Heading>
              <Text>
                If the song needs tight edits, layered guitars, or programmed elements later, use a click.
              </Text>
              <Text>
                If it&apos;s a live-feel track, you can track without a click — but you need a drummer with strong internal time.
              </Text>
              <Text>If you&apos;re unsure, split the difference:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Try click for a pass</ListItem>
                <ListItem>Try no click for a pass</ListItem>
                <ListItem>Pick what feels best</ListItem>
              </UnorderedList>

              {/* 6. Rehearse the Arrangement */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                6. Rehearse to the Arrangement You&apos;re Recording
              </Heading>
              <Text>
                Studio time disappears when the arrangement isn&apos;t settled.
              </Text>
              <Text>Before you record:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Confirm song structure</ListItem>
                <ListItem>Confirm tempo (if using click)</ListItem>
                <ListItem>Confirm endings and stops</ListItem>
                <ListItem>Confirm if there are any breakdowns / halftime sections</ListItem>
              </UnorderedList>
              <Text>
                If the band is tracking together for scratch takes, the drummer needs to know where every change happens.
              </Text>

              {/* 7. Consistency */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                7. Prioritize Consistency Over &ldquo;Going for It&rdquo;
              </Heading>
              <Text>
                The studio rewards consistency.
              </Text>
              <Text>
                Harder hits don&apos;t automatically sound better. <strong>Consistent hits sound better.</strong>
              </Text>
              <Text>Especially on:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Snare</ListItem>
                <ListItem>Hats</ListItem>
                <ListItem>Kick dynamics</ListItem>
              </UnorderedList>
              <Text>
                A great performance isn&apos;t just &ldquo;energy&rdquo; — it&apos;s repeatable control.
              </Text>

              {/* 8. Workflow */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                8. Plan Your Workflow: Scratch vs Final Drums
              </Heading>
              <Text>A common approach (and often the fastest):</Text>
              <OrderedList pl={6} spacing={2}>
                <ListItem>Track full band together for a scratch take</ListItem>
                <ListItem>Keep the scratch drums if they&apos;re great, or redo drums after</ListItem>
                <ListItem>Layer guitars and bass</ListItem>
                <ListItem>Track vocals</ListItem>
                <ListItem>Mix and master</ListItem>
              </OrderedList>
              <Text>
                Sometimes the scratch drum take has the best feel. If it&apos;s strong, keeping it can save hours and preserve the energy of the session.
              </Text>

              {/* 9. Rough Mixes */}
              <Heading as="h2" size="lg" color="white" pt={6}>
                9. Ask for Rough Mixes During the Session
              </Heading>
              <Text>A quick rough mix helps you:</Text>
              <UnorderedList pl={6} spacing={2}>
                <ListItem>Hear issues early</ListItem>
                <ListItem>Confirm vibe and tone</ListItem>
                <ListItem>Avoid surprises later</ListItem>
              </UnorderedList>
              <Text>
                If something feels off, fix it while the kit is still set up.
              </Text>

              <Divider borderColor="gray.800" my={8} />

              {/* CTA */}
              <Heading as="h2" size="lg" color="white">
                Want to Track Drums Near Savannah?
              </Heading>
              <Text>
                Fire Wave Sound records live drums in Richmond Hill, just outside Savannah. If you&apos;re planning a session and want to talk through setup, click vs no click, or how to structure the day, reach out.
              </Text>
              <Text>
                And if you&apos;re specifically looking for drum tracking near Savannah, you can read more here:{' '}
                <Link href="/drum-tracking-savannah" passHref legacyBehavior>
                  <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
                    Drum Tracking in Savannah
                  </ChakraLink>
                </Link>
              </Text>

              <Box
                p={8}
                bg="#141414"
                rounded="lg"
                border="1px solid"
                borderColor="gray.800"
                mt={4}
              >
                <VStack spacing={4} align="start">
                  <Text color="gray.300">
                    Ready to book a drum session? Get in touch.
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
