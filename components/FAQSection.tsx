'use client'

import {
  Box,
  Container,
  Heading,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/react'
import Script from 'next/script'
import Reveal from './Reveal'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs: FAQ[]
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs }: FAQSectionProps) {
  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Box bg="#111111" py={20} id="faq">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container maxW="container.lg">
        <Reveal>
          <VStack spacing={10}>
            <Heading as="h2" size="xl" color="white" textAlign="center">
              {title}
            </Heading>

            <Accordion allowMultiple w="full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  border="1px solid"
                  borderColor="gray.800"
                  rounded="lg"
                  mb={4}
                  bg="#1a1a1a"
                >
                  <AccordionButton
                    py={5}
                    px={6}
                    _hover={{ bg: 'rgba(255,255,255,0.02)' }}
                    _expanded={{ bg: 'rgba(249, 115, 22, 0.05)' }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text color="white" fontWeight="600" fontSize="md">
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon color="brand.500" />
                  </AccordionButton>
                  <AccordionPanel pb={5} px={6}>
                    <Text color="gray.400" lineHeight="tall">
                      {faq.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Reveal>
      </Container>
    </Box>
  )
}
