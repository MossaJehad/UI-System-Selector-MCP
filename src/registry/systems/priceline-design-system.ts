import { UISystem } from '../../schemas/uiSystem.js';

export const pricelineDesignSystem: UISystem = {
  id: 'priceline-design-system',
  name: 'Priceline One Design System (pcln-design-system)',
  organization: 'Priceline (Booking Holdings)',
  description: 'Priceline’s official open-source design system and React component library, engineered for high-volume travel booking search engines, hotel card grids, flight itinerary builders, and pricing deal banners.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['pcln-design-system', 'styled-components'],
  docsUrl: 'https://priceline.github.io/design-system',
  repositoryUrl: 'https://github.com/priceline/design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across travel search filters, date pickers, and checkout flows.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in styled-components theme object',
    packageName: 'pcln-design-system'
  },
  icons: {
    available: true,
    packageName: 'pcln-icons',
    name: 'Priceline Travel Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Travel booking e-commerce aesthetic: Priceline Blue (#0068ef) / Deal Orange accents, hotel star rating badges, flight timeline segments, and promo discount banners.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Travel booking applications, hospitality storefronts, and airline reservation platforms',
    'High-conversion e-commerce search filters and price comparison cards',
    'React applications wanting a battle-tested travel retail component suite'
  ],
  avoidFor: [
    'Ultra-minimalist terminal tools'
  ],
  strengths: [
    'Official design system of global travel booking leader Priceline',
    'Battle-tested at massive consumer scale for conversion optimization and accessibility',
    'Rich travel components: FlightItinerary, HotelCard, PriceSummary, RatingBadge, Stamp'
  ],
  weaknesses: [
    'Travel retail visual branding'
  ],
  tags: [
    'priceline',
    'pcln',
    'travel',
    'ecommerce',
    'booking',
    'hotels',
    'flights',
    'hidden-gem'
  ],
  aliases: ['Priceline Design System', 'Priceline One', 'pcln-design-system', 'Priceline UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install pcln-design-system pcln-icons styled-components',
      packages: ['pcln-design-system', 'pcln-icons', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your app in `<ThemeProvider>` from `pcln-design-system`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Priceline CTA button with variation="fill" | "outline" | "link".',
      importExample: "import { Button } from 'pcln-design-system';\n\n<Button variation=\"fill\" color=\"primary\">Book Deal</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider>` from `pcln-design-system`.',
      'Use `Box`, `Flex`, `Grid` layout primitives.',
      'Use Priceline travel components for hotel and flight booking flows.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with Priceline theme object.',
    iconUsage: 'Import icons from `pcln-icons`.',
    layoutConventions: 'Use Flex and Grid layout primitives.'
  }
};
