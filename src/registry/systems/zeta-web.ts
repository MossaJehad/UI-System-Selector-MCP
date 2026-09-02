import { UISystem } from '../../schemas/uiSystem.js';

export const zetaWeb: UISystem = {
  id: 'zeta-web',
  name: 'Zeta Design System (Zebra Technologies Web Components)',
  organization: 'Zebra Technologies',
  description: 'Zebra Technologies’ official open-source design system and Web Component library, engineered for enterprise barcode scanning handhelds, rugged warehouse logistics, RFID tracking portals, and supply chain telemetry.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'data-heavy', 'mobile'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'angular', 'vue'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@zebra-fed/zeta-web', '@zebra-fed/zeta-tokens'],
  docsUrl: 'https://design.zebra.com',
  repositoryUrl: 'https://github.com/ZebraDevs/zeta-web',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for high-stress rugged warehouse environments, gloved touchscreen inputs, and barcode scanning workflows.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Zeta design tokens in CSS custom properties and JSON',
    packageName: '@zebra-fed/zeta-tokens'
  },
  icons: {
    available: true,
    packageName: '@zebra-fed/zeta-icons',
    name: 'Zeta Barcode & Warehouse Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Rugged enterprise industrial aesthetic: Zebra Yellow (#f2a900) / Black accents, large touch targets for gloved fingers, barcode scan feedback sounds/beeps, and inventory audit tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Warehouse logistics, supply chain management, and barcode scanner mobile devices',
    'Rugged handheld enterprise touchscreens and RFID inventory tracking portals',
    'Multi-framework applications sharing custom Web Components'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Official design system of global enterprise logistics leader Zebra Technologies',
    'Designed specifically for rugged enterprise hardware, barcode scanners, and warehouse workflows',
    'Full dark mode, large touch targets, and high-contrast ambient readability'
  ],
  weaknesses: [
    'Industrial logistics and supply chain domain focus'
  ],
  tags: [
    'zeta',
    'zebra',
    'logistics',
    'warehouse',
    'barcode',
    'rfid',
    'web-components',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['Zeta Design System', 'Zeta Web', 'Zebra Zeta', 'Zebra Technologies UI'],
  relatedSystems: ['scania-teg', 'siemens-ix', 'carbon'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install @zebra-fed/zeta-web @zebra-fed/zeta-tokens',
      packages: ['@zebra-fed/zeta-web', '@zebra-fed/zeta-tokens'],
      setupInstructions: 'Import `@zebra-fed/zeta-web` custom elements and `@zebra-fed/zeta-tokens/dist/css/variables.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<zeta-button>',
      description: 'Zeta rugged action button with large touch target for warehouse workers.',
      importExample: '<zeta-button flavor="primary" size="large">Scan Pallet Barcode</zeta-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<zeta-*>` custom elements for logistics and warehouse interfaces.',
      'Apply Zebra Yellow and Black high-contrast color tokens for ambient warehouse readability.',
      'Ensure buttons and touch targets are large enough for rugged gloved usage.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Use Zebra barcode and warehouse icons.',
    layoutConventions: 'Use standard custom element composition.'
  }
};
