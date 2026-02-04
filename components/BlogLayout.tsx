'use client'

import { Box, Container, VStack } from '@chakra-ui/react'
import Footer from './Footer'

interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <Box bg="#0a0a0a" minH="100vh" pt={20}>
      <Container maxW="container.md" py={12}>
        <VStack spacing={8} align="stretch">
          {children}
        </VStack>
      </Container>
      <Footer />
    </Box>
  )
}
