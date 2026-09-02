import { UISystem } from '../../schemas/uiSystem.js';

export const thumbprint: UISystem = {
  id: 'thumbprint',
  name: 'Thumbtack Thumbprint',
  organization: 'Thumbtack',
  description: 'Thumbtack’s official open-source design system and React/SCSS component suite, engineered for local service marketplaces, home contractor booking, professional quote matching, and customer review showcases.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'ecommerce', 'accessibility-focused'],
  frameworks: ['react', 'html-css', 'vanilla'],
  stylingApproach: 'sass',
  packageNames: ['@thumbtack/thumbprint-react', '@thumbtack/thumbprint-tokens', '@thumbtack/thumbprint-scss'],
  docsUrl: 'https://thumbprint.design',
  repositoryUrl: 'https://github.com/thumbtack/thumbprint',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA across Thumbtack local services marketplace.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables, SCSS variables, and JS constants',
    packageName: '@thumbtack/thumbprint-tokens'
  },
  icons: {
    available: true,
    packageName: '@thumbtack/thumbprint-react',
    name: 'Thumbprint Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, trustworthy local services marketplace style: Thumbtack Blue (#009fd9), clean professional profile cards, star ratings, and instant booking modal flows.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Local service marketplaces, handyman/contractor booking, and pro directories',
    'Customer review cards, star rating components, and service price quotes',
    'Consumer discovery portals needing warm, approachable UI'
  ],
  avoidFor: [
    'Dark-mode developer terminals'
  ],
  strengths: [
    'Specialized local service components (StarRating, ServiceCard, Avatar, Pill, BottomSheet)',
    'Comprehensive design token pipeline across Web, iOS, and Android',
    'Production-proven on millions of local service hire transactions'
  ],
  weaknesses: [
    'Local service marketplace focus'
  ],
  tags: [
    'thumbtack',
    'thumbprint',
    'marketplace',
    'booking',
    'reviews',
    'consumer',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Thumbprint', 'Thumbtack Design System', 'Thumbprint UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @thumbtack/thumbprint-react @thumbtack/thumbprint-tokens',
      packages: ['@thumbtack/thumbprint-react', '@thumbtack/thumbprint-tokens'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Thumbprint action button with theme="primary" | "secondary" | "tertiary".',
      importExample: "import { Button } from '@thumbtack/thumbprint-react';\n\n<Button theme=\"primary\">Request a Quote</Button>",
      docSubUrl: 'components/button/react/'
    },
    starrating: {
      canonicalName: 'StarRating',
      description: 'Thumbprint star rating display.',
      importExample: "import { StarRating } from '@thumbtack/thumbprint-react';\n\n<StarRating rating={4.9} size=\"medium\" />",
      docSubUrl: 'components/star-rating/react/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@thumbtack/thumbprint-react` components.',
      'Use StarRating and Avatar for service professional cards.',
      'Apply Thumbtack color tokens for trust and CTA buttons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Thumbprint tokens from `@thumbtack/thumbprint-tokens`.',
    iconUsage: 'Import icons from @thumbtack/thumbprint-react (e.g. NavigationSearchMedium).',
    layoutConventions: 'Use Grid and Container primitives with Thumbprint spacing.'
  }
};
