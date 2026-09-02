import { UISystem } from '../../schemas/uiSystem.js';

export const materialTailwind: UISystem = {
  id: 'material-tailwind',
  name: 'Material Tailwind',
  organization: 'Creative Tim',
  description: 'An open-source React and HTML component library based on Tailwind CSS and Google’s Material Design, providing pre-styled components with ripple animations, floating gradients, dark mode, and Tailwind utility customization.',
  category: 'component-library',
  secondaryCategories: ['saas', 'consumer', 'dashboard'],
  frameworks: ['react', 'html-css'],
  stylingApproach: 'tailwind',
  packageNames: ['@material-tailwind/react'],
  docsUrl: 'https://www.material-tailwind.com',
  repositoryUrl: 'https://github.com/creativetimofficial/material-tailwind',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation across Tailwind Material components.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind configuration with Material Tailwind theme wrapper',
    packageName: '@material-tailwind/react'
  },
  icons: {
    available: true,
    name: 'Heroicons / Material Icons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Vibrant Material + Tailwind style: rich colorful gradient cards, ripple button clicks, floating shadow elevations, and modern dashboard metrics.',
  noveltyLevel: 'established',
  bestFor: [
    'React apps wanting Google Material Design visual styling implemented cleanly via Tailwind CSS',
    'Marketing landing pages and colorful creative dashboards',
    'Fast MVP development using pre-styled Tailwind components with ripple effects'
  ],
  avoidFor: [
    'Ultra-minimalist monochrome terminal tools'
  ],
  strengths: [
    'Combines the beauty of Google Material Design with the flexibility of Tailwind CSS',
    'Built-in ripple effects and smooth Tailwind transition animations',
    'Rich pre-styled components (Card, Button, Dialog, Navbar, Timeline, Rating)'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS'
  ],
  tags: [
    'material-tailwind',
    'tailwind',
    'material-design',
    'react',
    'creative-tim',
    'dark-mode',
    'established'
  ],
  aliases: ['Material Tailwind', 'MT React', 'Material-Tailwind'],
  relatedSystems: ['mui', 'flowbite-react'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @material-tailwind/react',
      packages: ['@material-tailwind/react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Wrap your Tailwind config in `withMT()` and wrap your app in `<ThemeProvider>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Material Tailwind button with variant="filled" | "gradient" | "outlined" | "text".',
      importExample: "import { Button } from '@material-tailwind/react';\n\n<Button variant=\"gradient\" color=\"blue\">Explore</Button>",
      docSubUrl: 'docs/react/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap Tailwind config in `withMT()`.',
      'Wrap root in `<ThemeProvider>` from `@material-tailwind/react`.',
      'Use Material Tailwind `variant="gradient"` for high-impact CTA buttons.'
    ],
    forbiddenSubstitutions: ['bootstrap'],
    themingGuide: 'Configure theme overrides in ThemeProvider.',
    iconUsage: 'Use `@heroicons/react` or Material Icons.',
    layoutConventions: 'Use Tailwind CSS layout grids.'
  }
};
