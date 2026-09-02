import { UISystem } from '../../schemas/uiSystem.js';

export const ariakit: UISystem = {
  id: 'ariakit',
  name: 'Ariakit (formerly Reakit)',
  organization: 'Ariakit Community',
  description: 'An unstyled, accessible React component library and toolkit engineered with obsessive attention to WAI-ARIA compliance, composability, and developer flexibility.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['@ariakit/react'],
  docsUrl: 'https://ariakit.org',
  repositoryUrl: 'https://github.com/ariakit/ariakit',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'One of the most rigorously tested accessibility libraries in the entire React ecosystem.'
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
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Completely unstyled, pure accessibility logic and interactive behavior for React.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Custom design systems requiring uncompromising accessibility and keyboard ergonomics',
    'Complex comboboxes, command palettes, and multi-level nested menus',
    'Developers who want total freedom over styling (CSS Modules, Tailwind, Vanilla CSS)'
  ],
  avoidFor: [
    'Quick prototypes requiring instant pre-built themes'
  ],
  strengths: [
    'Incomparable accessibility compliance and screen reader behavior',
    'Zero styling opinions: style with standard CSS, Tailwind, or CSS Modules',
    'Clean hooks and component anatomy'
  ],
  weaknesses: [
    'Requires styling work from scratch'
  ],
  tags: [
    'ariakit',
    'headless',
    'unstyled',
    'high-accessibility',
    'wcag-aaa',
    'react',
    'combobox',
    'hidden-gem'
  ],
  installation: {
    react: {
      command: 'npm install @ariakit/react',
      packages: ['@ariakit/react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Ariakit accessible modal dialog with backdrop and focus restoration.',
      importExample: "import * as Ariakit from '@ariakit/react';\n\nconst dialog = Ariakit.useDialogStore();\n<Ariakit.Button onClick={dialog.toggle}>Open</Ariakit.Button>\n<Ariakit.Dialog store={dialog} className=\"dialog\">Dialog content</Ariakit.Dialog>",
      docSubUrl: 'components/dialog'
    },
    combobox: {
      canonicalName: 'Combobox',
      description: 'Accessible autocomplete combobox with filtering and keyboard navigation.',
      importExample: "import * as Ariakit from '@ariakit/react';\n\n<Ariakit.ComboboxProvider>\n  <Ariakit.Combobox placeholder=\"Search...\" />\n  <Ariakit.ComboboxPopover>\n    <Ariakit.ComboboxItem value=\"Apple\" />\n    <Ariakit.ComboboxItem value=\"Banana\" />\n  </Ariakit.ComboboxPopover>\n</Ariakit.ComboboxProvider>",
      docSubUrl: 'components/combobox'
    }
  },
  aiInstructions: {
    principles: [
      'Import components and hooks from `@ariakit/react`.',
      'Apply CSS or Tailwind utility classes directly to Ariakit components.',
      'Rely on Ariakit for focus management and ARIA states.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style using CSS or Tailwind classes on Ariakit components.',
    iconUsage: 'Use Lucide React or standard SVG icons.',
    layoutConventions: 'Standard CSS Grid/Flexbox with Ariakit interactive elements.'
  }
};
