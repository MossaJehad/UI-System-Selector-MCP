import { UISystem } from '../../schemas/uiSystem.js';

export const vibe: UISystem = {
  id: 'vibe',
  name: 'monday.com Vibe Design System',
  organization: 'monday.com',
  description: 'monday.com’s open-source design system and React component library, built for collaborative work management, project boards, interactive Kanban views, and dynamic SaaS applications.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'developer-tool', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@mondaycom/vibe-core', '@mondaycom/vibe-icons'],
  docsUrl: 'https://vibe.monday.com',
  repositoryUrl: 'https://github.com/mondaycom/vibe',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed and tested for WCAG 2.1 AA across monday.com enterprise work operating system.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties and Vibe Theme tokens',
    packageName: '@mondaycom/vibe-core'
  },
  icons: {
    available: true,
    packageName: '@mondaycom/vibe-icons',
    name: 'Vibe Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Vibrant, playful, highly-organized productivity aesthetic: colorful status chips (Done, Working on it, Stuck), clean board columns, and smooth micro-interactions.',
  noveltyLevel: 'established',
  bestFor: [
    'monday.com Apps Marketplace extensions and board views',
    'Project management, Kanban boards, sprint planners, and roadmap dashboards',
    'Interactive collaborative SaaS tools needing lively and intuitive UI'
  ],
  avoidFor: [
    'Ultra-minimalist monochrome technical diff views'
  ],
  strengths: [
    'World-class work management UI patterns and board components',
    'Rich interactive status and priority components with smooth animations',
    'Full dark mode, night mode, and RTL language support'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'monday',
    'vibe',
    'project-management',
    'kanban',
    'productivity',
    'saas',
    'dark-mode',
    'rtl'
  ],
  aliases: ['Vibe', 'monday.com UI', 'monday UI React Core'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @mondaycom/vibe-core @mondaycom/vibe-icons',
      packages: ['@mondaycom/vibe-core', '@mondaycom/vibe-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@mondaycom/vibe-core/tokens` and `@mondaycom/vibe-core/style` in your root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Vibe action button with kind="primary" | "secondary" | "tertiary".',
      importExample: "import { Button } from '@mondaycom/vibe-core';\n\n<Button kind=\"primary\">Create Item</Button>",
      docSubUrl: 'components/button'
    },
    chips: {
      canonicalName: 'Chips',
      description: 'Status chip indicating project states.',
      importExample: "import { Chips } from '@mondaycom/vibe-core';\n\n<Chips label=\"Done\" color=\"positive\" />",
      docSubUrl: 'components/chips'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@mondaycom/vibe-core/tokens` at the application root.',
      'Use Vibe Chips and Badges for workflow states.',
      'Use Vibe Dialog, Modal, and Menu for overlay interactions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Vibe theme classes (`theme-dark`, `theme-black`, `theme-light`).',
    iconUsage: 'Import icons from @mondaycom/vibe-icons (e.g. Add, Check, Calendar).',
    layoutConventions: 'Use Flex and Box components with Vibe spacing tokens.'
  }
};
