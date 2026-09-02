import { UISystem } from '../../schemas/uiSystem.js';

export const axaDesignSystem: UISystem = {
  id: 'axa-design-system',
  name: 'AXA Design System (Design System AXA)',
  organization: 'AXA Group',
  description: 'AXA’s official open-source design system and Web Component / React library (w liberalism / toolkit), engineered for global insurance claim management, policy portfolios, risk analysis dashboards, and banking portals.',
  category: 'company-design-system',
  secondaryCategories: ['enterprise', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@axa-fr/react-toolkit-all', '@axa-fr/design-system-look-and-feel-css'],
  docsUrl: 'https://axafrance.github.io/design-system',
  repositoryUrl: 'https://github.com/AxaFrance/design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to European RGAA / WCAG 2.1 AA accessibility standards for financial insurance platforms.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@axa-fr/design-system-look-and-feel-css'
  },
  icons: {
    available: true,
    name: 'AXA Insurance Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'European insurance and banking aesthetic: AXA Blue (#00008f) / Red (#c91432) accents, structured claim filing steps, policy breakdown cards, and high-trust accessibility.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Insurance policy management, claim filing workflows, and financial underwriting portals',
    'Enterprise web applications requiring strict European RGAA / WCAG compliance',
    'Multi-framework applications sharing AXA Web Components'
  ],
  avoidFor: [
    'Retro gaming apps'
  ],
  strengths: [
    'Official design system of global insurance giant AXA Group',
    'Specialized insurance claim wizards, coverage comparison tables, and risk assessment components',
    'Dual availability as modern Web Components and React toolkits'
  ],
  weaknesses: [
    'Insurance corporate branding'
  ],
  tags: [
    'axa',
    'insurance',
    'finance',
    'banking',
    'web-components',
    'enterprise',
    'accessibility',
    'hidden-gem'
  ],
  aliases: ['AXA Design System', 'AXA UI', 'Design System AXA', 'AXA Toolkit'],
  relatedSystems: ['duet', 'ing-lion', 'dsfr'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install @axa-fr/design-system-look-and-feel-css',
      packages: ['@axa-fr/design-system-look-and-feel-css'],
      setupInstructions: 'Import CSS stylesheet and register custom elements.'
    },
    react: {
      command: 'npm install @axa-fr/react-toolkit-all',
      packages: ['@axa-fr/react-toolkit-all'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<af-button>',
      description: 'AXA action button with classModifier="hasiconLeft" | "disabled".',
      importExample: '<Button classModifier="hasiconLeft"><span className="af-btn__text">File Claim</span></Button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use AXA Blue and Red brand tokens for financial interfaces.',
      'Follow accessible multi-step claim filing patterns.',
      'Import `@axa-fr/design-system-look-and-feel-css` at root.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties for AXA theme variables.',
    iconUsage: 'Use AXA insurance icons.',
    layoutConventions: 'Use standard custom element and flexbox layout.'
  }
};
