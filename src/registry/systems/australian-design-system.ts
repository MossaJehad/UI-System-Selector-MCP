import { UISystem } from '../../schemas/uiSystem.js';

export const australianDesignSystem: UISystem = {
  id: 'australian-design-system',
  name: 'Australian Government Design System (Design System Au)',
  organization: 'Commonwealth of Australia (Digital Transformation Agency / DTA)',
  description: 'The Australian Government’s official open-source design system, engineered to deliver accessible (WCAG 2.1 AA), citizen-centered digital services across Australian federal, state, and territory agencies.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'css-framework'],
  frameworks: ['react', 'html-css', 'vanilla'],
  stylingApproach: 'sass',
  packageNames: ['@gold-au/buttons', '@gold-au/core', '@gold-au/body'],
  docsUrl: 'https://gold.designsystemau.org',
  repositoryUrl: 'https://github.com/govau/design-system-components',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Australian Government Digital Service Standard and WCAG 2.1 AA.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Sass tokens and Gold AU color variables',
    packageName: '@gold-au/core'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, approachable Australian public sector look with Australian Coat of Arms branding and clear civic navigation.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Australian federal, state, and municipal public service portals',
    'Civic tech and Australian healthcare/benefits delivery applications',
    'Accessible government portals requiring Australian DSS conformance'
  ],
  avoidFor: [
    'Commercial gaming or marketing storefronts'
  ],
  strengths: [
    'Proven Australian Government Digital Service Standard compliance',
    'Modular npm packages for buttons, body, callouts, and progress bars',
    'High contrast and dark mode palette support'
  ],
  weaknesses: [
    'Australian government specific identity'
  ],
  tags: [
    'government',
    'australia',
    'dta',
    'govau',
    'gold',
    'accessible',
    'high-accessibility',
    'hidden-gem'
  ],
  aliases: ['Design System Au', 'GovAU Design System', 'GOLD Design System'],
  systemTypes: ['government', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @gold-au/buttons @gold-au/core @gold-au/body',
      packages: ['@gold-au/buttons', '@gold-au/core', '@gold-au/body'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'AUbutton',
      description: 'Australian Government accessible button component.',
      importExample: "import AUbutton from '@gold-au/buttons';\n\n<AUbutton>Save and continue</AUbutton>",
      docSubUrl: 'components/buttons/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@gold-au/*` modular components.',
      'Comply with Australian Digital Service Standards (DSS).',
      'Follow accessible form patterns.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Australian Government Gold theme variables.',
    iconUsage: 'Use accessible SVG icons with aria-hidden labels.',
    layoutConventions: 'Wrap in `.au-body` and `.au-grid`.'
  }
};
