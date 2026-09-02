import { UISystem } from '../../schemas/uiSystem.js';

export const primer: UISystem = {
  id: 'primer',
  name: 'GitHub Primer',
  organization: 'GitHub',
  description: 'GitHub’s official design system for creating cohesive, accessible, and high-performance developer tools and web applications.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'accessibility-focused', 'saas'],
  frameworks: ['react', 'css-only'],
  stylingApproach: 'css-in-js',
  packageNames: ['@primer/react', '@primer/primitives', '@primer/octicons-react'],
  docsUrl: 'https://primer.style',
  repositoryUrl: 'https://github.com/primer/react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'GitHub audits all Primer components for strict WCAG 2.1 AA conformance with robust focus management.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'JSON / CSS Custom Properties',
    packageName: '@primer/primitives'
  },
  icons: {
    available: true,
    packageName: '@primer/octicons-react',
    name: 'Octicons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Clean, technical, high-contrast, quintessential GitHub developer environment feel.',
  noveltyLevel: 'established',
  bestFor: [
    'Developer platforms and developer tooling',
    'Code review, diff, repository, and workflow interfaces',
    'Data-dense SaaS dashboards and settings pages',
    'GitHub Apps, Actions, and integrations'
  ],
  avoidFor: [
    'Marketing landing pages with heavy animation',
    'Consumer e-commerce storefronts',
    'Playful or whimsical mobile apps'
  ],
  strengths: [
    'Deeply refined for developer productivity and technical workflows',
    'Outstanding typography and color token system with automatic dark mode support',
    'Rich ecosystem of GitHub Octicons included out-of-the-box',
    'Battle-tested at massive scale across github.com'
  ],
  weaknesses: [
    'Highly branded to the GitHub look and feel; hard to reskin completely',
    'Primarily React-focused (ViewComponents available for Rails)',
    'RTL support is limited compared to enterprise suites'
  ],
  tags: [
    'github-like',
    'developer-tool',
    'dense',
    'compact',
    'dark-mode',
    'high-accessibility',
    'company-design-system',
    'octicons'
  ],
  installation: {
    react: {
      command: 'npm install @primer/react @primer/primitives @primer/octicons-react styled-components',
      packages: ['@primer/react', '@primer/primitives', '@primer/octicons-react', 'styled-components'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your application root with `<ThemeProvider>` and `<BaseStyles>` from `@primer/react`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Primary, secondary, danger, and invisible action buttons with variant, size, and leading/trailing icons.',
      importExample: "import { Button } from '@primer/react';\nimport { MarkGithubIcon } from '@primer/octicons-react';\n\n<Button variant=\"primary\" leadingVisual={MarkGithubIcon}>Sign In</Button>",
      propsPattern: 'variant: "default" | "primary" | "danger" | "invisible", size: "small" | "medium" | "large"',
      accessibilityNotes: 'Has automatic aria-disabled and focus-visible rings.',
      docSubUrl: 'react/Button'
    },
    dialog: {
      canonicalName: 'Dialog',
      description: 'Accessible modal dialog with focus trapping and ESC dismissal.',
      importExample: "import { Dialog } from '@primer/react';\n\n<Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} title=\"Confirm Action\">\n  <p>Dialog content</p>\n</Dialog>",
      docSubUrl: 'react/Dialog'
    },
    flash: {
      canonicalName: 'Flash',
      description: 'Alert and banner notification banner with status colors.',
      importExample: "import { Flash } from '@primer/react';\n\n<Flash variant=\"warning\">Action required on repository</Flash>",
      propsPattern: 'variant: "default" | "warning" | "success" | "danger"',
      docSubUrl: 'react/Flash'
    },
    actionlist: {
      canonicalName: 'ActionList',
      description: 'Menu and list structure supporting single/multi selection, leading visuals, and keyboard navigation.',
      importExample: "import { ActionList } from '@primer/react';\n\n<ActionList>\n  <ActionList.Item>Repository Settings</ActionList.Item>\n  <ActionList.Divider />\n  <ActionList.Item variant=\"danger\">Delete</ActionList.Item>\n</ActionList>",
      docSubUrl: 'react/ActionList'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap the application root in <ThemeProvider> and <BaseStyles>.',
      'Use Primer Box, Stack, and PageLayout for structural layout rather than raw Tailwind or custom divs.',
      'Use @primer/octicons-react for all iconography.',
      'Use color tokens from theme (e.g. sx={{ color: "fg.muted", bg: "canvas.default" }}) rather than hardcoded hex codes.',
      'Respect GitHub typographic scale (fontSize 0-6).'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      'lucide-react (use @primer/octicons-react)',
      '@mui/material',
      '@chakra-ui/react'
    ],
    themingGuide: 'Configure theme via ThemeProvider colorMode="auto" | "day" | "night" and nightScheme="dark_dimmed" | "dark_high_contrast".',
    iconUsage: 'Import icons from @primer/octicons-react (e.g. RepoIcon, GitPullRequestIcon, GearIcon).',
    layoutConventions: 'Use PageLayout with PageLayout.Header, PageLayout.Content, PageLayout.Pane, and PageLayout.Footer.'
  }
};
