import { UISystem } from '../../schemas/uiSystem.js';

export const nachosUi: UISystem = {
  id: 'nachos-ui',
  name: 'Nachos UI (React Native Component Kit)',
  organization: 'Avocode',
  description: 'An open-source React Native component library created by Avocode, featuring 30+ customizable UI components (Button, Bubble, Card, Carousel, Indicator, Slider, Spinner) powered by react-native-clutch and customizable theme objects.',
  category: 'mobile',
  secondaryCategories: ['component-library', 'consumer'],
  frameworks: ['react-native'],
  stylingApproach: 'styled-components',
  packageNames: ['nachos-ui'],
  docsUrl: 'https://github.com/avocode/nachos-ui',
  repositoryUrl: 'https://github.com/avocode/nachos-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: false,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Mobile touch indicators and accessible component labels.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Nachos UI theme objects via `ThemeProvider`',
    packageName: 'nachos-ui'
  },
  icons: {
    available: true,
    name: 'Vector Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Friendly consumer mobile aesthetic: vibrant color pills, rounded chat bubbles, badge indicators, and animated loading spinners in React Native.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Historical reference and studying early React Native component architecture by Avocode',
    'Maintaining legacy React Native mobile apps',
    'Mobile UI design patterns'
  ],
  avoidFor: [
    'New Expo / React Native greenfield projects (use Tamagui, Gluestack, or RNEUI instead)'
  ],
  strengths: [
    'Pioneering React Native component library by design toolmaker Avocode',
    'Rich component suite (Bubble, Card, Carousel, Slider, SegmentedControl)',
    'Clean theme provider API'
  ],
  weaknesses: [
    'Archived; historical React Native focus'
  ],
  tags: [
    'nachos-ui',
    'nachos',
    'react-native',
    'mobile',
    'avocode',
    'archived',
    'historical',
    'hidden-gem'
  ],
  aliases: ['Nachos UI', 'NachosUI', 'Nachos', 'Avocode Nachos'],
  relatedSystems: ['react-native-elements', 'nativebase', 'tamagui'],
  systemTypes: ['mobile', 'component-library'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install nachos-ui',
      packages: ['nachos-ui'],
      peerDependencies: ['react', 'react-native'],
      setupInstructions: 'Wrap your app in `<ThemeProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Nachos UI mobile button with type="primary" | "success" | "danger".',
      importExample: "import { Button } from 'nachos-ui';\n\n<Button type=\"primary\">Press Me</Button>",
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Historical React Native library: wrap root with `<ThemeProvider>`.',
      'Import components from `nachos-ui`.',
      'Use React Native flexbox layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `nachos-ui` theme provider.',
    iconUsage: 'Embed vector icons.',
    layoutConventions: 'Use standard React Native flexbox.'
  }
};
