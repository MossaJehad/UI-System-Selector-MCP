import { UISystem } from '../../schemas/uiSystem.js';

export const mvpBlocks: UISystem = {
  id: 'mvp-blocks',
  name: 'MVP Blocks',
  organization: 'MVP Blocks Community',
  description: 'An open-source, source-owned component and layout block collection for React, Next.js, and Tailwind CSS, providing pre-assembled hero sections, feature grids, testimonial walls, and FAQ accordions for rapid MVP launches.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://mvpblocks.com',
  repositoryUrl: 'https://github.com/mvp-blocks/mvp-blocks',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive mobile layout.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens',
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
  aesthetic: 'Fast startup launch aesthetic: clean hero headlines with badge tags, 3-column feature grids, masonry testimonial walls, and interactive FAQ accordions.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Shipping minimum viable products (MVPs), startup landing pages, and marketing funnels in hours',
    'Pre-assembled full-width layout blocks in React and Tailwind',
    'Next.js applications using copy-paste architecture'
  ],
  avoidFor: [
    'Complex data-dense spreadsheets'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Complete pre-assembled layout blocks (Hero, Features, Testimonials, Pricing, FAQ, Footer)',
    'Seamless drop-in compatibility with shadcn/ui and Tailwind CSS'
  ],
  weaknesses: [
    'Marketing landing page block focus'
  ],
  tags: [
    'mvp-blocks',
    'mvp',
    'landing-page',
    'blocks',
    'startup',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['MVP Blocks', 'MVPBlocks', 'MVP UI Blocks'],
  relatedSystems: ['tailblocks', 'float-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install clsx tailwind-merge lucide-react',
      packages: ['clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'HeroSection',
      description: 'High-converting startup hero section with CTA buttons and social proof badges.',
      importExample: "// Copy from components/mvp/hero-section.tsx\nimport { HeroSection } from '@/components/blocks/hero-section';",
      docSubUrl: 'docs/blocks/hero'
    }
  },
  aiInstructions: {
    principles: [
      'Copy block code directly into the user’s `components/blocks/` directory.',
      'Use complete pre-assembled sections (Hero, Features, Pricing) to assemble pages quickly.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
