import { UISystem } from '../../schemas/uiSystem.js';

export const kobalte: UISystem = {
  id: 'kobalte',
  name: 'Kobalte',
  organization: 'Kobalte Community',
  description: 'An unstyled, accessible UI component library for SolidJS inspired by Radix Primitives and React Aria, providing accessible building blocks for Solid applications.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused'],
  frameworks: ['solid'],
  stylingApproach: 'unstyled',
  packageNames: ['@kobalte/core'],
  docsUrl: 'https://kobalte.dev',
  repositoryUrl: 'https://github.com/kobaltedev/kobalte',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements WAI-ARIA authoring patterns natively in SolidJS reactive model.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: false,
    format: 'Unstyled'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Unstyled, reactive SolidJS primitives with Radix-inspired compound component structure.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SolidJS web applications needing accessible headless primitives',
    'Custom SolidJS design systems with Tailwind or CSS Modules',
    'SolidStart fullstack applications'
  ],
  avoidFor: [
    'React or Vue projects (Kobalte is SolidJS specific)'
  ],
  strengths: [
    'The premier headless accessibility component suite for SolidJS',
    'Fine-grained reactivity with zero unnecessary component re-renders',
    'Compound component anatomy similar to Radix'
  ],
  weaknesses: [
    'SolidJS only'
  ],
  tags: [
    'solidjs',
    'solid',
    'headless',
    'unstyled',
    'radix-like',
    'accessibility',
    'hidden-gem'
  ],
  installation: {
    solid: {
      command: 'npm install @kobalte/core',
      packages: ['@kobalte/core'],
      peerDependencies: ['solid-js']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Kobalte accessible modal dialog for SolidJS.',
      importExample: "import { Dialog } from '@kobalte/core/dialog';\n\n<Dialog>\n  <Dialog.Trigger>Open</Dialog.Trigger>\n  <Dialog.Portal>\n    <Dialog.Overlay />\n    <Dialog.Content><Dialog.Title>Title</Dialog.Title><Dialog.CloseButton>Close</Dialog.CloseButton></Dialog.Content>\n  </Dialog.Portal>\n</Dialog>",
      docSubUrl: 'docs/core/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Kobalte compound components in SolidJS.',
      'Apply CSS classes or Tailwind directly to Kobalte components.',
      'Leverage Solid fine-grained signals.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style with Tailwind or CSS Modules.',
    iconUsage: 'Use Lucide Solid or solid-icons.',
    layoutConventions: 'Combine Kobalte primitives with CSS Grid/Flexbox in SolidJS.'
  }
};
