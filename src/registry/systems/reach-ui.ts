import { UISystem } from '../../schemas/uiSystem.js';

export const reachUi: UISystem = {
  id: 'reach-ui',
  name: 'Reach UI',
  organization: 'React Training (Ryan Florence, Michael Jackson)',
  description: 'The historic, accessible headless UI component library for React created by the React Training team, designed as accessible foundation primitives for screen readers and keyboard navigation that inspired modern headless libraries like Radix and Ariakit.',
  category: 'headless',
  secondaryCategories: ['unstyled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['@reach/dialog', '@reach/menu-button', '@reach/combobox', '@reach/tabs', '@reach/tooltip'],
  docsUrl: 'https://reach.tech',
  repositoryUrl: 'https://github.com/reach/reach-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Pioneered WAI-ARIA authoring practices and focus management across React headless components.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Unstyled accessible headless primitives.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Zero-CSS headless accessibility primitives: unstyled Dialog overlays, MenuButtons, Tabs, and Combobox search inputs ready for custom CSS.',
  noveltyLevel: 'established',
  bestFor: [
    'Historic and legacy React projects built on Reach UI primitives',
    'Developers studying the origins of the React headless accessibility movement',
    'Custom accessible design systems'
  ],
  avoidFor: [
    'New greenfield projects wanting modern Radix/Ariakit features'
  ],
  strengths: [
    'Historic pioneer of accessible headless React components by React Training (creators of React Router)',
    'Rock-solid focus management, escape key handling, and ARIA attributes',
    'Modular npm packages with zero styling lock-in'
  ],
  weaknesses: [
    'Maintenance largely superseded by Radix UI, Ariakit, and React Aria'
  ],
  tags: [
    'reach-ui',
    'headless',
    'accessibility',
    'react-training',
    'unstyled',
    'wai-aria',
    'established'
  ],
  aliases: ['Reach UI', 'Reach', 'React Reach UI'],
  relatedSystems: ['radix-primitives', 'ariakit', 'react-aria-components'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @reach/dialog @reach/menu-button @reach/tabs',
      packages: ['@reach/dialog', '@reach/menu-button', '@reach/tabs'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'Dialog',
      description: 'Reach UI accessible modal dialog primitive.',
      importExample: "import { Dialog } from '@reach/dialog';\nimport '@reach/dialog/styles.css';\n\n<Dialog isOpen={showDialog} onDismiss={() => setShowDialog(false)}><p>Dialog Content</p></Dialog>",
      docSubUrl: 'dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Use Reach UI primitives (`@reach/dialog`, `@reach/menu-button`, `@reach/tabs`).',
      'Import `@reach/*/styles.css` for minimal baseline functional CSS.',
      'Apply custom styling with Tailwind or CSS Modules.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Style using custom CSS classes targeting Reach UI data elements.',
    iconUsage: 'Embed SVG icons inside triggers.',
    layoutConventions: 'Use standard React component composition.'
  }
};
