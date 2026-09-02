import { UISystem } from '../../schemas/uiSystem.js';

export const grommet: UISystem = {
  id: 'grommet',
  name: 'Grommet',
  organization: 'HPE (Hewlett Packard Enterprise)',
  description: 'An accessible, responsive, mobile-first design system and React component library engineered for modern enterprise web applications with deeply customizable JSON themes.',
  category: 'enterprise',
  secondaryCategories: ['saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['grommet', 'grommet-icons', 'styled-components'],
  docsUrl: 'https://v2.grommet.io',
  repositoryUrl: 'https://github.com/grommet/grommet',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Prioritizes W3C WCAG 2.1 AA conformance with automatic contrast and ARIA support.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Grommet Theme Object',
    packageName: 'grommet-theme-hpe'
  },
  icons: {
    available: true,
    packageName: 'grommet-icons',
    name: 'Grommet Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Clean, approachable enterprise layout with fluid typography, responsive grid controls, and pastel accents.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise administration portals and cloud infrastructure monitoring',
    'Responsive dashboards combining mobile and desktop viewport adaptations',
    'Apps requiring deep dynamic JSON-based runtime theming'
  ],
  avoidFor: [
    'Ultra-compact financial trading terminals'
  ],
  strengths: [
    'Powerful layout components (`Box`, `Grid`, `Layer`, `Stack`)',
    'Comprehensive icon library (`grommet-icons`) with hundreds of SVGs',
    'Strong accessibility focus out of the box'
  ],
  weaknesses: [
    'Depends on `styled-components` runtime',
    'React-only'
  ],
  tags: [
    'hpe',
    'grommet',
    'enterprise',
    'responsive',
    'accessibility',
    'dark-mode',
    'saas'
  ],
  installation: {
    react: {
      command: 'npm install grommet grommet-icons styled-components',
      packages: ['grommet', 'grommet-icons', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap root in `<Grommet theme={theme} full>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Grommet button with primary, secondary, and active states.',
      importExample: "import { Button } from 'grommet';\n\n<Button primary label=\"Submit Ticket\" onClick={() => {}} />",
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap application in `<Grommet>`.',
      'Use `<Box>`, `<Grid>`, and `<Stack>` for all layout structure.',
      'Use `grommet-icons` for icons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via `<Grommet theme={theme} themeMode="dark">`.',
    iconUsage: 'Import icons from grommet-icons (e.g. SettingsOption, Server, Add).',
    layoutConventions: 'Use Box with pad, gap, and direction props.'
  }
};
