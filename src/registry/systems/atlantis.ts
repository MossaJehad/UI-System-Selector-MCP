import { UISystem } from '../../schemas/uiSystem.js';

export const atlantis: UISystem = {
  id: 'atlantis',
  name: 'Jobber Atlantis',
  organization: 'Jobber',
  description: 'Jobber’s official open-source design system and React component suite, built for home service business operations, dispatch scheduling, quote estimates, field technician mobile apps, and job invoicing.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'mobile-inspired', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@jobber/components', '@jobber/design', '@jobber/docx'],
  docsUrl: 'https://atlantis.getjobber.com',
  repositoryUrl: 'https://github.com/Jobber/atlantis',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed to satisfy WCAG 2.1 AA across desktop and mobile web dispatch workflows.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and TypeScript constants',
    packageName: '@jobber/design'
  },
  icons: {
    available: true,
    packageName: '@jobber/components',
    name: 'Atlantis System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Practical, reliable trade & home service style: Jobber Green (#7db00e), clean job card dispatch lists, estimate quote tables, and mobile-friendly tap targets.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Field service management, plumbing/electrical dispatch, and contractor invoicing',
    'Small business estimate calculators and client scheduling hubs',
    'Mobile-first React web workflows with large touch targets'
  ],
  avoidFor: [
    'Dark-mode developer terminals'
  ],
  strengths: [
    'Specialized field service and job dispatch components (FormatFile, DataDump, ConfirmationModal, StatusTag)',
    'Mobile-first responsive design tailored for tablets and phones on job sites',
    'Comprehensive React component suite with TypeScript definitions'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'jobber',
    'atlantis',
    'field-service',
    'invoicing',
    'scheduling',
    'mobile-first',
    'saas',
    'hidden-gem'
  ],
  aliases: ['Atlantis', 'Jobber Design System', 'Atlantis UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @jobber/components @jobber/design',
      packages: ['@jobber/components', '@jobber/design'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@jobber/design/dist/index.css` at your application root.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Atlantis action button with type="primary" | "secondary" | "destructive".',
      importExample: "import { Button } from '@jobber/components/Button';\n\n<Button label=\"Send Quote\" />",
      docSubUrl: 'components/Button'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@jobber/design/dist/index.css`.',
      'Use Atlantis Card, StatusTag, and FormatDate components for trade job management.',
      'Ensure large, touch-friendly tap targets for mobile on-site usability.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Atlantis design tokens for colors and typography.',
    iconUsage: 'Use Icon components from @jobber/components/Icon.',
    layoutConventions: 'Use Content and Flex primitives with Atlantis spacing tokens.'
  }
};
