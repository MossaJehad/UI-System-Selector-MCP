import { UISystem } from '../../schemas/uiSystem.js';

export const mongodbLeafygreen: UISystem = {
  id: 'mongodb-leafygreen',
  name: 'MongoDB LeafyGreen UI',
  organization: 'MongoDB',
  description: 'MongoDB’s official open-source design system and React component suite powering MongoDB Atlas, Compass, and Cloud Manager, engineered for database cluster management, JSON document editors, indexing wizards, and cloud database metrics.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'dashboard', 'data-heavy', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@leafygreen-ui/button', '@leafygreen-ui/leafygreen-provider', '@leafygreen-ui/card', '@leafygreen-ui/icon'],
  docsUrl: 'https://www.mongodb.design',
  repositoryUrl: 'https://github.com/mongodb/leafygreen-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across MongoDB Atlas cloud console.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JavaScript constants',
    packageName: '@leafygreen-ui/leafygreen-provider'
  },
  icons: {
    available: true,
    packageName: '@leafygreen-ui/icon',
    name: 'LeafyGreen Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Modern cloud database style: MongoDB Forest Green (#00ed64 / #00684a), dark slate cluster panels, interactive query bars, and JSON document tree viewers.',
  noveltyLevel: 'established',
  bestFor: [
    'Database administration consoles, cluster provisioning, and indexing wizards',
    'JSON document viewers, NoSQL schema explorers, and query editors',
    'Developer SaaS dashboards needing MongoDB aesthetic'
  ],
  avoidFor: [
    'Consumer fashion shopping sites'
  ],
  strengths: [
    'Purpose-built for database, cloud infrastructure, and data visualization workflows',
    'Modular npm packages with tree-shaking support',
    'First-class dark mode and high-contrast accessibility'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'mongodb',
    'leafygreen',
    'atlas',
    'database',
    'nosql',
    'developer-tool',
    'dark-mode',
    'established'
  ],
  aliases: ['LeafyGreen', 'MongoDB Design System', 'LeafyGreen UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @leafygreen-ui/leafygreen-provider @leafygreen-ui/button @leafygreen-ui/card @leafygreen-ui/icon @emotion/react @emotion/styled',
      packages: ['@leafygreen-ui/leafygreen-provider', '@leafygreen-ui/button', '@leafygreen-ui/card', '@leafygreen-ui/icon', '@emotion/react', '@emotion/styled'],
      peerDependencies: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      setupInstructions: 'Wrap your app in `<LeafyGreenProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'LeafyGreen action button with variant="primary" | "default" | "danger" | "dangerOutline".',
      importExample: "import Button from '@leafygreen-ui/button';\n\n<Button variant=\"primary\">Deploy Cluster</Button>",
      docSubUrl: 'component/button/live-example'
    },
    card: {
      canonicalName: 'Card',
      description: 'LeafyGreen card container with dark mode support.',
      importExample: "import Card from '@leafygreen-ui/card';\n\n<Card>Cluster M30 (AWS us-east-1)</Card>",
      docSubUrl: 'component/card/live-example'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<LeafyGreenProvider darkMode={...}>`.',
      'Use LeafyGreen Card, Banner, and Badge for cluster status displays.',
      'Apply MongoDB Forest Green accents for primary actions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure LeafyGreenProvider darkMode and theme props.',
    iconUsage: 'Import icons from @leafygreen-ui/icon (e.g. Cloud, Database, Server).',
    layoutConventions: 'Use standard flex and grid layouts with LeafyGreen spacing tokens.'
  }
};
