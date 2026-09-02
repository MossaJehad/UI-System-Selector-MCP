import { UISystem } from '../../schemas/uiSystem.js';

export const hyperui: UISystem = {
  id: 'hyperui',
  name: 'HyperUI',
  organization: 'Mark Mead / HyperUI Community',
  description: 'An open-source collection of free, responsive HTML and Tailwind CSS UI components, marketing sections, application shells, and e-commerce product grids, designed for quick copy-pasting with zero JavaScript framework dependencies.',
  category: 'css-framework',
  secondaryCategories: ['ecommerce', 'consumer', 'saas', 'source-owned'],
  frameworks: ['html-css', 'react', 'vue', 'svelte', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://hyperui.dev',
  repositoryUrl: 'https://github.com/markmead/hyperui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML5 structure with accessible form labels and contrast ratios.'
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
  aesthetic: 'Modern, clean, utility-first Tailwind aesthetic: responsive e-commerce product grids, announcement banners, stats counters, and navigation bars.',
  noveltyLevel: 'established',
  bestFor: [
    'Quick copy-pasting of Tailwind CSS HTML/JSX snippets into any web project',
    'E-commerce product cards, checkout summaries, and collection filters',
    'Marketing landing pages and content sections with zero extra package dependencies'
  ],
  avoidFor: [
    'Developers wanting state-managed complex headless components'
  ],
  strengths: [
    'Zero dependencies beyond standard Tailwind CSS',
    '100% pure copy-paste HTML / JSX with instant preview and multi-viewport testing',
    'Rich collection of e-commerce, application UI, and marketing components'
  ],
  weaknesses: [
    'Pure CSS/HTML: interactive behavior (like opening modals or dropdowns) requires your own JS state'
  ],
  tags: [
    'hyperui',
    'tailwind',
    'html',
    'ecommerce',
    'marketing',
    'copy-paste',
    'css-framework',
    'established'
  ],
  aliases: ['HyperUI', 'Hyper UI', 'Hyper Tailwind'],
  systemTypes: ['css-framework', 'source-owned'],
  sourceOwned: true,
  openSource: true,
  installation: {
    generic: {
      command: 'npm install -D tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML/JSX snippets directly from hyperui.dev into your Tailwind CSS project.'
    }
  },
  componentGuidance: {
    banner: {
      canonicalName: 'AnnouncementBanner',
      description: 'Responsive announcement banner with CTA button and dismiss toggle.',
      importExample: '<div class="bg-indigo-600 px-4 py-3 text-white"><p class="text-center text-sm font-medium">Love Alpine JS? <a href="#" class="inline-block underline">Check out our guide!</a></p></div>',
      docSubUrl: 'components/marketing/banners'
    }
  },
  aiInstructions: {
    principles: [
      'Copy Tailwind CSS markup directly into project templates.',
      'Add React or Alpine.js state for interactive toggles where needed.',
      'Use standard Tailwind CSS color palettes.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
