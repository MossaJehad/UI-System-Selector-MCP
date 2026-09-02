import { UISystem } from '../../schemas/uiSystem.js';

export const mynaUi: UISystem = {
  id: 'myna-ui',
  name: 'Myna UI',
  organization: 'Myna UI Community (Praveen Juge)',
  description: 'An open-source, beautifully crafted icon system and Tailwind CSS component collection featuring over 1,500+ geometric vector icons and accessible Tailwind UI primitives for modern web products.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'tailwind',
  packageNames: ['@mynaui/icons-react', '@mynaui/icons-vue', 'tailwindcss'],
  docsUrl: 'https://mynaui.com',
  repositoryUrl: 'https://github.com/mynaui/mynaui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Vector icons with accessible ARIA tags and semantic HTML component wrappers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with Myna UI icon sizing and color scales',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: '@mynaui/icons-react',
    name: 'Myna Icons (1,500+ geometric icons in stroke and solid styles)'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Precision geometric icon and UI aesthetic: clean 24px grid vector icons, minimalist button badges, crisp notification toasts, and neutral Tailwind borders.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Web applications wanting 1,500+ unified geometric icons paired with matching Tailwind CSS components',
    'React, Vue, and plain HTML web apps',
    'Clean modern developer dashboards'
  ],
  avoidFor: [
    'Heavy enterprise legacy software'
  ],
  strengths: [
    'Massive, impeccably designed icon suite (1,500+ icons in React, Vue, SVG)',
    'Seamless pairing of vector iconography and Tailwind CSS UI components',
    'Zero build tool friction'
  ],
  weaknesses: [
    'Icon and lightweight component focus'
  ],
  tags: [
    'myna-ui',
    'myna',
    'icons',
    'tailwind',
    'react',
    'vue',
    'svg',
    'hidden-gem'
  ],
  aliases: ['Myna UI', 'MynaUI', 'Myna', 'Myna Icons'],
  relatedSystems: ['lucide-react', 'radix-primitives', 'shadcn-ui'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install @mynaui/icons-react tailwindcss',
      packages: ['@mynaui/icons-react', 'tailwindcss'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    },
    vue: {
      command: 'npm install @mynaui/icons-vue tailwindcss',
      packages: ['@mynaui/icons-vue', 'tailwindcss'],
      peerDependencies: ['vue', 'tailwindcss']
    }
  },
  componentGuidance: {
    iconButton: {
      canonicalName: 'IconButton',
      description: 'Clean Tailwind button paired with Myna UI vector icon.',
      importExample: "import { HomeOutline } from '@mynaui/icons-react';\n\n<button class=\"flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white\"><HomeOutline class=\"h-5 w-5\" /> Dashboard</button>",
      docSubUrl: 'icons'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@mynaui/icons-react` or `@mynaui/icons-vue` for unified iconography.',
      'Use Tailwind CSS for styling.',
      'Wrap icons with accessible `aria-hidden="true"` or `aria-label`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `@mynaui/icons-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
