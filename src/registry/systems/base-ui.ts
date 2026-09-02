import { UISystem } from '../../schemas/uiSystem.js';

export const baseUi: UISystem = {
  id: 'base-ui',
  name: 'Base UI',
  organization: 'MUI (Material UI Company)',
  description: 'MUI’s next-generation, unstyled, framework-level React component library engineered from scratch with high-density accessibility, modern CSS features, and zero styling runtime lock-in.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['@base-ui-components/react'],
  docsUrl: 'https://base-ui.com',
  repositoryUrl: 'https://github.com/mui/base-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered by accessibility specialists with comprehensive ARIA, focus, and pointer interactions.'
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
  aesthetic: 'Modern unstyled primitives designed for clean integration with Tailwind, CSS Modules, or vanilla CSS.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Next-generation React design systems seeking modern unstyled primitives without Material UI styling baggage',
    'Developers wanting cleaner alternative to Radix Primitives with fresh modern CSS integrations',
    'Apps prioritizing lightweight footprint and AAA accessibility'
  ],
  avoidFor: [
    'Teams wanting copy-paste pre-styled visual UI components out of the box'
  ],
  strengths: [
    'Modern component architecture designed without legacy emotion/styled-engine constraints',
    'Clean compound component structure and comprehensive state attributes',
    'High accessibility and keyboard navigation'
  ],
  weaknesses: [
    'Requires custom styling layer'
  ],
  tags: [
    'base-ui',
    'mui',
    'headless',
    'unstyled',
    'accessible',
    'modern',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @base-ui-components/react',
      packages: ['@base-ui-components/react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Base UI accessible modal dialog primitive.',
      importExample: "import { Dialog } from '@base-ui-components/react/dialog';\n\n<Dialog.Root>\n  <Dialog.Trigger>Open</Dialog.Trigger>\n  <Dialog.Portal>\n    <Dialog.Backdrop />\n    <Dialog.Popup><Dialog.Title>Dialog</Dialog.Title><Dialog.Close>Close</Dialog.Close></Dialog.Popup>\n  </Dialog.Portal>\n</Dialog.Root>",
      docSubUrl: 'react/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `@base-ui-components/react/*`.',
      'Use state attributes for styling (e.g. `&[data-popup-open]`).',
      'Style with Tailwind or CSS Modules.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material (styled)'],
    themingGuide: 'Style with Tailwind or CSS variables.',
    iconUsage: 'Use Lucide React or standard SVG icons.',
    layoutConventions: 'Combine Base UI primitives with modern CSS layouts.'
  }
};
