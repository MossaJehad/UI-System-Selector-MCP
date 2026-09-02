import { UISystem } from '../../schemas/uiSystem.js';

export const estoniaKratt: UISystem = {
  id: 'estonia-kratt',
  name: 'Veera (Estonia State Design System)',
  organization: 'Information System Authority of Estonia (RIA)',
  description: 'Estonia’s official e-governance design system and Web Component library, powering e-Estonia digital services with high-security, bilingual/multilingual accessibility, and modern Scandinavian minimalism.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'web-components', 'enterprise'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react', 'angular', 'vue'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@ria/veera-styles'],
  docsUrl: 'https://veera.eesti.ee',
  repositoryUrl: 'https://github.com/e-gov/Veera',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to EU standard EN 301 549 and WCAG 2.1 AA for e-governance applications.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and Aino font typography',
    packageName: '@ria/veera-styles'
  },
  icons: {
    available: true,
    name: 'Veera SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Crisp, modern, Scandinavian digital governance aesthetic featuring e-Estonia blue and stone gray tones with clear visual hierarchy.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Estonian state and municipal e-services',
    'European e-identity, digital signature, and secure government workflow portals',
    'Nordic-style minimalist civic tech applications'
  ],
  avoidFor: [
    'Gaming or high-animation marketing portals'
  ],
  strengths: [
    'Built for world-leading e-Estonia digital state services',
    'Framework-agnostic Web Components and clean token architecture',
    'Multilingual support for Estonian, English, and Russian'
  ],
  weaknesses: [
    'Estonia-specific civic branding elements'
  ],
  tags: [
    'government',
    'estonia',
    'e-estonia',
    'veera',
    'accessible',
    'web-components',
    'european',
    'hidden-gem'
  ],
  aliases: ['Veera', 'e-Estonia Design System', 'Estonia RIA Design System'],
  systemTypes: ['government', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ria/veera-styles',
      packages: ['@ria/veera-styles'],
      setupInstructions: 'Import `@ria/veera-styles/scss/veera.scss` or compiled CSS distribution in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'c-btn',
      description: 'Veera accessible action button.',
      importExample: '<button type="button" class="c-btn c-btn--primary">Sign with Mobile-ID</button>',
      docSubUrl: 'komponendid/nupud/'
    },
    header: {
      canonicalName: 'c-header',
      description: 'Official e-Estonia state service header.',
      importExample: '<header class="c-header"><div class="c-header__logo"><span>eesti.ee</span></div></header>',
      docSubUrl: 'komponendid/pais/'
    }
  },
  aiInstructions: {
    principles: [
      'Use Veera `.c-*` component classes and typography tokens.',
      'Follow EU accessibility standards EN 301 549.',
      'Use Aino or Roboto font families.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Veera color variables ($veera-color-primary, $veera-color-sapphire-blue).',
    iconUsage: 'Use Veera SVG icon system.',
    layoutConventions: 'Use standard flexbox and grid containers defined in Veera styles.'
  }
};
