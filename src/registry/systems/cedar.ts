import { UISystem } from '../../schemas/uiSystem.js';

export const cedar: UISystem = {
  id: 'cedar',
  name: 'REI Cedar Design System',
  organization: 'REI Co-op',
  description: 'REI Co-op’s official open-source design system and Vue component library, built for outdoor gear retail, co-op membership portals, trail maps, and sustainable commerce.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'accessibility-focused'],
  frameworks: ['vue', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@rei/cedar', '@rei/cedar-tokens', '@rei/cedar-icons'],
  docsUrl: 'https://rei.github.io/cedar',
  repositoryUrl: 'https://github.com/rei/cedar',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across REI outdoor co-op digital store.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Style Dictionary design tokens in CSS custom properties and SCSS',
    packageName: '@rei/cedar-tokens'
  },
  icons: {
    available: true,
    packageName: '@rei/cedar-icons',
    name: 'Cedar Outdoor Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Natural, rugged, trustworthy outdoor co-op aesthetic: Cedar Spruce Green (#2b5e40), trail brown tones, crisp product cards, and mountain badge icons.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Outdoor recreation, camping, sports retail, and adventure travel web apps',
    'Vue.js e-commerce storefronts and membership subscription portals',
    'Sustainable commerce and eco-friendly product catalogs'
  ],
  avoidFor: [
    'Dark-mode financial stock trading screens'
  ],
  strengths: [
    'The premier company design system built specifically for Vue.js',
    'Rich outdoor icons and membership benefit cards',
    'Clean design tokens exported for Web, iOS, and Android'
  ],
  weaknesses: [
    'Vue-only component implementations'
  ],
  tags: [
    'rei',
    'cedar',
    'vue',
    'outdoor',
    'ecommerce',
    'retail',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Cedar', 'REI Design System', 'Cedar UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install @rei/cedar @rei/cedar-tokens @rei/cedar-icons',
      packages: ['@rei/cedar', '@rei/cedar-tokens', '@rei/cedar-icons'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@rei/cedar/dist/cedar.css` and use Cdr components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'CdrButton',
      description: 'Cedar action button with modifier="primary" | "secondary" | "dark".',
      importExample: "import { CdrButton } from '@rei/cedar';\n\n<CdrButton modifier=\"primary\">Add to Pack</CdrButton>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@rei/cedar/dist/cedar.css` in your Vue application.',
      'Use `CdrButton`, `CdrCard`, `CdrInput` for outdoor retail workflows.',
      'Apply REI Cedar color tokens (Spruce green, Earth tones).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Cedar design tokens from `@rei/cedar-tokens`.',
    iconUsage: 'Import icons from @rei/cedar-icons (e.g. IconTent, IconCompass, IconCart).',
    layoutConventions: 'Use standard Vue responsive layouts with Cedar spacing variables.'
  }
};
