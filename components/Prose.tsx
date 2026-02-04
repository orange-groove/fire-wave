'use client'

import { Box, Heading, Text, UnorderedList, ListItem, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'

// Prose wrapper for nice blog typography
export function Prose({ children }: { children: ReactNode }) {
  return (
    <Box
      color="gray.300"
      fontSize={{ base: 'md', md: 'lg' }}
      lineHeight="1.8"
      sx={{
        '& > p': {
          mb: 6,
        },
        '& > h2': {
          color: 'white',
          fontWeight: '600',
          fontSize: { base: 'xl', md: '2xl' },
          mt: 10,
          mb: 4,
        },
        '& > h3': {
          color: 'white',
          fontWeight: '600',
          fontSize: { base: 'lg', md: 'xl' },
          mt: 8,
          mb: 3,
        },
        '& > ul': {
          pl: 6,
          mb: 6,
        },
        '& > ul > li': {
          mb: 2,
        },
      }}
    >
      {children}
    </Box>
  )
}

// Helper components for blog content
export function P({ children }: { children: ReactNode }) {
  return <Text as="p">{children}</Text>
}

export function H2({ children }: { children: ReactNode }) {
  return <Heading as="h2">{children}</Heading>
}

export function H3({ children }: { children: ReactNode }) {
  return <Heading as="h3">{children}</Heading>
}

export function UL({ children }: { children: ReactNode }) {
  return <UnorderedList>{children}</UnorderedList>
}

export function LI({ children }: { children: ReactNode }) {
  return <ListItem>{children}</ListItem>
}

export function InternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <ChakraLink color="brand.400" _hover={{ color: 'brand.300' }}>
        {children}
      </ChakraLink>
    </Link>
  )
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ChakraLink href={href} isExternal color="brand.400" _hover={{ color: 'brand.300' }}>
      {children}
    </ChakraLink>
  )
}
