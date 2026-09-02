import { UISystem } from '../../schemas/uiSystem.js';

export const cleverComponents: UISystem = {
  id: 'clever-components',
  name: 'Clever Cloud Web Components (clever-components)',
  organization: 'Clever Cloud',
  description: 'Clever Cloud’s official open-source design system and Lit-based Web Component library, engineered for cloud hosting consoles, database clusters, deployment pipelines, server metrics, and developer administration consoles.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'web-components', 'data-heavy', 'dashboard'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@clevercloud/components'],
  docsUrl: 'https://components.clever-cloud.com',
  repositoryUrl: 'https://github.com/CleverCloud/clever-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across European cloud hosting dashboards and developer metrics consoles.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@clevercloud/components'
  },
  icons: {
    available: true,
    packageName: '@clevercloud/components',
    name: 'Clever Cloud Dev & Server Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Cloud infrastructure developer aesthetic: Clever Cloud Deep Blue / Mint Green accents, deployment log streams, server CPU/memory sparklines, environment variable tables, and server cluster node cards.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Cloud hosting platforms, PaaS/IaaS management consoles, and DevOps telemetry dashboards',
    'Server infrastructure monitors, database admin panels, and deployment logs',
    'Multi-framework enterprise teams sharing standard W3C Web Components'
  ],
  avoidFor: [
    'Consumer fashion or e-commerce storefronts'
  ],
  strengths: [
    'Official design system of European PaaS leader Clever Cloud',
    'Built with Lit for high performance, standard W3C Web Components, and tiny bundle footprint',
    'Specialized cloud infrastructure components: LogsViewer, MetricsChart, EnvVarTable, ClusterNodeCard'
  ],
  weaknesses: [
    'Cloud infrastructure domain focus'
  ],
  tags: [
    'clever-cloud',
    'clever-components',
    'cloud',
    'devops',
    'lit',
    'web-components',
    'infrastructure',
    'hidden-gem'
  ],
  aliases: ["Clever Cloud Components", "clever-components", "Clever UI", "Clever Cloud Design System", "Clever Cloud UI"],
  relatedSystems: ['siemens-ix', 'carbon', 'primer'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @clevercloud/components',
      packages: ['@clevercloud/components'],
      setupInstructions: 'Import custom elements directly from `@clevercloud/components`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<cc-button>',
      description: 'Clever Cloud action button with primary | success | danger | outlined modes.',
      importExample: '<cc-button primary>Deploy Application</cc-button>',
      docSubUrl: '?path=/docs/atoms-cc-button--default-story'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<cc-*>` custom elements.',
      'Apply Clever Cloud design tokens for server metric and status displays.',
      'Use `<cc-logs>` for real-time build and deployment log streaming.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use `<cc-icon icon="server"></cc-icon>`.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
