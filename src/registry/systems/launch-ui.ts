import { UISystem } from '../../schemas/uiSystem.js';

export const launchUi: UISystem = {
  id: 'launch-ui',
  name: 'Launch UI',
  organization: 'Launch UI Community (Mikolaj Dobrucki)',
  description: 'An open-source, source-owned landing page UI component library for React, Next.js, and Tailwind CSS, providing high-converting marketing blocks, hero sections, social proof counters, and interactive demo cards.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react', 'framer-motion'],
  docsUrl: 'https://launchui.com',
  repositoryUrl: 'https://github.com/launch-ui/launch-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive mobile touch targets.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-conversion landing page scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'High-converting modern startup aesthetic: polished hero headers with video modal triggers, customer logo marquee tickers, interactive product screenshot tabs, and pricing tiers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Next.js SaaS landing pages, marketing funnels, and product launch sites',
    'Developers wanting complete, drop-in landing page blocks with copy-paste architecture',
    'Modern conversion funnels'
  ],
  avoidFor: [
    'Complex data-dense spreadsheets'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Designed specifically for modern SaaS conversion and product launches',
    'Seamless drop-in compatibility with shadcn/ui and Tailwind CSS'
  ],
  weaknesses: [
    'Landing page block focus'
  ],
  tags: [
    'launch-ui',
    'launchui',
    'landing-page',
    'marketing',
    'saas',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['Launch UI', 'LaunchUI', 'Launch'],
  relatedSystems: ['mvp-blocks', 'float-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge lucide-react',
      packages: ['framer-motion', 'clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'LaunchHero',
      description: 'Landing page hero with animated headline, CTA button group, and screenshot preview.',
      importExample: "// Copy from components/launch/hero.tsx\nimport { LaunchHero } from '@/components/ui/launch-hero';",
      docSubUrl: 'docs/components/hero'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use LaunchHero and LogoMarquee for startup landing pages.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
