import { UISystem } from '../../schemas/uiSystem.js';

export const flowrift: UISystem = {
  id: 'flowrift',
  name: 'Flowrift (Beautiful Tailwind CSS Blocks)',
  organization: 'Flowrift Community',
  description: 'An open-source curated collection of beautifully designed, responsive Tailwind CSS layout blocks, hero sections, feature grids, pricing tables, and banners for modern web products.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'saas'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://flowrift.com',
  repositoryUrl: 'https://github.com/flowrift/flowrift',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive mobile layout.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-polish editorial scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'Heroicons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Editorial modern web aesthetic: expansive whitespace, generous typography tracking, high-contrast imagery containers, and clean call-to-action blocks.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Editorial web layouts, modern SaaS marketing landing pages, and portfolio showcases',
    'Developers wanting high-aesthetic copy-paste Tailwind CSS blocks',
    'Fast web prototyping'
  ],
  avoidFor: [
    'Complex data-dense spreadsheets'
  ],
  strengths: [
    'High visual polish and editorial typography balance',
    'Pure Tailwind CSS utility classes with zero JavaScript overhead',
    'Copy-paste ready for HTML, React, and Next.js'
  ],
  weaknesses: [
    'Marketing layout block focus'
  ],
  tags: [
    'flowrift',
    'tailwind',
    'landing-page',
    'editorial',
    'blocks',
    'html-css',
    'hidden-gem'
  ],
  aliases: ['Flowrift', 'Flowrift UI', 'Flowrift Blocks'],
  relatedSystems: ['tailblocks', 'float-ui', 'wicked-blocks'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML / JSX block snippets directly into your Tailwind project.'
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'HeroBlock',
      description: 'Editorial hero section with typography focus and dual CTAs.',
      importExample: '<section class="py-12 sm:py-16 lg:py-20"><div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">...</div></section>',
      docSubUrl: 'blocks/hero'
    }
  },
  aiInstructions: {
    principles: [
      'Copy HTML/JSX block snippets directly into templates.',
      'Use Tailwind CSS utility classes.',
      'Maintain generous whitespace and editorial typographic spacing.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG Heroicons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
