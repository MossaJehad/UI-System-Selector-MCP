import { UISystem } from '../../schemas/uiSystem.js';

export const atlassian: UISystem = {
  id: 'atlassian',
  name: 'Atlassian Design System',
  organization: 'Atlassian',
  description: 'Atlassian’s design system and component ecosystem powering Jira, Confluence, and Trello, engineered for agile workflows, issue tracking, and team collaboration.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'enterprise', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-in-js',
  packageNames: ['@atlaskit/button', '@atlaskit/tokens', '@atlaskit/icon', '@atlaskit/modal-dialog'],
  docsUrl: 'https://atlassian.design',
  repositoryUrl: 'https://bitbucket.org/atlassian/atlassian-frontend-mirror',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed for strict enterprise accessibility across Jira and Confluence.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Atlassian Design Tokens (@atlaskit/tokens)',
    packageName: '@atlaskit/tokens'
  },
  icons: {
    available: true,
    packageName: '@atlaskit/icon',
    name: 'Atlassian Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Jira and Confluence collaboration style: Pacific blue accents, subtle tag lozenges, avatar stacks, clean issue-tracker clarity.',
  noveltyLevel: 'established',
  bestFor: [
    'Jira and Confluence apps / Forge / Connect plugins',
    'Issue tracking and sprint planning tools',
    'Collaborative workspaces and document commenting interfaces',
    'Productivity and team dashboard apps'
  ],
  avoidFor: [
    'Consumer streaming video apps',
    'Retro gaming sites'
  ],
  strengths: [
    'Incredible ecosystem of productivity components (Badge, Lozenge, Tag, InlineEdit, Flag)',
    'Atlassian Design Tokens system with robust dark mode and theme switching',
    'Extremely recognizable and friendly collaboration aesthetic'
  ],
  weaknesses: [
    'Individual `@atlaskit/*` package modularity can require multiple small package installs'
  ],
  tags: [
    'atlassian',
    'jira',
    'confluence',
    'developer-tool',
    'collaboration',
    'saas',
    'enterprise',
    'dark-mode'
  ],
  installation: {
    react: {
      command: 'npm install @atlaskit/button @atlaskit/tokens @atlaskit/icon @atlaskit/primitives',
      packages: ['@atlaskit/button', '@atlaskit/tokens', '@atlaskit/icon', '@atlaskit/primitives'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Initialize tokens using `import { setGlobalTheme } from "@atlaskit/tokens"; setGlobalTheme({ colorMode: "dark" });`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Atlassian button with appearance="primary" | "default" | "subtle" | "danger" | "warning".',
      importExample: "import Button from '@atlaskit/button/new';\n\n<Button appearance=\"primary\">Create Issue</Button>",
      docSubUrl: 'components/button'
    },
    lozenge: {
      canonicalName: 'Lozenge',
      description: 'Status indicator badge (e.g. IN PROGRESS, DONE, BLOCKED) with color appearances.',
      importExample: "import Lozenge from '@atlaskit/lozenge';\n\n<Lozenge appearance=\"inprogress\">In Progress</Lozenge>",
      docSubUrl: 'components/lozenge'
    }
  },
  aiInstructions: {
    principles: [
      'Initialize design tokens using `setGlobalTheme()`.',
      'Use `<Box>`, `<Stack>`, and `<Inline>` from `@atlaskit/primitives` for layout.',
      'Use `@atlaskit/icon` for icons.',
      'Use `@atlaskit/lozenge` for issue and status badges.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'lucide-react'],
    themingGuide: 'Call `setGlobalTheme({ colorMode: "auto" | "light" | "dark" })` from @atlaskit/tokens.',
    iconUsage: 'Import icons from @atlaskit/icon/core/* (e.g. EditIcon, TrashIcon).',
    layoutConventions: 'Use @atlaskit/primitives (Box, Stack, Inline, Grid) with token values (e.g. token("space.100")).'
  }
};
