import { UISystem } from '../../schemas/uiSystem.js';

export const zag: UISystem = {
  id: 'zag-js',
  name: 'Zag.js',
  organization: 'Chakra Systems',
  description: 'A collection of framework-agnostic UI component logic implemented as Finite State Machines (FSMs), powering accessible UI interactions across React, Vue, Solid, and Svelte.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'developer-tool'],
  frameworks: ['react', 'vue', 'solid', 'svelte'],
  stylingApproach: 'unstyled',
  packageNames: ['@zag-js/dialog', '@zag-js/react', '@zag-js/vue', '@zag-js/solid'],
  docsUrl: 'https://zagjs.com',
  repositoryUrl: 'https://github.com/chakra-ui/zag',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'State machine driven accessibility implementing WAI-ARIA authoring practices.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: false,
    format: 'Unstyled logic'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-UI finite state machines and logic layer for creating custom UI primitives.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Design systems architects building cross-framework UI components from pure state machines',
    'Advanced developers needing full control over component rendering and transitions',
    'Complex multi-step interactive widgets (combobox, splitter, pin-input, color-picker)'
  ],
  avoidFor: [
    'Developers looking for pre-built styled UI buttons or cards'
  ],
  strengths: [
    'State machines eliminate timing bugs and race conditions in complex UI',
    'True multi-framework interoperability (React, Vue, Solid, Svelte)',
    'Provides normalized props (`spreadProps`) for HTML elements'
  ],
  weaknesses: [
    'Low-level state machine integration required compared to ready-made components'
  ],
  tags: [
    'zag',
    'state-machines',
    'headless',
    'unstyled',
    'multi-framework',
    'react',
    'vue',
    'solid',
    'svelte',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @zag-js/dialog @zag-js/react',
      packages: ['@zag-js/dialog', '@zag-js/react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'dialog.machine',
      description: 'Zag dialog state machine.',
      importExample: "import * as dialog from '@zag-js/dialog';\nimport { useMachine, normalizeProps } from '@zag-js/react';\n\nconst [state, send] = useMachine(dialog.machine({ id: '1' }));\nconst api = dialog.connect(state, send, normalizeProps);",
      docSubUrl: 'components/react/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Initialize Zag state machine using `useMachine(component.machine({ id: ... }))`.',
      'Connect state to DOM using `component.connect(state, send, normalizeProps)`.',
      'Spread Zag props onto corresponding JSX elements (`{...api.triggerProps}`, `{...api.contentProps}`).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style DOM elements with CSS or Tailwind classes.',
    iconUsage: 'Use SVG icons directly.',
    layoutConventions: 'Standard CSS Grid/Flexbox.'
  }
};
