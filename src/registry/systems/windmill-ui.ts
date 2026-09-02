import { UISystem } from '../../schemas/uiSystem.js';

export const windmillUi: UISystem = {
  id: 'windmill-ui',
  name: 'Windmill UI (Windmill React)',
  organization: 'Estevan Maito / Windmill Community',
  description: 'An open-source, accessible React component library built with Tailwind CSS, engineered for dashboard applications with keyboard navigation, dark mode, sidebar drawers, cards, and modal dialogs.',
  category: 'component-library',
  secondaryCategories: ['dashboard', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'tailwind',
  packageNames: ['@windmill/react-ui'],
  docsUrl: 'https://windmillui.com/react-ui',
  repositoryUrl: 'https://github.com/estevanmaito/windmill-react-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered specifically for keyboard navigation and screen reader accessible dashboard administration.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Windmill Tailwind theme configuration',
    packageName: '@windmill/react-ui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern accessible dashboard style: Windmill Purple accents, dark-mode first card layouts, accessible sidebar drawer navigation, and clean metric cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'React admin dashboards and back-office portals built on Tailwind CSS',
    'Developers prioritizing keyboard accessibility and dark mode in React dashboard apps',
    'Fast MVP dashboard development'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Built specifically for accessible dashboard architectures in React',
    'First-class dark theme toggle with `Windmill` theme provider',
    'Clean, readable Tailwind CSS styling with zero runtime CSS-in-JS'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'windmill-ui',
    'windmill',
    'dashboard',
    'admin',
    'tailwind',
    'react',
    'accessibility',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Windmill UI', 'Windmill React', 'Windmill'],
  relatedSystems: ['flowbite-react', 'tremor', 'shadcn-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @windmill/react-ui',
      packages: ['@windmill/react-ui'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Wrap your application in `<Windmill usePreferences>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Windmill action button with size="small" | "regular" | "larger", layout="outline" | "link".',
      importExample: "import { Button } from '@windmill/react-ui';\n\n<Button>Dashboard Action</Button>",
      docSubUrl: 'button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Windmill usePreferences>`.',
      'Use Windmill Card, Table, Modal, and Dropdown components for dashboard interfaces.',
      'Use Windmill theme extension in `tailwind.config.js`.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `windmill()` theme wrapper in `tailwind.config.js`.',
    iconUsage: 'Use `react-feather` or `lucide-react`.',
    layoutConventions: 'Use standard Tailwind CSS flex and grid.'
  }
};
