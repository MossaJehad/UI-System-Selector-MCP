import { UISystem } from '../../schemas/uiSystem.js';

export const flowbiteReact: UISystem = {
  id: 'flowbite-react',
  name: 'Flowbite React',
  organization: 'Themesberg / Flowbite',
  description: 'An open-source UI component library built for React and Next.js using Tailwind CSS utility classes, providing dozens of accessible interactive components (Navbar, Modal, Dropdown, Table, Sidebar, Carousel, Datepicker) with built-in dark mode and Figma tokens.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['flowbite-react', 'flowbite'],
  docsUrl: 'https://flowbite-react.com',
  repositoryUrl: 'https://github.com/themesberg/flowbite-react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with accessible keyboard traps and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme configuration and Flowbite plugin tokens',
    packageName: 'flowbite-react'
  },
  icons: {
    available: true,
    name: 'Flowbite Icons / React Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern Tailwind CSS SaaS aesthetic: clean rounded borders, primary blue/indigo action buttons, dark mode support, and interactive dashboard sidebars.',
  noveltyLevel: 'established',
  bestFor: [
    'React and Next.js projects built on Tailwind CSS wanting pre-built components instead of copy-pasting',
    'SaaS dashboards and landing pages needing fast development velocity with Tailwind classes',
    'Teams wanting customized themes via Tailwind CSS configuration'
  ],
  avoidFor: [
    'Projects not using Tailwind CSS'
  ],
  strengths: [
    'Seamless integration with standard Tailwind CSS configurations and Next.js App Router',
    'Rich interactive components with zero manual state wiring needed (Modal, Dropdown, Sidebar, Tooltip)',
    'First-class dark mode with `DarkThemeToggle` and Tailwind `dark:` variants'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS'
  ],
  tags: [
    'flowbite',
    'flowbite-react',
    'tailwind',
    'react',
    'next',
    'dark-mode',
    'established'
  ],
  aliases: ['Flowbite React', 'Flowbite UI React', 'Flowbite'],
  relatedSystems: ['daisyui', 'shadcn-ui', 'heroui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install flowbite-react flowbite',
      packages: ['flowbite-react', 'flowbite'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Add `flowbite.plugin()` to `tailwind.config.js` and wrap app in `<Flowbite>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Flowbite React action button with color="blue" | "gray" | "dark" | "light" | "success" | "failure" | "warning" | "purple".',
      importExample: "import { Button } from 'flowbite-react';\n\n<Button color=\"blue\">Click me</Button>",
      docSubUrl: 'docs/components/button'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Flowbite accessible modal dialog.',
      importExample: "import { Modal, Button } from 'flowbite-react';\n\n<Modal show={openModal} onClose={() => setOpenModal(false)}><Modal.Header>Terms of Service</Modal.Header><Modal.Body>Content</Modal.Body></Modal>",
      docSubUrl: 'docs/components/modal'
    }
  },
  aiInstructions: {
    principles: [
      'Configure `flowbite.plugin()` in `tailwind.config.js`.',
      'Use Flowbite React components for interactive UI elements.',
      'Use `DarkThemeToggle` or Tailwind `dark:` classes for dark theme styling.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure custom themes in `createTheme()` or Tailwind theme extension.',
    iconUsage: 'Use `react-icons` or Flowbite SVG icons.',
    layoutConventions: 'Use standard Tailwind CSS flex and grid utility classes.'
  }
};
