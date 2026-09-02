import { UISystem } from '../../schemas/uiSystem.js';

export const rewindUi: UISystem = {
  id: 'rewind-ui',
  name: 'Rewind UI',
  organization: 'Rewind UI Community',
  description: 'An open-source React component library based on Tailwind CSS, engineered for fast creation of modern web applications, SaaS dashboards, and administrative portals with clean compound components and dark theme support.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['@rewind-ui/core'],
  docsUrl: 'https://rewind-ui.dev',
  repositoryUrl: 'https://github.com/rewindui/rewindui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard traps and ARIA attributes across interactive components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin configuration and theme variables',
    packageName: '@rewind-ui/core'
  },
  icons: {
    available: true,
    name: 'Tabler Icons / Feather Icons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern React + Tailwind SaaS aesthetic: clean rounded buttons, high-contrast dark theme, animated accordion cards, and interactive sidebar navigation.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React and Next.js SaaS applications built on Tailwind CSS wanting pre-built components',
    'Developers wanting compound component patterns with Tailwind CSS flexibility',
    'Fast administrative dashboard prototyping'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Rich pre-styled components built on Tailwind CSS (Button, Card, Accordion, Modal, Table, Sidebar, Toast)',
    'Full dark mode support with Tailwind dark: variants',
    'Clean compound component architecture'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'rewind-ui',
    'tailwind',
    'react',
    'next',
    'saas',
    'dashboard',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Rewind UI', 'RewindUI', 'Rewind'],
  relatedSystems: ['flowbite-react', 'wedges', 'shadcn-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @rewind-ui/core',
      packages: ['@rewind-ui/core'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Add `@rewind-ui/core/plugin` to `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Rewind UI button with color="blue" | "gray" | "red" | "green".',
      importExample: "import { Button } from '@rewind-ui/core';\n\n<Button color=\"blue\">Save</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Configure `@rewind-ui/core/plugin` in `tailwind.config.js`.',
      'Use Rewind UI compound components for dashboard layouts.',
      'Use Tailwind classes for custom styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Use `@tabler/icons-react` or `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
