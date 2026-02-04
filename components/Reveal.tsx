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
  // Default visible so above-the-fold content never renders "blank".
  // We'll only start hidden if the element is initially outside the viewport.
  const [isVisible, setIsVisible] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return

    // If the element is initially below the viewport, start hidden and reveal on intersection.
    // If it's already in view, keep it visible (prevents blank pages on load).
    const rect = ref.current.getBoundingClientRect()
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0
    if (!inViewport) setIsVisible(false)

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

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  // If user prefers reduced motion, show content immediately
  if (prefersReducedMotion) {
    return <Box w={width}>{children}</Box>
  }

  return (
    <Box ref={ref} w={width}>
      <motion.div
        initial={isVisible ? 'visible' : 'hidden'}
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
