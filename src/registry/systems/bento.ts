import { UISystem } from '../../schemas/uiSystem.js';

export const bento: UISystem = {
  id: 'bento',
  name: 'Bento Design System',
  organization: 'Bento DS Community / SEEK Ecosystem',
  description: 'An open-source, multi-framework design system and component architecture inspired by Braid and modern CSS-in-JS, engineered for rapid creation of accessible multi-brand web applications.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'enterprise', 'styled'],
  frameworks: ['react', 'html-css'],
  stylingApproach: 'vanilla-extract',
  packageNames: ['@bento-ds/react', '@bento-ds/core'],
  docsUrl: 'https://bento-ds.github.io/bento',
  repositoryUrl: 'https://github.com/bento-ds/bento',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with zero-runtime CSS accessibility guarantees.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in vanilla-extract contracts and CSS variables',
    packageName: '@bento-ds/core'
  },
  icons: {
    available: true,
    name: 'Bento System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, type-safe multi-brand design system: Box/Stack/Inline primitives, vanilla-extract theme contracts, and crisp form validation.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Multi-brand enterprise web applications needing zero-runtime CSS with vanilla-extract',
    'Design system teams wanting constraint-based layout primitives (Box, Stack, Inline, Columns)',
    'Modern React & Next.js applications prioritizing type safety and high performance'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Powered by vanilla-extract for zero-runtime CSS overhead and full TypeScript type checking',
    'Strict multi-brand theming architecture with design token contracts',
    'Expressive layout primitives inspired by SEEK Braid'
  ],
  weaknesses: [
    'Requires vanilla-extract bundler plugin'
  ],
  tags: [
    'bento',
    'bento-ds',
    'vanilla-extract',
    'type-safe',
    'multi-brand',
    'zero-runtime',
    'hidden-gem'
  ],
  aliases: ['Bento', 'Bento DS', 'Bento Design System'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @bento-ds/react @bento-ds/core',
      packages: ['@bento-ds/react', '@bento-ds/core'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Bento type-safe action button with kind="solid" | "outline" | "transparent".',
      importExample: "import { Button } from '@bento-ds/react';\n\n<Button kind=\"solid\" onPress={handlePress}>Submit</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use Bento layout primitives (`Stack`, `Inline`, `Columns`, `Box`).',
      'Wrap root with Bento `BentoProvider`.',
      'Use vanilla-extract theme contracts for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes using Bento token contracts.',
    iconUsage: 'Use Bento icon components.',
    layoutConventions: 'Use Stack and Columns primitives.'
  }
};
