import { extendTheme } from '@chakra-ui/react'

const colors = {
  // Fire accent colors - used sparingly for highlights and accents
  brand: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // Fire orange - for subtle accents only
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  // Cool accent color for contrast (fire and water)
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // Cyan blue
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },

  background: {
    primary: '#000000',
    secondary: '#050512',
  },
  
  // Text colors
  text: {
    primary: '#ededed',    // Main text
    secondary: '#b8b8b8',  // Secondary text
    muted: '#8a8a8a',      // Muted text
    inverse: '#050512',    // Text on light backgrounds
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Border colors
  border: {
    light: '#374151',
    medium: '#4b5563',
    dark: '#6b7280',
  },
  
  // Form colors
  form: {
    bg: 'background.secondary',
    border: 'border.medium',
    placeholder: '#a0a0a0',
  }
}

const theme = extendTheme({
  colors,
  config: {
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.primary',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'gray',
      },
      variants: {
        solid: {
          bg: '#ffffff',
          color: '#000000',
          fontWeight: '600',
          _hover: {
            bg: '#f5f5f5',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
          },
          _active: {
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s',
        },
        outline: {
          borderColor: '#ffffff',
          color: '#ffffff',
          _hover: {
            bg: 'rgba(255, 255, 255, 0.1)',
            borderColor: '#ffffff',
          },
        },
        // Brand orange button with dark text for WCAG AA contrast compliance
        brand: {
          bg: 'brand.500',
          color: 'gray.900',
          fontWeight: '600',
          _hover: {
            bg: 'brand.400',
            transform: 'translateY(-2px)',
          },
          _active: {
            bg: 'brand.600',
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s',
        },
      },
    },
    Input: {
      defaultProps: {
        bg: 'background.primary',
        borderColor: 'border.medium',
        color: 'text.primary',
        _placeholder: {
          color: '#666666',
        },
        _focus: {
          bg: 'background.primary',
          borderColor: 'accent.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-accent-500)',
        },
        _autofill: {
          bg: 'background.primary !important',
          color: 'text.primary !important',
        },
      },
      baseStyle: {
        _autofill: {
          bg: 'background.primary !important',
          color: 'text.primary !important',
          boxShadow: '0 0 0px 1000px #000000 inset !important',
        },
      },
    },
    Textarea: {
      defaultProps: {
        bg: 'background.primary',
        borderColor: 'border.medium',
        color: 'text.primary',
        _placeholder: {
          color: '#666666',
        },
        _focus: {
          bg: 'background.primary',
          borderColor: 'accent.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-accent-500)',
        },
      },
    },
  },
})

export default theme 