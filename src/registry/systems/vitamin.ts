import { UISystem } from '../../schemas/uiSystem.js';

export const vitamin: UISystem = {
  id: 'vitamin',
  name: 'Decathlon Vitamin',
  organization: 'Decathlon',
  description: 'Decathlon’s official open-source design system and multi-framework component library (React, Vue, Svelte, Web Components), built for sports retail, fitness tracking, and global e-commerce.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'web-components'],
  frameworks: ['web-components', 'react', 'vue', 'svelte', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@vtmn/css', '@vtmn/react', '@vtmn/vue', '@vtmn/svelte', '@vtmn/icons'],
  docsUrl: 'https://decathlon.design',
  repositoryUrl: 'https://github.com/Decathlon/vitamin-web',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Decathlon digital retail platforms.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and Tailwind preset',
    packageName: '@vtmn/css'
  },
  icons: {
    available: true,
    packageName: '@vtmn/icons',
    name: 'Vitamin Sports Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Dynamic, sporty, accessible European retail aesthetic: Decathlon Blue (#0082c3), active energetic typography, and clean product showcase cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Sports equipment retail and fitness tracking apps',
    'Multi-framework e-commerce storefronts (React, Vue, Svelte, Web Components)',
    'Outdoor, health, and athletic lifestyle applications'
  ],
  avoidFor: [
    'Ultra-dense financial trading terminals'
  ],
  strengths: [
    'Exceptional multi-framework support with official packages for React, Vue, Svelte, and CSS',
    'Specialized sports iconography and product cards',
    'Tailwind CSS preset available out of the box'
  ],
  weaknesses: [
    'Branded to Decathlon sporting aesthetic'
  ],
  tags: [
    'decathlon',
    'vitamin',
    'sports',
    'ecommerce',
    'retail',
    'multi-framework',
    'react',
    'vue',
    'svelte',
    'hidden-gem'
  ],
  aliases: ['Vitamin', 'Decathlon Design System', 'VTMN'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @vtmn/css @vtmn/icons',
      packages: ['@vtmn/css', '@vtmn/icons'],
      setupInstructions: 'Import `@vtmn/css/dist/vtmn.css` and `@vtmn/icons/dist/vitamix/font/vitamix.css`.'
    },
    react: {
      command: 'npm install @vtmn/react @vtmn/css @vtmn/icons',
      packages: ['@vtmn/react', '@vtmn/css', '@vtmn/icons'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'VtmnButton',
      description: 'Vitamin action button with variant="primary" | "secondary" | "tertiary" | "conversion".',
      importExample: "import { VtmnButton } from '@vtmn/react';\n\n<VtmnButton variant=\"conversion\">Add to Cart</VtmnButton>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@vtmn/*` packages matching your project framework.',
      'Import Vitamin CSS variables or apply Tailwind preset.',
      'Use Decathlon Blue and athletic contrast colors.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Vitamin design tokens and color scales.',
    iconUsage: 'Import icons from @vtmn/icons or use Vitamix font icons.',
    layoutConventions: 'Use standard flex and grid classes with Vitamin spacing.'
  }
};
