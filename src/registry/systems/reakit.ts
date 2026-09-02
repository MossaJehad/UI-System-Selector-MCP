import { UISystem } from '../../schemas/uiSystem.js';

export const reakit: UISystem = {
  id: 'reakit',
  name: 'Reakit (Precursor to Ariakit)',
  organization: 'Diego Haz / Ariakit Community',
  description: 'The historic, accessible toolkit for building accessible rich web applications and custom design systems in React with WAI-ARIA 1.1 compliance, state hooks, and composite roving tabindex, which evolved into Ariakit.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['reakit'],
  docsUrl: 'https://reakit.io',
  repositoryUrl: 'https://github.com/ariakit/ariakit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Pioneered accessible composite widget state machines and keyboard roving tabindex in React.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Unstyled accessible state hooks and components.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless state machine primitives: hook state (`useDialogState()`, `useMenuState()`) and JSX components ready for custom CSS.',
  noveltyLevel: 'established',
  bestFor: [
    'Legacy and historical React codebases built on Reakit',
    'Developers studying React state-hook driven accessible composite components',
    'Custom design system foundations'
  ],
  avoidFor: [
    'New greenfield projects (prefer its official successor Ariakit)'
  ],
  strengths: [
    'Pioneer of state hook architecture for headless accessibility in React (`useDialogState()`, `useMenuState()`)',
    'Evolved directly into Ariakit, one of the modern gold standards for React accessibility',
    'Zero CSS lock-in'
  ],
  weaknesses: [
    'Official active development has transitioned to Ariakit'
  ],
  tags: [
    'reakit',
    'ariakit',
    'headless',
    'accessibility',
    'state-hooks',
    'wai-aria',
    'established'
  ],
  aliases: ['Reakit', 'Reakit UI', 'Ariakit v1'],
  relatedSystems: ['ariakit', 'radix-primitives', 'base-ui'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install reakit',
      packages: ['reakit'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Reakit accessible modal dialog with state hook.',
      importExample: "import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog';\n\nconst dialog = useDialogState();\n<DialogDisclosure {...dialog}>Open</DialogDisclosure>\n<Dialog {...dialog} aria-label=\"Welcome\">Hello World</Dialog>",
      docSubUrl: 'docs/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Reakit state hooks (e.g. `useDialogState()`, `useMenuState()`).',
      'Spread state object onto both disclosure trigger and dialog component.',
      'Style with custom CSS classes or Tailwind.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Style using custom CSS classes targeting Reakit elements.',
    iconUsage: 'Embed SVG icons inside disclosure buttons.',
    layoutConventions: 'Use standard React component composition.'
  }
};
