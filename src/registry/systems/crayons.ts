import { UISystem } from '../../schemas/uiSystem.js';

export const crayons: UISystem = {
  id: 'crayons',
  name: 'Freshworks Crayons',
  organization: 'Freshworks',
  description: 'Freshworks’s official open-source Web Component design system powering Freshdesk, Freshsales, and the Freshworks Developer Platform, built with Stencil and W3C Web Components for customer support, CRM lead pipelines, and marketplace apps.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'web-components', 'developer-tool'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@freshworks/crayons', '@freshworks/crayons-react', '@freshworks/crayons-icon'],
  docsUrl: 'https://crayons.freshworks.com',
  repositoryUrl: 'https://github.com/freshworks/crayons',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Freshdesk customer ticketing and developer marketplace apps.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@freshworks/crayons'
  },
  icons: {
    available: true,
    packageName: '@freshworks/crayons-icon',
    name: 'Crayons Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern customer engagement style: Freshworks Blue (#2c5cc5), clean ticket status tags (open, pending, resolved), conversational message cards, and CRM deal funnel chips.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Freshworks Marketplace Apps, custom Freshdesk integrations, and CRM widgets',
    'Customer service helpdesks, live chat consoles, and IT service desk portals',
    'Multi-framework Web Component SaaS applications'
  ],
  avoidFor: [
    'Consumer mobile gaming'
  ],
  strengths: [
    'The official standard for Freshworks Developer Platform and Freshdesk apps',
    'Stencil-based standards-compliant Web Components with official React wrappers',
    'Rich customer support components (Dropdown, Modal, Popover, Datepicker, Tag, Toast)'
  ],
  weaknesses: [
    'Customer service SaaS domain specialization'
  ],
  tags: [
    'freshworks',
    'crayons',
    'freshdesk',
    'customer-support',
    'crm',
    'web-components',
    'stencil',
    'saas',
    'hidden-gem'
  ],
  aliases: ['Crayons', 'Freshworks Design System', 'Crayons UI'],
  systemTypes: ['company-design-system', 'web-components', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @freshworks/crayons',
      packages: ['@freshworks/crayons'],
      setupInstructions: 'Import `@freshworks/crayons/dist/crayons/crayons.css` and register custom elements.'
    },
    react: {
      command: 'npm install @freshworks/crayons-react @freshworks/crayons',
      packages: ['@freshworks/crayons-react', '@freshworks/crayons'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<fw-button>',
      description: 'Crayons action button with color="primary" | "secondary" | "danger".',
      importExample: '<fw-button color="primary">Assign Ticket</fw-button>',
      docSubUrl: 'components/button/'
    },
    tag: {
      canonicalName: '<fw-tag>',
      description: 'Customer ticket priority and status tag.',
      importExample: '<fw-tag text="High Priority" variant="danger"></fw-tag>',
      docSubUrl: 'components/tag/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<fw-*>` custom elements in HTML templates or `@freshworks/crayons-react` components.',
      'Apply Freshworks color tokens and status tags for ticket management.',
      'Use Crayons Toast and Modal for user interaction feedback.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Crayons CSS variables (--fw-color-primary, --fw-color-background).',
    iconUsage: 'Use `<fw-icon name="ticket"></fw-icon>`.',
    layoutConventions: 'Use standard Freshworks grid and page layout containers.'
  }
};
