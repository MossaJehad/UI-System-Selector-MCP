import { UISystem } from '../../schemas/uiSystem.js';

export const helixUi: UISystem = {
  id: 'helix-ui',
  name: 'Helix UI (Rackspace Design System)',
  organization: 'Rackspace Technology',
  description: 'Rackspace’s official open-source design system and Web Component library, engineered for multi-cloud infrastructure consoles, server management, load balancer telemetry, and hybrid cloud provisioning.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'web-components', 'enterprise', 'data-heavy'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'angular'],
  stylingApproach: 'shadow-dom',
  packageNames: ['helix-ui'],
  docsUrl: 'https://helix-ui.github.io/helix-ui',
  repositoryUrl: 'https://github.com/helix-ui/helix-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across Rackspace multi-cloud management consoles.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties via `helix-ui/dist/styles`',
    packageName: 'helix-ui'
  },
  icons: {
    available: true,
    name: 'Helix Cloud & Server Icons'
  },
  maturity: 'deprecated',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Cloud infrastructure aesthetic: Rackspace Red (#c40000) / Charcoal (#333333), server status indicators, load balancer configuration drawers, and data-dense metrics tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Cloud hosting dashboards, server telemetry monitors, and DevOps infrastructure portals',
    'Developers studying early enterprise Web Component design system architectures',
    'Multi-cloud management interfaces'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'One of the pioneering enterprise cloud Web Component design systems in the industry',
    'Specialized server status, telemetry gauge, and infrastructure drawer components',
    'Framework agnostic: runs in plain HTML, AngularJS, modern Angular, and React'
  ],
  weaknesses: [
    'Archived; maintenance superseded by modern cloud toolkits'
  ],
  tags: [
    'helix-ui',
    'rackspace',
    'cloud',
    'infrastructure',
    'web-components',
    'devops',
    'archived',
    'hidden-gem'
  ],
  aliases: ['Helix UI', 'Helix', 'Rackspace Helix', 'Helix Design System'],
  relatedSystems: ['clever-components', 'siemens-ix', 'carbon'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'archived',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install helix-ui',
      packages: ['helix-ui'],
      setupInstructions: 'Import `helix-ui/dist/styles/helix-ui.css` and register custom elements.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<hx-button>',
      description: 'Helix cloud action button with variant="primary" | "secondary".',
      importExample: '<hx-button variant="primary">Provision Server</hx-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<hx-*>` custom elements for cloud management consoles.',
      'Apply Rackspace cloud tokens for server statuses (Online Green, Warning Yellow, Error Red).',
      'Import `helix-ui.css` at root.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use `<hx-icon type="server"></hx-icon>`.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
