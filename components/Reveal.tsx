'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { sectionReveal } from '../lib/motion'

interface RevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
}

export default function Reveal({ 
  children, 
  width = '100%',
  delay = 0 
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // If user prefers reduced motion, show content immediately
  if (prefersReducedMotion) {
    return <Box w={width}>{children}</Box>
  }

  return (
    <Box ref={ref} w={width}>
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={{
          hidden: sectionReveal.hidden,
          visible: {
            ...sectionReveal.visible,
            transition: {
              ...sectionReveal.visible.transition,
              delay,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </Box>
  )
}
