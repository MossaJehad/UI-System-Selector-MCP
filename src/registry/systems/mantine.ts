import { UISystem } from '../../schemas/uiSystem.js';

export const mantine: UISystem = {
  id: 'mantine',
  name: 'Mantine',
  organization: 'Mantine Community',
  description: 'A fully featured, batteries-included React component library with 100+ customizable components, 50+ hooks, built-in dark mode, CSS Modules styling (v7), and rich extension packages (RichText, Charts, Notifications, Form, Modals).',
  category: 'saas',
  secondaryCategories: ['dashboard', 'developer-tool', 'styled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@mantine/core', '@mantine/hooks', '@mantine/notifications', '@mantine/form'],
  docsUrl: 'https://mantine.dev',
  repositoryUrl: 'https://github.com/mantinedev/mantine',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'WAI-ARIA compliant with full keyboard navigation and automatic ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'MantineTheme CSS variables',
    packageName: '@mantine/core'
  },
  icons: {
    available: false,
    name: 'Tabler Icons (@tabler/icons-react recommended)'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'configurable',
  aesthetic: 'Modern, clean, polished SaaS interface with smooth rounded corners, versatile color shades, and elegant typography.',
  noveltyLevel: 'established',
  bestFor: [
    'Feature-rich React SaaS applications and administration dashboards',
    'Complex form management and validation (`@mantine/form`)',
    'Apps requiring rich text editors, charts, and notification systems',
    'Projects wanting comprehensive utility hooks and dark mode out-of-the-box'
  ],
  avoidFor: [
    'Non-React codebases',
    'Pure unstyled headless setups'
  ],
  strengths: [
    '100+ components, 50+ hooks, built-in forms, notifications, modals, and charts',
    'CSS Modules with zero CSS-in-JS runtime overhead in Mantine v7',
    'Exceptional documentation and copy-paste component templates'
  ],
  weaknesses: [
    'React-only',
    'Large ecosystem that requires picking specific packages'
  ],
  tags: [
    'react',
    'saas',
    'dashboard',
    'forms',
    'hooks',
    'dark-mode',
    'rtl',
    'css-modules',
    'charts'
  ],
  installation: {
    react: {
      command: 'npm install @mantine/core @mantine/hooks @tabler/icons-react postcss postcss-preset-mantine',
      packages: ['@mantine/core', '@mantine/hooks', '@tabler/icons-react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@mantine/core/styles.css` and wrap root with `<MantineProvider defaultColorScheme="dark">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Mantine button with variant="filled" | "light" | "outline" | "subtle" | "transparent" | "gradient".',
      importExample: "import { Button } from '@mantine/core';\n\n<Button variant=\"filled\" color=\"blue\">Save Changes</Button>",
      docSubUrl: 'core/button'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Mantine modal dialog with opened, onClose, and title.',
      importExample: "import { Modal, Button } from '@mantine/core';\n\n<Modal opened={opened} onClose={close} title=\"Edit Profile\">\n  <p>Modal body</p>\n</Modal>",
      docSubUrl: 'core/modal'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@mantine/core/styles.css`.',
      'Always wrap the application root with `<MantineProvider defaultColorScheme="auto">`.',
      'Use `<Stack>`, `<Group>`, `<Flex>`, and `<Grid>` for layouts.',
      'Use `@mantine/form` hook `useForm` for form state and validation.',
      'Use `@tabler/icons-react` for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via `createTheme` in `<MantineProvider theme={theme}>`.',
    iconUsage: 'Import icons from @tabler/icons-react (e.g. IconSettings, IconTrash, IconCheck).',
    layoutConventions: 'Use Stack and Group with gap props (e.g. gap="md").'
  }
};
