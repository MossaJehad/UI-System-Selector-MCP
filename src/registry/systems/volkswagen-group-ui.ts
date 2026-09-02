import { UISystem } from '../../schemas/uiSystem.js';

export const volkswagenGroupUi: UISystem = {
  id: 'volkswagen-group-ui',
  name: 'Volkswagen Group UI',
  organization: 'Volkswagen AG',
  description: 'Volkswagen Group’s official enterprise design system and Web Component library, engineered for connected car portals, dealer management systems, EV charging dashboards, and automotive consumer portals.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'consumer'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@volkswagen/group-ui', '@volkswagen/group-ui-react'],
  docsUrl: "https://github.com/volkswagen/group-ui",
  repositoryUrl: 'https://github.com/volkswagen/group-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Volkswagen digital vehicle and customer platforms.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@volkswagen/group-ui'
  },
  icons: {
    available: true,
    packageName: '@volkswagen/group-ui',
    name: 'Volkswagen Group Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern German automotive aesthetic: VW Blue accents, rounded card geometry, electric vehicle charging telemetry, and clean dashboard typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Automotive digital experiences, EV charging networks, and connected car portals',
    'Dealer management systems and customer vehicle configurators',
    'Multi-framework applications sharing Web Components'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Official design system of Volkswagen AG with Web Components and React wrappers',
    'Designed for both in-vehicle infotainment companion apps and desktop enterprise tools',
    'Full dark mode and high-contrast color token mapping'
  ],
  weaknesses: [
    'Automotive domain focus'
  ],
  tags: [
    'volkswagen',
    'vw',
    'automotive',
    'ev',
    'web-components',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ["Volkswagen Group UI", "VW Group UI", "GroupUI", "Volkswagen Design System"],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @volkswagen/group-ui',
      packages: ['@volkswagen/group-ui'],
      setupInstructions: 'Import custom elements and root CSS stylesheet.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<vw-button>',
      description: 'Volkswagen action button with variant="primary" | "secondary".',
      importExample: '<vw-button variant="primary">Start EV Charge</vw-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<vw-*>` custom elements.',
      'Apply Volkswagen brand tokens for electric mobility and vehicle interfaces.',
      'Use official Volkswagen icon assets.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use `<vw-icon name="charge"></vw-icon>`.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
