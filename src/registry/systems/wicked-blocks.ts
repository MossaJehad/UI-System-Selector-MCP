import { UISystem } from '../../schemas/uiSystem.js';

export const wickedBlocks: UISystem = {
  id: 'wicked-blocks',
  name: 'Wicked Blocks',
  organization: 'Wicked Labs (Michael Andreuzza)',
  description: 'An open-source collection of 120+ modern Tailwind CSS and HTML/React layout blocks, headers, hero sections, pricing tables, and CTA banners designed for fast landing page assembly.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'saas'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://wickedblocks.dev',
  repositoryUrl: 'https://github.com/wickedlabs/wickedblocks',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive mobile touch layout.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with modern startup color scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'Feather & Heroicons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern startup landing aesthetic: crisp black/blue gradients, 2-column hero layouts with app mockup frames, testimonial carousels, and multi-tier pricing cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Quick startup landing page assembly in Next.js or plain HTML + Tailwind',
    'Developers wanting 120+ copy-paste marketing blocks',
    'Clean marketing prototypes'
  ],
  avoidFor: [
    'Complex single-page applications needing headless state engines'
  ],
  strengths: [
    '120+ responsive Tailwind CSS blocks',
    'Available for both plain HTML and React / Next.js',
    'Zero dependencies beyond Tailwind CSS'
  ],
  weaknesses: [
    'Marketing landing page block focus'
  ],
  tags: [
    'wicked-blocks',
    'wicked',
    'tailwind',
    'landing-page',
    'marketing',
    'blocks',
    'html-css',
    'hidden-gem'
  ],
  aliases: ['Wicked Blocks', 'WickedBlocks', 'Wicked UI'],
  relatedSystems: ['tailblocks', 'float-ui', 'hyperui'],
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
      canonicalName: 'WickedHero',
      description: 'Startup hero section with app screenshot backdrop and CTA buttons.',
      importExample: '<section class="text-gray-600 body-font"><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">...</div></section>',
      docSubUrl: 'blocks/hero'
    }
  },
  aiInstructions: {
    principles: [
      'Copy HTML/JSX block snippets directly into templates.',
      'Use Tailwind CSS utility classes.',
      'Use Wicked layout sections for marketing pages.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
