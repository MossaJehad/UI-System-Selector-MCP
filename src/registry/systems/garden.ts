import { UISystem } from '../../schemas/uiSystem.js';

export const garden: UISystem = {
  id: 'garden',
  name: 'Zendesk Garden',
  organization: 'Zendesk',
  description: 'Zendesk’s official open-source design system and React component suite, engineered for high-empathy customer support interfaces, accessible multi-agent ticket routing, and conversational UI workflows.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'accessibility-focused', 'developer-tool'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['@zendeskgarden/react-buttons', '@zendeskgarden/react-theming', '@zendeskgarden/react-forms'],
  docsUrl: 'https://garden.zendesk.com',
  repositoryUrl: 'https://github.com/zendeskgarden/react-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorously audited for WCAG 2.1 AA conformance across Zendesk Support and Chat products.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JavaScript theme object',
    packageName: '@zendeskgarden/react-theming'
  },
  icons: {
    available: true,
    packageName: '@zendeskgarden/svg-icons',
    name: 'Garden SVG Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, empathetic, human customer service aesthetic: Kale green accents, rounded corners, clear message threads, and friendly badge tags.',
  noveltyLevel: 'established',
  bestFor: [
    'Customer support ticket hubs, helpdesks, and CRM inbox interfaces',
    'Customer service chat and conversational messaging widgets',
    'SaaS applications needing high accessibility and RTL language support'
  ],
  avoidFor: [
    'Ultra-minimalist monochrome terminal tools',
    'Retro pixel-art gaming sites'
  ],
  strengths: [
    'Exceptional form controls, dropdowns, and message thread components',
    'Native RTL (Right-to-Left) mirroring and bi-directional localization',
    'Comprehensive component suite covering buttons, modals, tags, notifications, and tabs'
  ],
  weaknesses: [
    'Requires styled-components peer dependency',
    'React only'
  ],
  tags: [
    'zendesk',
    'garden',
    'customer-support',
    'helpdesk',
    'crm',
    'saas',
    'accessible',
    'rtl',
    'styled-components'
  ],
  aliases: ['Zendesk Garden', 'Garden React Components', 'Garden UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @zendeskgarden/react-theming @zendeskgarden/react-buttons @zendeskgarden/react-forms styled-components',
      packages: ['@zendeskgarden/react-theming', '@zendeskgarden/react-buttons', '@zendeskgarden/react-forms', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your app in `<ThemeProvider>` from `@zendeskgarden/react-theming`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Garden action button with isPrimary, isDanger, isBasic, and isPill variants.',
      importExample: "import { Button } from '@zendeskgarden/react-buttons';\n\n<Button isPrimary>Resolve Ticket</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap application in `<ThemeProvider>` from `@zendeskgarden/react-theming`.',
      'Use Garden Tag and Badge primitives for ticket priorities and statuses.',
      'Use Garden Grid and Flex for layout structure.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `ThemeProvider` theme overrides for custom brand palettes while preserving accessibility contrast.',
    iconUsage: 'Import icons from @zendeskgarden/svg-icons.',
    layoutConventions: 'Use Grid and Row/Col layout components with Garden spacing units.'
  }
};
