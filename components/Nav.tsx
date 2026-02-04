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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleClick = (e: React.MouseEvent) => {
    // Only use smooth scroll on homepage for hash links
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // If it's a hash link and we're on homepage, use onClick
  // Otherwise use Link for navigation
  if (href.startsWith('#')) {
    return (
      <Text
        as="a"
        href={isHomePage ? href : `/${href}`}
        onClick={handleClick}
        px={2}
        py={1}
        _hover={{
          textDecoration: 'none',
          color: 'brand.400',
        }}
        cursor="pointer"
        color="white"
        fontWeight="500"
        transition="color 0.2s ease"
      >
        {children}
      </Text>
    )
  }

  return (
    <Link href={href} passHref>
      <Text
        px={2}
        py={1}
        _hover={{
          textDecoration: 'none',
          color: 'brand.400',
        }}
        cursor="pointer"
        color="white"
        fontWeight="500"
        transition="color 0.2s ease"
      >
        {children}
      </Text>
    </Link>
  )
}

const serviceLinks = [
  { href: '/savannah-recording-studio', label: 'Recording Studio' },
  { href: '/mixing-mastering-savannah', label: 'Mixing & Mastering' },
  { href: '/drum-tracking-savannah', label: 'Drum Tracking' },
  { href: '/live-sound-savannah', label: 'Live Sound' },
]

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    if (isHomePage) {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = '/#contact'
    }
  }

  return (
    <Box bg="black" px={4} boxShadow={'sm'} position="fixed" top={0} left={0} right={0} zIndex={1000} borderBottom="1px solid" borderColor="gray.800">
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link href="/" passHref>
              <Box 
                cursor="pointer" 
                onClick={handleLogoClick}
                _hover={{ opacity: 0.8 }}
                transition="opacity 0.2s"
              >
                <Text fontSize="xl" fontWeight="medium" color="brand.500" fontFamily="var(--font-orbitron)">Fire Wave Sound</Text>
              </Box>
            </Link>
            
            {!isMobile && (
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                <NavLink href="#about">About</NavLink>
                
                {/* Services Dropdown */}
                <Menu>
                  <MenuButton
                    px={2}
                    py={1}
                    color="white"
                    fontWeight="500"
                    _hover={{ color: 'brand.400' }}
                    transition="color 0.2s ease"
                  >
                    Services <ChevronDownIcon />
                  </MenuButton>
                  <MenuList bg="#1a1a1a" borderColor="gray.700">
                    {serviceLinks.map((link) => (
                      <Link key={link.href} href={link.href} passHref>
                        <MenuItem
                          bg="#1a1a1a"
                          color="gray.300"
                          _hover={{ bg: '#252525', color: 'brand.400' }}
                        >
                          {link.label}
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>

                <NavLink href="#pricing">Pricing</NavLink>
                <Link href="/blog" passHref>
                  <Text
                    px={2}
                    py={1}
                    _hover={{ color: 'brand.400' }}
                    cursor="pointer"
                    color="white"
                    fontWeight="500"
                    transition="color 0.2s ease"
                  >
                    Blog
                  </Text>
                </Link>
                <NavLink href="#contact">Contact</NavLink>
              </HStack>
            )}
          </HStack>

          <Flex alignItems={'center'}>
            {!isMobile && (
              <Button
                onClick={handleContactClick}
                bg="brand.500"
                color="white"
                _hover={{
                  bg: 'brand.600',
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
                color="white"
                bg="transparent"
                _hover={{ bg: 'gray.800' }}
              />
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg="black">
            <Stack as={'nav'} spacing={4}>
              <NavLink href="#about">About</NavLink>
              
              {/* Mobile Services Section */}
              <VStack align="start" spacing={2} pl={2}>
                <Text color="gray.500" fontSize="sm" fontWeight="600">Services</Text>
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <Text
                      color="white"
                      fontSize="sm"
                      pl={2}
                      _hover={{ color: 'brand.400' }}
                    >
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </VStack>

              <NavLink href="#pricing">Pricing</NavLink>
              <Link href="/blog" passHref>
                <Text
                  px={2}
                  py={1}
                  color="white"
                  fontWeight="500"
                  _hover={{ color: 'brand.400' }}
                >
                  Blog
                </Text>
              </Link>
              <NavLink href="#contact">Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}
