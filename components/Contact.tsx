'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useState } from 'react'
import { getContent } from '../lib/content'

export default function Contact() {
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const content = getContent()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Please fill in all required fields correctly.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        toast({
          title: "Failed to send message",
          description: result.error || "Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box bg="#0a0a0a" py={20} id="contact">
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" color="white">
            {content.contact.title}
          </Heading>
          <Box as="form" onSubmit={handleContactSubmit} w="full" maxW="lg">
            <VStack spacing={6}>
              <FormControl isRequired isInvalid={!!errors.name}>
                <FormLabel color="gray.300">Name</FormLabel>
                <Input 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  bg="#141414"
                  borderColor="gray.700"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  _hover={{ borderColor: 'gray.600' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.email}>
                <FormLabel color="gray.300">Email</FormLabel>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  bg="#141414"
                  borderColor="gray.700"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  _hover={{ borderColor: 'gray.600' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              
              <FormControl>
                <FormLabel color="gray.300">Phone</FormLabel>
                <Input 
                  placeholder="Your phone number" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  bg="#141414"
                  borderColor="gray.700"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  _hover={{ borderColor: 'gray.600' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                />
              </FormControl>
              
              <FormControl isRequired isInvalid={!!errors.message}>
                <FormLabel color="gray.300">Message</FormLabel>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  bg="#141414"
                  borderColor="gray.700"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  _hover={{ borderColor: 'gray.600' }}
                  _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>
              
              <Button 
                type="submit" 
                size="lg" 
                w="full"
                isLoading={isSubmitting}
                loadingText="Sending..."
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
} 