import { UISystem } from '../../schemas/uiSystem.js';

export const merakiUi: UISystem = {
  id: 'meraki-ui',
  name: 'Meraki UI',
  organization: 'Khatabwedaa / Meraki UI Community',
  description: 'An open-source collection of responsive Tailwind CSS components with RTL (Right-to-Left) support, supporting React, Vue, and HTML for building elegant landing pages, cards, and authentication flows.',
  category: 'css-framework',
  secondaryCategories: ['consumer', 'saas', 'source-owned'],
  frameworks: ['html-css', 'react', 'vue', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['tailwindcss'],
  docsUrl: 'https://merakiui.com',
  repositoryUrl: 'https://github.com/merakiui/merakiui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with full RTL (Right-to-Left) layout mirroring support.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS utility classes',
    packageName: 'tailwindcss'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Clean, modern, multilingual Tailwind aesthetic: full RTL layout mirroring, elegant authentication forms, responsive navbars, and article cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Arabic, Hebrew, and Persian RTL web applications built with Tailwind CSS',
    'Fast copy-pasting of authentication screens, newsletter forms, and hero banners',
    'HTML, React, and Vue applications needing pure Tailwind CSS snippets'
  ],
  avoidFor: [
    'Complex headless state management'
  ],
  strengths: [
    'First-class RTL (Right-to-Left) localization support across all components',
    '100% copy-paste Tailwind CSS markup with zero extra npm dependencies',
    'Rich dark mode support with Tailwind dark: classes'
  ],
  weaknesses: [
    'Pure CSS/HTML: interactive toggles require framework state'
  ],
  tags: [
    'meraki-ui',
    'tailwind',
    'rtl',
    'arabic',
    'hebrew',
    'copy-paste',
    'marketing',
    'hidden-gem'
  ],
  aliases: ['Meraki UI', 'MerakiUI', 'Meraki Tailwind'],
  relatedSystems: ['hyperui', 'float-ui', 'preline'],
  systemTypes: ['css-framework', 'source-owned'],
  sourceOwned: true,
  openSource: true,
  installation: {
    generic: {
      command: 'npm install -D tailwindcss',
      packages: ['tailwindcss'],
      setupInstructions: 'Copy HTML/JSX snippets directly from merakiui.com into your Tailwind CSS project.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'ArticleCard',
      description: 'Responsive article card with image cover and author avatar.',
      importExample: '<div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"><img class="object-cover w-full h-64" src="img.jpg"><div class="p-6"><h1 class="text-xl font-semibold text-gray-800 dark:text-white">Article Title</h1></div></div>',
      docSubUrl: 'components/cards'
    }
  },
  aiInstructions: {
    principles: [
      'Copy Tailwind markup directly into templates.',
      'Apply `dir="rtl"` attribute when targeting right-to-left languages.',
      'Use Tailwind `dark:` variants for dark mode support.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Embed SVG icons inside markup.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
