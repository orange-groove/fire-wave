'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useDisclosure,
  HStack,
  IconButton,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Text
      as="a"
      href={href}
      onClick={handleClick}
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        transform: 'scale(1.1)',
      }}
      cursor="pointer"
      color="white"
      fontWeight="500"
      transition="transform 0.2s ease"
    >
      {children}
    </Text>
  )
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box bg="black" px={4} boxShadow={'sm'} position="fixed" top={0} left={0} right={0} zIndex={1000} borderBottom="1px solid" borderColor="border.light">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box 
              cursor="pointer" 
              onClick={handleLogoClick}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
             <Text fontSize="xl" fontWeight="medium" color="brand.500">Fire Wave Studio</Text>
            </Box>
            
            {!isMobile && (
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#live-sound">Live Sound</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </HStack>
            )}
          </HStack>

          <Flex alignItems={'center'}>
            {!isMobile && (
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                _hover={{
                  bg: 'brand.500',
                  color: 'white',
                }}
              >
                Get Started
              </Button>
            )}
            {isMobile && (
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
                color="gray.800"
                bg="transparent"
                _hover={{ bg: 'gray.100' }}
              />
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#live-sound">Live Sound</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
} 