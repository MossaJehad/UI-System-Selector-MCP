import { UISystem } from '../../schemas/uiSystem.js';

export const arkUi: UISystem = {
  id: 'ark-ui',
  name: 'Ark UI',
  organization: 'Chakra Systems',
  description: 'A headless, multi-framework component library (React, Vue, Solid, Svelte) powered by Zag.js state machines, providing 100% accessible, unstyled primitives with full control over markup and styling.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react', 'vue', 'solid', 'svelte'],
  stylingApproach: 'unstyled',
  packageNames: ['@ark-ui/react'],
  docsUrl: 'https://ark-ui.com',
  repositoryUrl: 'https://github.com/chakra-ui/ark',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'State machine driven accessibility implementing official W3C WAI-ARIA authoring patterns.'
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
  aesthetic: 'Completely unstyled, logic-and-accessibility-only headless primitives.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Design system engineering teams building custom multi-framework component libraries',
    'Vue and SolidJS applications needing Radix-like unstyled accessible primitives',
    'Projects using Panda CSS or custom Tailwind styling with state machine stability'
  ],
  avoidFor: [
    'Developers wanting instant pre-styled visual themes without writing CSS'
  ],
  strengths: [
    'Multi-framework: same API and state machines across React, Vue, Solid, and Svelte',
    'Deterministic state machine logic prevents UI edge-case race conditions',
    'Clean anatomy compound component pattern'
  ],
  weaknesses: [
    'Requires a styling layer (e.g. Tailwind, Panda CSS, or CSS Modules)'
  ],
  tags: [
    'headless',
    'unstyled',
    'state-machines',
    'zag',
    'multi-framework',
    'react',
    'vue',
    'solid',
    'svelte',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @ark-ui/react',
      packages: ['@ark-ui/react'],
      peerDependencies: ['react', 'react-dom']
    },
    vue: {
      command: 'npm install @ark-ui/vue',
      packages: ['@ark-ui/vue'],
      peerDependencies: ['vue']
    },
    solid: {
      command: 'npm install @ark-ui/solid',
      packages: ['@ark-ui/solid'],
      peerDependencies: ['solid-js']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Headless accessible dialog primitive.',
      importExample: "import { Dialog } from '@ark-ui/react/dialog';\n\n<Dialog.Root>\n  <Dialog.Trigger>Open</Dialog.Trigger>\n  <Dialog.Backdrop />\n  <Dialog.Positioner>\n    <Dialog.Content><Dialog.Title>Title</Dialog.Title><Dialog.CloseTrigger>Close</Dialog.CloseTrigger></Dialog.Content>\n  </Dialog.Positioner>\n</Dialog.Root>",
      docSubUrl: 'docs/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Ark UI compound component anatomy (e.g. `<Dialog.Root>`, `<Dialog.Trigger>`, `<Dialog.Content>`).',
      'Apply custom styling classes (Tailwind or Panda CSS) to Ark UI component elements.',
      'Leverage Ark UI’s built-in state machine props for open/close and transitions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style using CSS classes or Panda CSS recipe wrappers.',
    iconUsage: 'Use Lucide React or framework-native icon library.',
    layoutConventions: 'Combine Ark UI primitives with modern CSS Grid/Flexbox.'
  }
};
