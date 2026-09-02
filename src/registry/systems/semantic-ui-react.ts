import { UISystem } from '../../schemas/uiSystem.js';

export const semanticUiReact: UISystem = {
  id: 'semantic-ui-react',
  name: 'Semantic UI React (Fomantic-UI)',
  organization: 'Semantic Org / Fomantic-UI Community',
  description: 'The official React integration for Semantic UI and Fomantic-UI, providing natural language prop conventions (`primary`, `fluid`, `inverted`, `pointing`, `compact`), subcomponent composition, and zero jQuery dependencies.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'less',
  packageNames: ['semantic-ui-react', 'semantic-ui-css', 'fomantic-ui-css'],
  docsUrl: 'https://react.semantic-ui.com',
  repositoryUrl: 'https://github.com/Semantic-Org/Semantic-UI-React',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides React state management and ARIA attributes across dropdowns and modals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Semantic UI / Fomantic-UI Less variables',
    packageName: 'semantic-ui-css'
  },
  icons: {
    available: true,
    packageName: 'semantic-ui-css',
    name: 'FontAwesome integration via Semantic UI Icon'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Natural language human-readable component style: teal/blue accents, segment containers, labeled buttons, and intuitive subcomponents (`Card.Header`, `Menu.Item`).',
  noveltyLevel: 'established',
  bestFor: [
    'React applications wanting natural language prop syntax and expressive subcomponents',
    'Projects using Fomantic-UI community themes',
    'Rapid application prototyping with high component discoverability'
  ],
  avoidFor: [
    'Tailwind-only modern projects'
  ],
  strengths: [
    'Most readable and intuitive JSX component prop syntax in React (`<Button primary fluid size="large" />`)',
    'Zero jQuery: 100% React state and event handling',
    'Expressive UI element taxonomy (Views, Collections, Modules, Elements)'
  ],
  weaknesses: [
    'Less maintenance compared to newer React ecosystems; active fork maintained in Fomantic-UI'
  ],
  tags: [
    'semantic-ui',
    'fomantic-ui',
    'semantic-ui-react',
    'react',
    'component-library',
    'established'
  ],
  aliases: ['Semantic UI React', 'Semantic React', 'Fomantic React'],
  relatedSystems: ['fomantic-ui'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install semantic-ui-react semantic-ui-css',
      packages: ['semantic-ui-react', 'semantic-ui-css'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `semantic-ui-css/semantic.min.css` in your root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Semantic button with primary, secondary, positive, negative, fluid, and inverted props.',
      importExample: "import { Button } from 'semantic-ui-react';\n\n<Button primary>Get Started</Button>",
      docSubUrl: 'elements/button'
    },
    segment: {
      canonicalName: 'Segment',
      description: 'Container segment for grouping related content.',
      importExample: "import { Segment } from 'semantic-ui-react';\n\n<Segment raised>Segment Content</Segment>",
      docSubUrl: 'elements/segment'
    }
  },
  aiInstructions: {
    principles: [
      'Import `semantic-ui-css/semantic.min.css` at root.',
      'Use natural language props (`primary`, `secondary`, `fluid`, `compact`, `inverted`).',
      'Use Grid, Grid.Row, and Grid.Column for layout structure.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Semantic UI Less variables or Fomantic-UI stylesheets.',
    iconUsage: 'Use `<Icon name="search" />`.',
    layoutConventions: 'Use Grid, Container, and Segment layout structures.'
  }
};
