import { UISystem } from '../../schemas/uiSystem.js';

export const wixStyleReact: UISystem = {
  id: 'wix-style-react',
  name: 'Wix Style React (WS-R)',
  organization: 'Wix',
  description: 'Wix’s official open-source React component library and design system, powering Wix Studio, site management dashboards, e-commerce store managers, booking calendars, and business marketing suites.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'creative-tool', 'ecommerce'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['wix-style-react', 'wix-ui-icons-common'],
  docsUrl: "https://github.com/wix/wix-style-react",
  repositoryUrl: 'https://github.com/wix/wix-style-react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for WCAG 2.1 AA across Wix Studio business dashboards.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS modules and JavaScript constants',
    packageName: 'wix-style-react'
  },
  icons: {
    available: true,
    packageName: 'wix-ui-icons-common',
    name: 'Wix UI Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Creative business management aesthetic: Wix Blue (#3899ec), clean site analytics cards, booking calendars, and rich media asset pickers.',
  noveltyLevel: 'established',
  bestFor: [
    'Website builder extensions, CMS management consoles, and marketing hubs',
    'Appointment booking, event schedules, and e-commerce product catalogs',
    'SaaS applications needing rich drag-and-drop table and media picker components'
  ],
  avoidFor: [
    'Ultra-minimalist CLI tools'
  ],
  strengths: [
    'Over 100+ production-grade React components covering every aspect of web business management',
    'Exceptional Page, Layout, Card, Table, and MediaUI components',
    'Native RTL and multilingual localization support'
  ],
  weaknesses: [
    'React only',
    'Large package size'
  ],
  tags: [
    'wix',
    'wix-style-react',
    'website-builder',
    'cms',
    'ecommerce',
    'saas',
    'rtl',
    'established'
  ],
  aliases: ["WSR", "Wix Design System", "Wix UI React"],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install wix-style-react wix-ui-icons-common',
      packages: ['wix-style-react', 'wix-ui-icons-common'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Wix Style action button with priority="primary" | "secondary" | "destructive".',
      importExample: "import { Button } from 'wix-style-react';\n\n<Button priority=\"primary\">Publish Site</Button>",
      docSubUrl: '?selectedKind=Components/Button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `wix-style-react` components for dashboard page layouts.',
      'Use Page, Page.Header, and Page.Content for standardized dashboard page anatomy.',
      'Provide rich feedback with Notification and Toast components.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Wix Style theme provider.',
    iconUsage: 'Import icons from wix-ui-icons-common.',
    layoutConventions: 'Use Layout, Cell, and Card components for grid structures.'
  }
};
