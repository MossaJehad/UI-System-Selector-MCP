import { UISystem } from '../../schemas/uiSystem.js';

export const evergreen: UISystem = {
  id: 'evergreen',
  name: 'Evergreen UI',
  organization: 'Segment (Twilio)',
  description: 'Segment’s official open-source React UI framework and component suite, engineered for customer data platforms, event tracking stream monitors, API webhook integrations, and developer data hubs.',
  category: 'component-library',
  secondaryCategories: ['developer-tool', 'saas', 'dashboard', 'company-design-system'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['evergreen-ui'],
  docsUrl: 'https://evergreen.segment.com',
  repositoryUrl: 'https://github.com/segmentio/evergreen',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for WCAG 2.1 AA across Segment developer data consoles.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Evergreen Theme object via ThemeProvider',
    packageName: 'evergreen-ui'
  },
  icons: {
    available: true,
    packageName: 'evergreen-ui',
    name: 'Evergreen Built-in Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Segment customer data platform style: Segment Blue (#1070ca), Mint Green, Pane/Card primitives, table filters, and live event payload JSON inspectors.',
  noveltyLevel: 'established',
  bestFor: [
    'Customer data platforms (CDP), analytics event pipelines, and webhook inspectors',
    'Developer portal tools needing out-of-the-box polished React components',
    'SaaS dashboards with rich SideSheet drawers, Table, and Tag inputs'
  ],
  avoidFor: [
    'Retro gaming or consumer fashion apps'
  ],
  strengths: [
    'Zero configuration needed: works out of the box with zero CSS imports required',
    'Exceptional SideSheet, Dialog, Table, and Combobox components',
    'Clean Pane layout primitive inspired by UIFlex'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'segment',
    'evergreen',
    'cdp',
    'analytics',
    'developer-tool',
    'saas',
    'dashboard',
    'established'
  ],
  aliases: ['Evergreen', 'Segment UI', 'Evergreen UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install evergreen-ui',
      packages: ['evergreen-ui'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Evergreen button with appearance="primary" | "default" | "minimal".',
      importExample: "import { Button } from 'evergreen-ui';\n\n<Button appearance=\"primary\">Send Track Event</Button>",
      docSubUrl: 'components/buttons'
    },
    sidesheet: {
      canonicalName: 'SideSheet',
      description: 'Slide-out side drawer for inspecting event payloads and details.',
      importExample: "import { SideSheet, Heading, Paragraph } from 'evergreen-ui';\n\n<SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}><Heading>Event Details</Heading></SideSheet>",
      docSubUrl: 'components/side-sheet'
    }
  },
  aiInstructions: {
    principles: [
      'Use `Pane`, `Box`, and `Card` layout primitives from `evergreen-ui`.',
      'Use `SideSheet` for detail drawers and event payload inspectors.',
      'Apply `toaster.success()` and `toaster.danger()` for toast notifications.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via `<ThemeProvider value={defaultTheme}>`.',
    iconUsage: 'Import icons directly from `evergreen-ui` (e.g. `TickIcon`, `CrossIcon`, `SearchIcon`).',
    layoutConventions: 'Use `Pane` with flex and padding props.'
  }
};
