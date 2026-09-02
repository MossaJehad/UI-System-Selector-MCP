import { UISystem } from '../../schemas/uiSystem.js';

export const scaniaTeg: UISystem = {
  id: 'scania-teg',
  name: 'Scania Tegel Design System',
  organization: 'Scania Group',
  description: 'Scania’s official open-source design system and Web Component library for commercial vehicles, transport logistics, fleet telematics, and heavy automotive operations.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'data-heavy'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@scania/tegel', '@scania/tegel-react', '@scania/tegel-angular'],
  docsUrl: 'https://tegel.scania.com',
  repositoryUrl: 'https://github.com/scania-digital-design-system/tegel',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across fleet tracking dashboards and automotive dispatch tools.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@scania/tegel'
  },
  icons: {
    available: true,
    packageName: '@scania/tegel',
    name: 'Scania Tegel Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Scania industrial automotive aesthetic: Scania Blue (#041e42), vibrant signal accents, high-contrast dark mode, and rugged fleet telematics gauges.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Fleet management dashboards, vehicle telematics, and logistics dispatch consoles',
    'Industrial IoT web applications and automotive diagnostics portals',
    'Multi-framework enterprise teams sharing Web Components'
  ],
  avoidFor: [
    'Retro pixel-art games'
  ],
  strengths: [
    'Official design system of Scania Group with Web Components, React, and Angular wrappers',
    'Designed specifically for automotive and industrial logistics monitoring',
    'First-class dark mode and high-contrast accessibility'
  ],
  weaknesses: [
    'Automotive industrial branding'
  ],
  tags: [
    'scania',
    'tegel',
    'automotive',
    'fleet',
    'logistics',
    'web-components',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['Scania Tegel', 'Scania Design System', 'Tegel', 'Tegel Design System'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @scania/tegel',
      packages: ['@scania/tegel'],
      setupInstructions: 'Import `@scania/tegel/dist/tegel/tegel.css` and define custom elements.'
    },
    react: {
      command: 'npm install @scania/tegel-react @scania/tegel',
      packages: ['@scania/tegel-react', '@scania/tegel'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<sdds-button>',
      description: 'Scania Tegel action button with variant="primary" | "secondary" | "danger".',
      importExample: '<sdds-button variant="primary" text="Dispatch Vehicle"></sdds-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<sdds-*>` custom elements or `@scania/tegel-react` components.',
      'Import Tegel stylesheet and typography tokens at root.',
      'Use Scania dark theme for vehicle telematics consoles.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Use Scania design token CSS custom properties.',
    iconUsage: 'Use `<sdds-icon name="truck"></sdds-icon>`.',
    layoutConventions: 'Use standard custom element and flex/grid layout structure.'
  }
};
