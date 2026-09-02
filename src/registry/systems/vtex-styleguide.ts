import { UISystem } from '../../schemas/uiSystem.js';

export const vtexStyleguide: UISystem = {
  id: 'vtex-styleguide',
  name: 'VTEX Styleguide',
  organization: 'VTEX',
  description: 'VTEX’s official open-source design system and React component library powering the VTEX enterprise e-commerce platform, omni-channel order management system (OMS), and merchant store administrative consoles.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'enterprise', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['vtex-styleguide'],
  docsUrl: 'https://styleguide.vtex.com',
  repositoryUrl: 'https://github.com/vtex/styleguide',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across VTEX merchant administrative consoles.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and tachyons utility classes',
    packageName: 'vtex-styleguide'
  },
  icons: {
    available: true,
    packageName: 'vtex-styleguide',
    name: 'VTEX System Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Enterprise e-commerce admin style: VTEX Pink (#f71963), clean catalog management grids, order fulfillment badges, and promotion builder cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'VTEX IO app store extensions and custom admin plugins',
    'B2B / B2C e-commerce order management, inventory matrices, and checkout administration',
    'Merchant back-office dashboards and shipping logistics tools'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'The standard design system for VTEX IO enterprise e-commerce applications',
    'Specialized retail admin components (OrderTimeline, ProductSummary, Table, FilterBar)',
    'High reliability across enterprise merchant operations'
  ],
  weaknesses: [
    'React only',
    'VTEX ecosystem focus'
  ],
  tags: [
    'vtex',
    'ecommerce',
    'oms',
    'retail',
    'order-management',
    'saas',
    'hidden-gem'
  ],
  aliases: ['VTEX Styleguide', 'VTEX Design System', 'VTEX UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install vtex-styleguide',
      packages: ['vtex-styleguide'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'VTEX action button with variation="primary" | "secondary" | "danger".',
      importExample: "import { Button } from 'vtex-styleguide';\n\n<Button variation=\"primary\">Fulfill Order</Button>",
      docSubUrl: '#!/Button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `vtex-styleguide` React components.',
      'Use PageHeader, PageBlock, and Layout for merchant console views.',
      'Apply VTEX brand colors and status indicators for order states.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use VTEX theme tokens.',
    iconUsage: 'Import icons from vtex-styleguide/lib/icon.',
    layoutConventions: 'Use Layout, PageHeader, and PageBlock components.'
  }
};
