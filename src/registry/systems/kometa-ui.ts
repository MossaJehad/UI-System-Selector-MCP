import { UISystem } from '../../schemas/uiSystem.js';

export const kometaUi: UISystem = {
  id: 'kometa-ui',
  name: 'Kometa UI Kit (Kitwind)',
  organization: 'Kitwind',
  description: 'An open-source UI kit and layout block collection containing 130+ multi-purpose Tailwind CSS components across headers, heroes, features, pricing, stats, blogs, and footers with React, Vue, and plain HTML snippets.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'saas'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://kitwind.io/kometa',
  repositoryUrl: 'https://github.com/kitwind/kometa-ui-kit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with responsive viewport layout.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with high-polish marketing scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'SVG Marketing Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Polished marketing agency aesthetic: deep teal / indigo accents, multi-column feature breakdowns, testimonial cards, and responsive hero headers.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Marketing landing pages, agency portfolios, and SaaS marketing websites',
    'Developers wanting 130+ multi-purpose Tailwind CSS section blocks in React, Vue, or HTML',
    'Fast website prototyping'
  ],
  avoidFor: [
    'Complex data-dense spreadsheets'
  ],
  strengths: [
    '130+ responsive Tailwind CSS layout blocks',
    'Available in React (JSX), Vue (SFC), and plain HTML',
    'Pure Tailwind CSS utility classes'
  ],
  weaknesses: [
    'Marketing section block focus'
  ],
  tags: [
    'kometa-ui',
    'kometa',
    'kitwind',
    'tailwind',
    'marketing',
    'blocks',
    'html-css',
    'hidden-gem'
  ],
  aliases: ['Kometa UI Kit', 'Kometa', 'Kometa UI', 'Kitwind', 'Kitwind Kometa'],
  relatedSystems: ['tailblocks', 'float-ui', 'hyperui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML, React, or Vue snippets directly into your Tailwind project.'
    }
  },
  componentGuidance: {
    feature: {
      canonicalName: 'FeatureGrid',
      description: '3-column marketing feature grid with icon badges and description text.',
      importExample: '<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"><div class="grid gap-8 row-gap-5 lg:grid-cols-3">...</div></div>',
      docSubUrl: 'kometa/features'
    }
  },
  aiInstructions: {
    principles: [
      'Copy HTML, React, or Vue block snippets directly into templates.',
      'Use Tailwind CSS utility classes.',
      'Use Kometa layout containers for responsive width control.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG marketing icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
