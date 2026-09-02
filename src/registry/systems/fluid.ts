import { UISystem } from '../../schemas/uiSystem.js';

export const fluid: UISystem = {
  id: 'fluid',
  name: 'ENGIE Fluid Design System',
  organization: 'ENGIE',
  description: 'ENGIE’s official open-source design system and component library, engineered for energy transition management, smart grid telemetry, sustainable utilities monitoring, and B2B energy trading portals.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'data-heavy', 'dashboard'],
  frameworks: ['react', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@engie-group/fluid-design-system'],
  docsUrl: 'https://fluid.engie.com',
  repositoryUrl: 'https://github.com/engie-group/fluid-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across European energy monitoring and consumer bill portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@engie-group/fluid-design-system'
  },
  icons: {
    available: true,
    packageName: '@engie-group/fluid-design-system',
    name: 'Fluid Energy Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern European energy and sustainability aesthetic: ENGIE Cyan (#00aaff) / Emerald Green accents, smart meter consumption graphs, solar kilowatt telemetry cards, and clean forms.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Energy management dashboards, solar/wind telemetry, and smart grid monitoring',
    'Utilities billing portals, carbon footprint calculators, and IoT energy monitors',
    'Corporate sustainability and ESG reporting applications'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'Official design system of global energy leader ENGIE',
    'Specialized utilities, energy telemetry, and sustainability component patterns',
    'Full dark mode support for continuous NOC/control room monitoring'
  ],
  weaknesses: [
    'Energy sector domain focus'
  ],
  tags: [
    'engie',
    'fluid',
    'energy',
    'sustainability',
    'utilities',
    'smart-grid',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['ENGIE Fluid', 'Fluid Design System', 'ENGIE Design System'],
  systemTypes: ['company-design-system', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @engie-group/fluid-design-system',
      packages: ['@engie-group/fluid-design-system'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Fluid energy action button with variant="primary" | "secondary".',
      importExample: "import { Button } from '@engie-group/fluid-design-system';\n\n<Button variant=\"primary\">Analyze Grid Load</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use Fluid components for energy and utility monitoring interfaces.',
      'Apply ENGIE energy design tokens and color scales for consumption data.',
      'Use dark mode for control room NOC views.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties via Fluid design tokens.',
    iconUsage: 'Use Fluid energy iconography.',
    layoutConventions: 'Use standard responsive flex and grid layouts.'
  }
};
