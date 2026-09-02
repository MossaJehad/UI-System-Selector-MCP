import { UISystem } from '../../schemas/uiSystem.js';

export const agnosticUi: UISystem = {
  id: 'agnostic-ui',
  name: 'AgnosticUI (One Component System 4 Frameworks)',
  organization: 'Rob Levin / AgnosticUI Community',
  description: 'An open-source, accessible, framework-agnostic component library providing identical components, APIs, and CSS design tokens across React, Vue 3, Svelte, and Angular.',
  category: 'component-library',
  secondaryCategories: ['accessibility-focused', 'saas', 'styled'],
  frameworks: ['react', 'vue', 'svelte', 'angular', 'html-css', 'framework-agnostic'],
  stylingApproach: 'css-modules',
  packageNames: ['agnostic-react', 'agnostic-vue', 'agnostic-svelte', 'agnostic-angular', 'agnostic-css'],
  docsUrl: 'https://www.agnosticui.com',
  repositoryUrl: 'https://github.com/AgnosticUI/agnosticui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for strict WAI-ARIA and keyboard accessibility across all 4 framework wrappers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via `agnostic-css`',
    packageName: 'agnostic-css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, neutral, framework-agnostic aesthetic: crisp primary blue accents, subtle rounded cards, accessible focus rings, and identical component behavior across React, Vue, Svelte, and Angular.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Organizations running polyglot frontend stacks (React, Vue, Svelte, Angular) wanting a unified design system',
    'Developers wanting identical component APIs and behavior regardless of framework choice',
    'Accessibility-first web applications'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'One of the only true cross-framework component libraries offering first-class idiomatic packages for React, Vue 3, Svelte, and Angular',
    'Pure CSS modules with zero runtime CSS-in-JS dependencies',
    'High accessibility and keyboard navigation standards'
  ],
  weaknesses: [
    'Smaller community compared to framework-exclusive giants'
  ],
  tags: [
    'agnostic-ui',
    'cross-framework',
    'multi-framework',
    'react',
    'vue',
    'svelte',
    'angular',
    'accessibility',
    'hidden-gem'
  ],
  aliases: ['AgnosticUI', 'Agnostic UI', 'Agnostic'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install agnostic-react agnostic-css',
      packages: ['agnostic-react', 'agnostic-css'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `agnostic-react/dist/common.min.css` in root layout.'
    },
    vue: {
      command: 'npm install agnostic-vue agnostic-css',
      packages: ['agnostic-vue', 'agnostic-css'],
      peerDependencies: ['vue']
    },
    svelte: {
      command: 'npm install agnostic-svelte agnostic-css',
      packages: ['agnostic-svelte', 'agnostic-css'],
      peerDependencies: ['svelte']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'AgnosticUI button with mode="primary" | "secondary" | "danger".',
      importExample: "import { Button } from 'agnostic-react';\n\n<Button mode=\"primary\">Submit</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import the framework-specific package (`agnostic-react`, `agnostic-vue`, `agnostic-svelte`, `agnostic-angular`).',
      'Import common CSS tokens in root layout.',
      'Use AgnosticUI components for cross-framework consistency.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties defined in `agnostic-css`.',
    iconUsage: 'Embed SVG icons inside component slots.',
    layoutConventions: 'Use standard flex and grid layout structure.'
  }
};
