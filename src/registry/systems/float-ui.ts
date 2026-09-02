import { UISystem } from '../../schemas/uiSystem.js';

export const floatUi: UISystem = {
  id: 'float-ui',
  name: 'Float UI',
  organization: 'Float UI Community (Sidi Dev)',
  description: 'An open-source collection of modern UI components and website templates built with Tailwind CSS, supporting React, Vue, Svelte, and plain HTML for rapid creation of SaaS landing pages and marketing websites.',
  category: 'css-framework',
  secondaryCategories: ['saas', 'consumer', 'source-owned'],
  frameworks: ['html-css', 'react', 'vue', 'svelte', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://floatui.com',
  repositoryUrl: 'https://github.com/MarsCode9/floatui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible form controls and responsive navigation.'
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
  aesthetic: 'Modern startup marketing aesthetic: Indigo/Violet gradient hero headers, pricing comparison tables, newsletter subscription sections, and responsive mobile navbars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Fast copy-pasting of full marketing page sections into React, Vue, Svelte, or HTML apps',
    'SaaS landing pages, pricing cards, FAQ accordions, and feature showcases',
    'Developers wanting clean Tailwind CSS markup with zero extra npm dependencies'
  ],
  avoidFor: [
    'Heavy enterprise data tables with 100+ spreadsheet features'
  ],
  strengths: [
    '100% pure copy-paste Tailwind CSS snippets with instant multi-framework code switching (React, Vue, Svelte, HTML)',
    'Zero extra package dependencies beyond standard Tailwind CSS',
    'Rich collection of landing page sections (Hero, Features, Pricing, Testimonials, Footers)'
  ],
  weaknesses: [
    'Pure CSS/HTML: state management (like mobile menu open/close) requires basic JS or framework state'
  ],
  tags: [
    'float-ui',
    'tailwind',
    'marketing',
    'landing-page',
    'copy-paste',
    'react',
    'vue',
    'svelte',
    'hidden-gem'
  ],
  aliases: ['Float UI', 'FloatUI', 'Float Tailwind'],
  relatedSystems: ['hyperui', 'preline', 'tailwind-ui'],
  systemTypes: ['css-framework', 'source-owned'],
  sourceOwned: true,
  openSource: true,
  installation: {
    generic: {
      command: 'npm install -D tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy component markup directly from floatui.com into your Tailwind CSS project.'
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'HeroSection',
      description: 'SaaS landing page hero section with gradient badge and CTA buttons.',
      importExample: '<section class="py-28 bg-gray-900 text-white"><div class="max-w-screen-xl mx-auto px-4 text-center"><h1 class="text-4xl font-extrabold sm:text-5xl">Build Faster with Modern UI</h1></div></section>',
      docSubUrl: 'components/heroes'
    }
  },
  aiInstructions: {
    principles: [
      'Copy Tailwind CSS markup directly into templates.',
      'Add React, Vue, or Svelte state for interactive toggles.',
      'Use standard Tailwind CSS utility classes.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
