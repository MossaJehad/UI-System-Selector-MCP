import { UISystem } from '../../schemas/uiSystem.js';

export const reactAria: UISystem = {
  id: 'react-aria-components',
  name: 'React Aria Components',
  organization: 'Adobe',
  description: 'Adobe’s official library of unstyled, accessible React components built on top of React Aria hooks, providing first-class accessibility, internationalization, and complete styling freedom with Tailwind, CSS, or vanilla styles.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['react-aria-components'],
  docsUrl: 'https://react-spectrum.adobe.com/react-aria/components.html',
  repositoryUrl: 'https://github.com/adobe/react-spectrum/tree/main/packages/react-aria-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Industry-leading accessibility suite with support for screen readers across desktop and mobile devices.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: false,
    format: 'Unstyled / Tailwind compatible'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Unstyled, semantic, accessible HTML primitives enhanced with React Aria interaction state attributes.',
  noveltyLevel: 'established',
  bestFor: [
    'Custom design systems requiring uncompromising AAA accessibility',
    'Tailwind CSS projects seeking robust headless components via `tailwindcss-react-aria-components`',
    'Complex date pickers, calendar grids, range sliders, and multi-select tags'
  ],
  avoidFor: [
    'Quick prototypes where the developer does not want to write any CSS or Tailwind classes'
  ],
  strengths: [
    'Created and maintained by Adobe’s accessibility team',
    'Rich state data attributes (e.g. `data-focused`, `data-hovered`, `data-pressed`, `data-selected`) for effortless CSS/Tailwind styling',
    'Comprehensive date and time management with `@internationalized/date`'
  ],
  weaknesses: [
    'Unstyled: requires custom styling classes or CSS'
  ],
  tags: [
    'adobe',
    'react-aria',
    'headless',
    'unstyled',
    'wcag-aaa',
    'internationalization',
    'tailwind-compatible'
  ],
  installation: {
    react: {
      command: 'npm install react-aria-components',
      packages: ['react-aria-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'React Aria button supporting press events and state attributes.',
      importExample: "import { Button } from 'react-aria-components';\n\n<Button onPress={() => alert('Clicked')} className=\"btn-primary\">Click Me</Button>",
      docSubUrl: 'Button.html'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Accessible modal dialog with DialogTrigger and ModalOverlay.',
      importExample: "import { DialogTrigger, Button, Modal, Dialog, Heading } from 'react-aria-components';\n\n<DialogTrigger>\n  <Button>Open</Button>\n  <Modal>\n    <Dialog><Heading slot=\"title\">Settings</Heading><p>Content</p></Dialog>\n  </Modal>\n</DialogTrigger>",
      docSubUrl: 'Modal.html'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `react-aria-components`.',
      'Use state attributes (`data-hovered`, `data-pressed`, `data-focused`) for styling variants.',
      'Use `onPress` instead of `onClick` for multi-input accessibility.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Style using CSS or Tailwind variants matching React Aria data attributes.',
    iconUsage: 'Use Lucide React or Spectrum icons.',
    layoutConventions: 'Combine React Aria Components with CSS Flexbox/Grid.'
  }
};
