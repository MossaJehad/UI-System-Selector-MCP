import { UISystem } from '../../schemas/uiSystem.js';

export const tailblocks: UISystem = {
  id: 'tailblocks',
  name: 'Tailblocks',
  organization: 'Mert Cukuren / Tailblocks Community',
  description: 'The pioneering open-source collection of ready-to-use, responsive Tailwind CSS blocks (Hero, Header, Footer, Pricing, Features, Blog, Contact, Team, Testimonials, Statistic) with instant dark mode color preview and zero build dependencies.',
  category: 'css-framework',
  secondaryCategories: ['saas', 'consumer', 'source-owned'],
  frameworks: ['html-css', 'react', 'vue', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://tailblocks.cc',
  repositoryUrl: 'https://github.com/mertJF/tailblocks',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive viewport breakpoints.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Standard Tailwind CSS utility classes',
    packageName: 'tailwindcss'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Classic clean Tailwind CSS block aesthetic: responsive 3-column feature grids, full-width hero split layouts, clean footer strips, and metric statistics counters.',
  noveltyLevel: 'established',
  bestFor: [
    'Fast assembly of entire website landing pages in minutes using pre-built Tailwind blocks',
    'HTML, React, or Vue applications needing ready-made marketing sections',
    'Quick prototyping with zero npm package overhead'
  ],
  avoidFor: [
    'Complex state-managed headless components'
  ],
  strengths: [
    'Pioneered the copy-paste Tailwind CSS block movement',
    '60+ ready-to-use block sections covering every part of a website',
    'Zero dependencies beyond standard Tailwind CSS'
  ],
  weaknesses: [
    'Static block layouts'
  ],
  tags: [
    'tailblocks',
    'tailwind',
    'blocks',
    'landing-page',
    'copy-paste',
    'marketing',
    'established'
  ],
  aliases: ['Tailblocks', 'Tailblocks CC', 'Tailblocks UI'],
  relatedSystems: ['hyperui', 'float-ui', 'meraki-ui'],
  systemTypes: ['css-framework', 'source-owned'],
  sourceOwned: true,
  openSource: true,
  installation: {
    generic: {
      command: 'npm install -D tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy block HTML/JSX directly from tailblocks.cc into your project.'
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'HeroBlock',
      description: 'Split hero section with headline, paragraph, CTA buttons, and illustration.',
      importExample: '<section class="text-gray-600 body-font"><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"><div class="lg:flex-grow md:w-1/2 flex flex-col items-start text-left"><h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out</h1></div></div></section>',
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Copy block markup directly into templates.',
      'Use Tailwind color palette for branding.',
      'Assemble full landing pages using Header, Hero, Feature, Pricing, and Footer blocks.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
