// Centralized motion settings for consistent animations across the site

export const motionConfig = {
  // Durations
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },
  
  // Easing curves
  ease: {
    smooth: [0.25, 0.1, 0.25, 1], // cubic-bezier
    out: [0, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
  },
  
  // Distances
  distance: {
    small: 8,
    medium: 12,
    large: 16,
  },
  
  // Stagger delays
  stagger: {
    fast: 0.08,
    normal: 0.12,
    slow: 0.15,
  },
}

// Reusable animation variants
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: motionConfig.distance.medium 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.ease.smooth,
    }
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.ease.smooth,
    }
  },
}

// Hero stagger container
export const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionConfig.stagger.normal,
      delayChildren: 0.1,
    },
  },
}

// Hero child items
export const heroItem = {
  hidden: { 
    opacity: 0, 
    y: motionConfig.distance.medium 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.ease.smooth,
    },
  },
}

// Section reveal
export const sectionReveal = {
  hidden: { 
    opacity: 0, 
    y: motionConfig.distance.large 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.ease.smooth,
    },
  },
}

// Card hover styles (CSS values for Chakra)
export const cardHover = {
  transform: 'translateY(-4px)',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
  borderColor: 'brand.500',
}

export const cardTap = {
  transform: 'translateY(-2px) scale(0.99)',
}
