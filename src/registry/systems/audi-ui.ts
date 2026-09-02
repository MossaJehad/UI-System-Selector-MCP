import { UISystem } from '../../schemas/uiSystem.js';

export const audiUi: UISystem = {
  id: 'audi-ui',
  name: 'Audi UI (Audi Design System)',
  organization: 'AUDI AG',
  description: 'Audi’s official enterprise design system and Web Component library, engineered for premium automotive configurators, connected car infotainment dashboards, EV charging portals, and dealer sales consoles.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'consumer'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@audi/audi-ui', '@audi/audi-ui-react'],
  docsUrl: 'https://www.audi.com/ci/en/renewed-brand/guidelines.html',
  repositoryUrl: 'https://github.com/audi',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Audi global vehicle configurators and digital services.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Audi Design Tokens in CSS custom properties (Audi Type typography, Progressive Red)',
    packageName: '@audi/audi-ui'
  },
  icons: {
    available: true,
    packageName: '@audi/audi-ui',
    name: 'Audi Rings & Automotive Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Premium German luxury automotive aesthetic: Audi Progressive Red (#f50537) / Titanium Black accents, Audi Type typography, minimalist edge-to-edge layouts, and car configurator panels.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Luxury automotive web experiences, vehicle trim configurators, and EV telemetry portals',
    'Dealer management systems and premium automotive digital apps',
    'Applications demanding a high-luxury, minimalist aesthetic'
  ],
  avoidFor: [
    'Retro pixel-art games'
  ],
  strengths: [
    'Official design system of luxury automotive manufacturer AUDI AG',
    'Pristine luxury brand typography (Audi Type) and minimalist component craftsmanship',
    'Full dark mode support for automotive cockpit and web displays'
  ],
  weaknesses: [
    'Automotive luxury brand identity'
  ],
  tags: [
    'audi',
    'automotive',
    'luxury',
    'ev',
    'web-components',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['Audi UI', 'Audi Design System', 'Audi CI', 'Audi Design'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @audi/audi-ui',
      packages: ['@audi/audi-ui'],
      setupInstructions: 'Import custom elements and root Audi stylesheet.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<audi-button>',
      description: 'Audi luxury action button with variant="primary" | "secondary".',
      importExample: '<audi-button variant="primary">Configure Audi e-tron</audi-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<audi-*>` custom elements.',
      'Apply Audi Progressive Red and Titanium dark mode tokens.',
      'Use Audi Type typography hierarchy.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties for Audi brand theme.',
    iconUsage: 'Use Audi system iconography.',
    layoutConventions: 'Use minimalist full-bleed luxury layouts.'
  }
};
