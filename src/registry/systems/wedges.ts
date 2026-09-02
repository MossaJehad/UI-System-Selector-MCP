import { UISystem } from '../../schemas/uiSystem.js';

export const wedges: UISystem = {
  id: 'wedges',
  name: 'Wedges (Lemon Squeezy UI)',
  organization: 'Lemon Squeezy',
  description: 'An open-source React UI component library and Tailwind CSS plugin created by Lemon Squeezy, engineered for merchant checkout overlays, creator SaaS dashboards, digital software licensing, and modern micro-interactions.',
  category: 'component-library',
  secondaryCategories: ['saas', 'ecommerce', 'creative-tool'],
  frameworks: ['react'],
  stylingApproach: 'tailwind',
  packageNames: ['@lemonsqueezy/wedges'],
  docsUrl: "https://github.com/lmsqueezy/wedges",
  repositoryUrl: 'https://github.com/lmsqueezy/wedges',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA with smooth focus ring animations and accessible form controls.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin tokens with Lemon Squeezy color themes',
    packageName: '@lemonsqueezy/wedges'
  },
  icons: {
    available: true,
    packageName: '@lemonsqueezy/wedges',
    name: 'Wedges Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern creator commerce style: lemon yellow (#ffc233) / deep purple accents, rounded pill badges, smooth micro-interactions, and refined merchant checkout cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Digital product checkouts, software license key managers, and creator monetization platforms',
    'Modern React & Next.js SaaS applications built on Tailwind CSS',
    'Apps wanting Lemon Squeezy’s signature high-polish visual aesthetic'
  ],
  avoidFor: [
    'Heavy enterprise SCADA consoles'
  ],
  strengths: [
    'Signature high-craft visual aesthetic created by the Lemon Squeezy design team',
    'Seamless Tailwind CSS plugin integration (`wedges()`)',
    'Polished interactive components (Button, Badge, Avatar, ProgressBar, Tooltip, Kbd)'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'wedges',
    'lemon-squeezy',
    'ecommerce',
    'creator',
    'tailwind',
    'react',
    'modern',
    'hidden-gem'
  ],
  aliases: ["Wedges", "Wedges UI", "Lemon Squeezy UI"],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @lemonsqueezy/wedges',
      packages: ['@lemonsqueezy/wedges'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Add `wedgesPalette` and `wedges()` plugin to your `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Wedges action button with variant="primary" | "secondary" | "tertiary" | "outline" | "transparent".',
      importExample: "import { Button } from '@lemonsqueezy/wedges';\n\n<Button variant=\"primary\">Buy License Key</Button>",
      docSubUrl: 'docs/components/button'
    },
    badge: {
      canonicalName: 'Badge',
      description: 'Wedges status and creator tag badge.',
      importExample: "import { Badge } from '@lemonsqueezy/wedges';\n\n<Badge color=\"yellow\">Pro Merchant</Badge>",
      docSubUrl: 'docs/components/badge'
    }
  },
  aiInstructions: {
    principles: [
      'Configure `@lemonsqueezy/wedges` plugin in `tailwind.config.js`.',
      'Use Wedges Button, Badge, and Kbd components for creator SaaS interfaces.',
      'Apply Lemon Squeezy color tokens for checkout and billing actions.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure Wedges theme palettes in Tailwind configuration.',
    iconUsage: 'Import icons from `@lemonsqueezy/wedges` (e.g. CheckIcon, SearchIcon).',
    layoutConventions: 'Use Tailwind CSS flex and grid layouts.'
  }
};
