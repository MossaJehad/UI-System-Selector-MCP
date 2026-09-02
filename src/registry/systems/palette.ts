import { UISystem } from '../../schemas/uiSystem.js';

export const palette: UISystem = {
  id: 'palette',
  name: 'Artsy Palette',
  organization: 'Artsy',
  description: 'Artsy’s official open-source design system and React/React Native component suite, engineered for fine art auctions, gallery exhibitions, high-resolution artwork viewports, and artist biography showcases.',
  category: 'company-design-system',
  secondaryCategories: ['creative-tool', 'ecommerce', 'mobile'],
  frameworks: ['react', 'react-native'],
  stylingApproach: 'styled-components',
  packageNames: ['@artsy/palette'],
  docsUrl: 'https://palette.artsy.net',
  repositoryUrl: 'https://github.com/artsy/palette',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA across Artsy web and mobile art collectors.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in TypeScript theme object and CSS variables',
    packageName: '@artsy/palette'
  },
  icons: {
    available: true,
    packageName: '@artsy/palette',
    name: 'Artsy Palette Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'Sophisticated, gallery-grade fine art aesthetic: stark monochrome black/white (#000000 / #ffffff), Unica77 serif/sans typography, generous whitespace framing artwork, and live bidding status counters.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Fine art galleries, auction houses, museum exhibitions, and luxury collectors portals',
    'High-resolution image showcases, photography portfolios, and cultural archives',
    'Universal React Web & React Native mobile applications'
  ],
  avoidFor: [
    'Dense corporate accounting spreadsheets'
  ],
  strengths: [
    'Unmatched visual elegance and museum-grade gallery presentation',
    'Unified cross-platform primitives working seamlessly on React Web and React Native',
    'Specialized artwork components (ArtworkGrid, ArtistCard, AuctionTimer, BidBar)'
  ],
  weaknesses: [
    'Art gallery and luxury aesthetic is intentionally minimal and spacious'
  ],
  tags: [
    'artsy',
    'palette',
    'art',
    'gallery',
    'auction',
    'luxury',
    'creative-tool',
    'react-native',
    'styled-components',
    'hidden-gem'
  ],
  aliases: ['Palette', 'Artsy Design System', 'Artsy UI'],
  systemTypes: ['company-design-system', 'component-library', 'mobile'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @artsy/palette styled-components',
      packages: ['@artsy/palette', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your app in `<Theme>` from `@artsy/palette`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Artsy Palette action button with variant="fillDark" | "fillLight" | "outline".',
      importExample: "import { Button } from '@artsy/palette';\n\n<Button variant=\"fillDark\">Bid on Artwork</Button>",
      docSubUrl: 'elements/Button'
    },
    box: {
      canonicalName: 'Box',
      description: 'Artsy Box primitive with styled-system space, color, and typography props.',
      importExample: "import { Box, Text } from '@artsy/palette';\n\n<Box p={4} bg=\"black10\"><Text variant=\"lg-display\">Pablo Picasso</Text></Box>",
      docSubUrl: 'elements/Box'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Theme>` from `@artsy/palette`.',
      'Use Palette Box, Flex, and Grid primitives with stark black/white contrast.',
      'Give artwork and photography generous whitespace framing.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Artsy Palette theme constants for typography and spacing.',
    iconUsage: 'Import icons from @artsy/palette (e.g. ArtworkIcon, HeartIcon, MagnifyingGlassIcon).',
    layoutConventions: 'Use Box and Flex layout components with generous spacing values.'
  }
};
