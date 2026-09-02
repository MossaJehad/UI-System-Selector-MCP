import { UISystem } from '../../schemas/uiSystem.js';

export const lightningWebComponents: UISystem = {
  id: 'lightning-web-components',
  name: 'Salesforce Lightning Web Components (LWC)',
  organization: 'Salesforce',
  description: 'Salesforce’s official open-source standards-based Web Component UI framework implementing the Salesforce Lightning Design System (SLDS), engineered for enterprise CRM workflows, record layouts, activity timelines, and data-dense enterprise applications.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'data-heavy', 'saas'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'shadow-dom',
  packageNames: ['lwc', '@salesforce-ux/design-system'],
  docsUrl: 'https://developer.salesforce.com/docs/platform/lwc/guide',
  repositoryUrl: 'https://github.com/salesforce/lwc',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Salesforce Lightning accessibility standards and WCAG 2.1 AA across global enterprise CRM deployments.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Salesforce Lightning Design Tokens in CSS custom properties and Theo YAML/JSON',
    packageName: '@salesforce-ux/design-system'
  },
  icons: {
    available: true,
    packageName: '@salesforce-ux/design-system',
    name: 'Salesforce SLDS Utility, Standard, and Custom Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Salesforce enterprise CRM aesthetic: Salesforce Blue (#0176d3) / Cloud Gray (#f3f3f3), record highlight panels, activity timelines, path stage bars, and modal data record edit drawers.',
  noveltyLevel: 'established',
  bestFor: [
    'Salesforce platform custom app development, Experience Cloud portals, and AppExchange packages',
    'Enterprise CRM workflows, lead management pipelines, and complex record detail layouts',
    'Open-source web projects wanting pure standards-based Web Components with Shadow DOM'
  ],
  avoidFor: [
    'Ultra-minimalist personal markdown blogs'
  ],
  strengths: [
    'Built from the ground up on modern W3C Web Component standards (Shadow DOM, Custom Elements, ECMAScript modules)',
    'Flawless integration with the massive Salesforce Lightning Design System (SLDS) ecosystem',
    'Can be run standalone outside the Salesforce platform via open-source `lwc` compiler'
  ],
  weaknesses: [
    'Salesforce CRM brand aesthetic and specialized LWC compiler'
  ],
  tags: [
    'lwc',
    'salesforce',
    'lightning',
    'crm',
    'enterprise',
    'web-components',
    'slds',
    'established'
  ],
  aliases: ['Lightning Web Components', 'LWC', 'Salesforce LWC', 'Lightning UI Components'],
  relatedSystems: ['lightning', 'ui5-webcomponents', 'carbon'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install lwc @salesforce-ux/design-system',
      packages: ['lwc', '@salesforce-ux/design-system'],
      setupInstructions: 'Import `@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css` in root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<lightning-button>',
      description: 'Salesforce LWC action button with variant="brand" | "neutral" | "destructive" | "success".',
      importExample: '<lightning-button variant="brand" label="Convert Lead" onclick={handleConvert}></lightning-button>',
      docSubUrl: 'component-library/bundle/lightning-button/documentation'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<lightning-*>` components or standard LWC custom element classes (`LightningElement`).',
      'Import SLDS stylesheet and apply SLDS utility classes (`slds-p-around_medium`, `slds-card`).',
      'Use Salesforce path stages and activity timelines for CRM flows.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with SLDS Design Tokens in CSS custom properties.',
    iconUsage: 'Use `<lightning-icon icon-name="utility:connected_apps" size="small"></lightning-icon>`.',
    layoutConventions: 'Use `<lightning-layout>` and `<lightning-layout-item>`.'
  }
};
