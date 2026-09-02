import { UISystem } from '../../schemas/uiSystem.js';

export const lightning: UISystem = {
  id: 'lightning',
  name: 'Salesforce Lightning Design System (SLDS)',
  organization: 'Salesforce',
  description: 'Salesforce’s foundational design system for building enterprise CRM, business workflows, customer service consoles, and Salesforce Lightning Platform applications.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'saas', 'data-heavy'],
  frameworks: ['react', 'web-components', 'css-only', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@salesforce-ux/design-system', '@salesforce/design-system-react'],
  docsUrl: 'https://www.lightningdesignsystem.com',
  repositoryUrl: 'https://github.com/salesforce-ux/design-system',
  license: 'BSD-3-Clause',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets Salesforce enterprise accessibility standards.'
  },
  darkMode: false,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS, Sass, Aura, and JSON (Theo)',
    packageName: '@salesforce-ux/design-system'
  },
  icons: {
    available: true,
    packageName: '@salesforce-ux/design-system',
    name: 'SLDS Icons (Action, Custom, Doctype, Standard, Utility)'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Salesforce Lightning style: Cloud blue accents, lead/contact record headers, compact data layouts, utility icons.',
  noveltyLevel: 'established',
  bestFor: [
    'Salesforce AppExchange apps and integrations',
    'Enterprise CRM, sales pipeline, and customer support desks',
    'Complex record detail pages with activity timelines and path progress bars'
  ],
  avoidFor: [
    'Consumer mobile games',
    'Minimal personal blogs'
  ],
  strengths: [
    'Specialized CRM components: Record Header, Activity Timeline, Path, Global Header',
    'Massive library of categorized enterprise SVG icons',
    'Available in CSS-only classes or React components'
  ],
  weaknesses: [
    'Heavy enterprise styling',
    'React package maintenance is community-driven compared to pure SLDS CSS'
  ],
  tags: [
    'salesforce',
    'crm',
    'enterprise',
    'slds',
    'saas',
    'dense',
    'rtl'
  ],
  installation: {
    generic: {
      command: 'npm install @salesforce-ux/design-system',
      packages: ['@salesforce-ux/design-system'],
      setupInstructions: 'Include `@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'slds-button',
      description: 'SLDS button class (.slds-button .slds-button_brand, etc.).',
      importExample: '<button class="slds-button slds-button_brand">Save Opportunity</button>',
      docSubUrl: 'components/buttons'
    },
    card: {
      canonicalName: 'slds-card',
      description: 'Record card container with header, body, and footer.',
      importExample: '<article class="slds-card"><div class="slds-card__header">Contact Info</div><div class="slds-card__body slds-card__body_inner">Details</div></article>',
      docSubUrl: 'components/cards'
    }
  },
  aiInstructions: {
    principles: [
      'Include SLDS CSS and apply standard `slds-*` BEM class names.',
      'Use SLDS grid system (`slds-grid`, `slds-col`, `slds-size_*`).',
      'Use SLDS SVG icon sprites for iconography.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', 'tailwind raw classes for standard SLDS components'],
    themingGuide: 'Use SLDS Theo design tokens and CSS custom properties.',
    iconUsage: 'Use SVG with `<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings" />`.',
    layoutConventions: 'Structure layouts using slds-grid and slds-card.'
  }
};
