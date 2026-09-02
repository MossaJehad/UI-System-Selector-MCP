import { UISystem } from '../../schemas/uiSystem.js';

export const workdayCanvas: UISystem = {
  id: 'workday-canvas',
  name: 'Workday Canvas Design System',
  organization: 'Workday',
  description: 'Workday’s official open-source design system and React component kit, engineered for enterprise HR, financial management, payroll, and large-scale workforce administration workflows.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@workday/canvas-kit-react', '@workday/canvas-tokens-web'],
  docsUrl: 'https://workday.github.io/canvas-kit',
  repositoryUrl: 'https://github.com/Workday/canvas-kit',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed and tested to satisfy enterprise WCAG 2.1 AA compliance across global enterprise deployments.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JavaScript constants',
    packageName: '@workday/canvas-tokens-web'
  },
  icons: {
    available: true,
    packageName: '@workday/canvas-kit-react',
    name: 'Workday System Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Structured, high-trust enterprise corporate aesthetic: Workday Blue, clear org charts, financial tables, and crisp employee record cards.',
  noveltyLevel: 'established',
  bestFor: [
    'Enterprise HR, benefits management, and payroll systems',
    'Financial accounting, enterprise resource planning (ERP), and corporate compliance tools',
    'Workday Extend applications and internal corporate portals'
  ],
  avoidFor: [
    'Consumer mobile games',
    'Creative artistic portfolios'
  ],
  strengths: [
    'Built for mission-critical enterprise HR and ERP software',
    'Robust compound components with extensive keyboard and screen reader accessibility',
    'Full RTL support for global enterprise workforces'
  ],
  weaknesses: [
    'React only',
    'Corporate enterprise styling'
  ],
  tags: [
    'workday',
    'canvas-kit',
    'enterprise',
    'hr',
    'erp',
    'finance',
    'accessible',
    'rtl'
  ],
  aliases: ['Canvas Kit', 'Workday UI', 'Canvas Design System'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @workday/canvas-kit-react @workday/canvas-tokens-web @emotion/react @emotion/styled',
      packages: ['@workday/canvas-kit-react', '@workday/canvas-tokens-web', '@emotion/react', '@emotion/styled'],
      peerDependencies: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      setupInstructions: 'Wrap your app in `<CanvasProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'PrimaryButton',
      description: 'Canvas Kit primary action button.',
      importExample: "import { PrimaryButton } from '@workday/canvas-kit-react/button';\n\n<PrimaryButton>Submit Timesheet</PrimaryButton>",
      docSubUrl: 'components/buttons/'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root in `<CanvasProvider>`.',
      'Use Canvas Kit FormField, TextInput, and Select for enterprise data entry.',
      'Use Layout and Flex primitives with Canvas spacing tokens.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure CanvasProvider theme object.',
    iconUsage: 'Use Canvas SystemIcon components.',
    layoutConventions: 'Use Canvas Layout, Flex, and Card components.'
  }
};
