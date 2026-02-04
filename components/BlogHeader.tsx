'use client'

import { Box, Heading, Text, HStack, VStack } from '@chakra-ui/react'

interface BlogHeaderProps {
  title: string
  date: string
  readTime?: string
}

export default function BlogHeader({ title, date, readTime }: BlogHeaderProps) {
  return (
    <VStack spacing={4} align="start" pb={6} borderBottom="1px solid" borderColor="gray.800">
      <Heading
        as="h1"
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="700"
        color="white"
        lineHeight="1.2"
      >
        {title}
      </Heading>
      <HStack spacing={4} color="gray.500" fontSize="sm">
        <Text>{date}</Text>
        {readTime && (
          <>
            <Text>•</Text>
            <Text>{readTime}</Text>
          </>
        )}
      </HStack>
    </VStack>
  )
}
