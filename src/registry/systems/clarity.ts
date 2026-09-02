import { UISystem } from '../../schemas/uiSystem.js';

export const clarity: UISystem = {
  id: 'clarity',
  name: 'Clarity Design System',
  organization: 'VMware (Broadcom)',
  description: 'VMware’s battle-tested open-source design system and Web Component / Angular component library, engineered for virtual machine infrastructure, hypervisors, cloud storage arrays, and enterprise data management.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard', 'web-components'],
  frameworks: ['web-components', 'angular', 'react', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@cds/core', '@clr/angular', '@clr/ui', '@cds/city'],
  docsUrl: 'https://clarity.design',
  repositoryUrl: 'https://github.com/vmware-clarity/core',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorous Section 508 and WCAG 2.1 AA compliance developed across vSphere and VMware Cloud.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables (@cds/city)',
    packageName: '@cds/core'
  },
  icons: {
    available: true,
    packageName: '@cds/core',
    name: 'Clarity Core Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Enterprise virtualization look: VMware Blue (#0072a3), clean server health badges (green/amber/red status), structured tree grids, and wizard provisioning steps.',
  noveltyLevel: 'established',
  bestFor: [
    'Virtualization consoles, server monitoring, and IT infrastructure tools',
    'Angular and Web Component enterprise software',
    'Complex data grid explorers with hierarchical tree views and bulk actions'
  ],
  avoidFor: [
    'Consumer mobile shopping apps'
  ],
  strengths: [
    'The premier design system for Angular enterprise developers (`@clr/angular`)',
    'Clarity Core (`@cds/core`) Web Components work in any framework (React, Vue, Svelte)',
    'Exceptional Datagrid, Wizard, and TreeView implementations'
  ],
  weaknesses: [
    'Distinctive VMware enterprise look'
  ],
  tags: [
    'vmware',
    'clarity',
    'angular',
    'web-components',
    'enterprise',
    'virtualization',
    'dense',
    'dark-mode'
  ],
  aliases: ["Clarity", "VMware Clarity", "Clarity Core", "Clarity Angular"],
  systemTypes: ['company-design-system', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @cds/core',
      packages: ['@cds/core'],
      setupInstructions: 'Import `@cds/core/global.min.css` and `@cds/city/css/bundles/default.min.css`.'
    },
    angular: {
      command: 'npm install @clr/angular @clr/ui',
      packages: ['@clr/angular', '@clr/ui'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<cds-button>',
      description: 'Clarity Core button with action="solid" | "outline" | "flat".',
      importExample: '<cds-button action="solid" status="primary">Deploy Virtual Machine</cds-button>',
      docSubUrl: 'components/button/'
    },
    badge: {
      canonicalName: '<cds-badge>',
      description: 'Status badge indicating server state.',
      importExample: '<cds-badge status="success">Running</cds-badge>',
      docSubUrl: 'components/badge/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<cds-*>` custom elements in multi-framework projects, or Clarity Angular directives in Angular apps.',
      'Use Clarity Datagrid for dense enterprise data.',
      'Use `@cds/core/icon` for Clarity iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Toggle dark mode via `cds-theme="dark"` on `<body>`.',
    iconUsage: 'Use Clarity icons (e.g. `<cds-icon shape="vm"></cds-icon>`).',
    layoutConventions: 'Use standard Clarity Core layout grid or Clarity main container layout.'
  }
};
