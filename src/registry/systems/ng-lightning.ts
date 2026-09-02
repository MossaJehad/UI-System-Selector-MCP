import { UISystem } from '../../schemas/uiSystem.js';

export const ngLightning: UISystem = {
  id: 'ng-lightning',
  name: 'NG-Lightning (Salesforce Lightning Design System for Angular)',
  organization: 'NG-Lightning Team (Torre Labs)',
  description: 'An open-source Angular component library implementing the Salesforce Lightning Design System (SLDS), providing pure Angular directives and components with zero dependencies on external JavaScript libraries.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['ng-lightning', '@salesforce-ux/design-system'],
  docsUrl: 'https://ng-lightning.github.io/ng-lightning',
  repositoryUrl: 'https://github.com/ng-lightning/ng-lightning',
  license: 'BSD-2-Clause',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Salesforce Lightning accessibility specifications in Angular.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Salesforce Lightning Design System tokens via `@salesforce-ux/design-system`',
    packageName: '@salesforce-ux/design-system'
  },
  icons: {
    available: true,
    name: 'Salesforce SLDS SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Salesforce enterprise CRM aesthetic: Salesforce Blue (#0176d3), modal record editors, stage path chevrons, toast notifications, and compact record details in Angular.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Angular applications integrated with Salesforce, CRM portals, and enterprise workflow apps',
    'Developers wanting Salesforce Lightning Design System (SLDS) styling with native Angular directives',
    'Enterprise SaaS applications'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'Pure native Angular implementation of Salesforce Lightning Design System',
    'Zero jQuery or external JS dependencies',
    'Complete support for SLDS components (Buttons, Modals, Badges, Tabs, Picklists, Ratings)'
  ],
  weaknesses: [
    'Salesforce SLDS visual identity'
  ],
  tags: [
    'ng-lightning',
    'salesforce',
    'slds',
    'angular',
    'crm',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['NG-Lightning', 'NGLightning', 'Angular Lightning', 'SLDS Angular'],
  relatedSystems: ['lightning', 'lightning-web-components', 'clarity'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    angular: {
      command: 'npm install ng-lightning @salesforce-ux/design-system',
      packages: ['ng-lightning', '@salesforce-ux/design-system'],
      peerDependencies: ['@angular/core', '@angular/common'],
      setupInstructions: 'Import `@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css` in `styles.scss` and import `NglModule`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<button nglButton>',
      description: 'Salesforce Lightning button directive with variant="brand" | "neutral" | "destructive".',
      importExample: '<button type="button" nglButton="brand">Save Record</button>',
      docSubUrl: '#/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Import `NglModule` or individual `Ngl*Module` into Angular standalone components.',
      'Import SLDS stylesheet.',
      'Use `nglButton`, `ngl-modal`, `ngl-picklist` directives for Salesforce styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with SLDS Design Tokens.',
    iconUsage: 'Use `<ngl-icon iconName="standard:account"></ngl-icon>`.',
    layoutConventions: 'Use SLDS grid classes.'
  }
};
