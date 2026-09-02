import { UISystem } from '../../schemas/uiSystem.js';

export const ringUi: UISystem = {
  id: 'ring-ui',
  name: 'JetBrains Ring UI',
  organization: 'JetBrains',
  description: 'JetBrains’s official open-source React component library powering YouTrack, TeamCity, Hub, and JetBrains Space, built for developer productivity, IDE plugin webviews, issue tracking, and CI/CD pipelines.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'saas', 'dashboard', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@jetbrains/ring-ui', '@jetbrains/logos'],
  docsUrl: 'https://jetbrains.github.io/ring-ui',
  repositoryUrl: 'https://github.com/JetBrains/ring-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for keyboard-first navigation and developer efficiency across JetBrains web products.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties via Ring UI theming',
    packageName: '@jetbrains/ring-ui'
  },
  icons: {
    available: true,
    packageName: '@jetbrains/ring-ui',
    name: 'Ring UI SVG Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Crisp, high-density JetBrains developer aesthetic: dark gray surfaces, bright JetBrains primary blue/purple accents, and keyboard shortcut indicators.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'JetBrains IDE plugins and Webview extension tools',
    'Issue tracking, project management, and CI/CD build monitors',
    'Developer portal tools requiring dense data tables and keyboard shortcuts'
  ],
  avoidFor: [
    'Consumer marketing blogs'
  ],
  strengths: [
    'Unbeatable integration with JetBrains developer tools and YouTrack/TeamCity plugins',
    'Keyboard-first UX with built-in shortcuts and command-palette style query inputs',
    'First-class dark mode matching IntelliJ / JetBrains IDE themes'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'jetbrains',
    'ring-ui',
    'youtrack',
    'teamcity',
    'developer-tool',
    'dense',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Ring UI', 'JetBrains UI', 'YouTrack UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @jetbrains/ring-ui',
      packages: ['@jetbrains/ring-ui'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@jetbrains/ring-ui/dist/style.css` and use Ring UI components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Ring UI action button with primary, danger, and inline kinds.',
      importExample: "import Button from '@jetbrains/ring-ui/dist/button/button';\n\n<Button primary>Run Build</Button>",
      docSubUrl: 'components/button'
    },
    queryassist: {
      canonicalName: 'QueryAssist',
      description: 'Search bar with intelligent autocomplete and query syntax highlighting.',
      importExample: "import QueryAssist from '@jetbrains/ring-ui/dist/query-assist/query-assist';\n\n<QueryAssist placeholder=\"Search issues...\" />",
      docSubUrl: 'components/query-assist'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@jetbrains/ring-ui/dist/style.css`.',
      'Use Ring UI Header, UserCard, and QueryAssist components for developer tools.',
      'Provide keyboard navigation shortcuts across key actions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Ring UI dark/light theme variables.',
    iconUsage: 'Import icons from @jetbrains/ring-ui/dist/icon/icon.',
    layoutConventions: 'Use Grid and ControlsHeight primitives with compact spacing.'
  }
};
