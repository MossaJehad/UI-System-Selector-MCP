import { UISystem } from '../../schemas/uiSystem.js';

export const ontarioDesignSystem: UISystem = {
  id: 'ontario-design-system',
  name: 'Ontario Design System',
  organization: 'Government of Ontario (Ontario Digital Service)',
  description: 'The Government of Ontario’s official design system and Web Component library, engineered for bilingual (English & French) accessibility compliance under the AODA and WCAG 2.0/2.1 AA.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'web-components'],
  frameworks: ['web-components', 'react', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@ongov/ontario-design-system-component-library', '@ongov/ontario-design-system-component-library-react'],
  docsUrl: 'https://designsystem.ontario.ca',
  repositoryUrl: 'https://github.com/ongov/ontario-design-system',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets strict Accessibility for Ontarians with Disabilities Act (AODA) and WCAG 2.1 AA standards.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties',
    packageName: '@ongov/ontario-design-system-component-library'
  },
  icons: {
    available: true,
    packageName: '@ongov/ontario-design-system-component-library',
    name: 'Ontario Design System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, structured, bilingual Canadian civic style with Ontario black-and-gold accents and accessible typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Government of Ontario ministries and public agencies',
    'Canadian public sector applications requiring strict English/French bilingualism and AODA compliance',
    'Web Component-based civic portals'
  ],
  avoidFor: [
    'Commercial e-commerce shops'
  ],
  strengths: [
    'AODA compliance and bilingual English/French support out-of-the-box',
    'Framework-agnostic Web Components with official React and Angular wrappers',
    'Official Ontario header and footer components'
  ],
  weaknesses: [
    'Ontario-specific branding and logo assets'
  ],
  tags: [
    'government',
    'canada',
    'ontario',
    'aoda',
    'bilingual',
    'accessible',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Ontario DS', 'Government of Ontario Design System', 'ODS'],
  systemTypes: ['government', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ongov/ontario-design-system-component-library',
      packages: ['@ongov/ontario-design-system-component-library'],
      setupInstructions: 'Import `@ongov/ontario-design-system-component-library/dist/ontario-design-system-components/ontario-design-system-components.css`.'
    },
    react: {
      command: 'npm install @ongov/ontario-design-system-component-library-react',
      packages: ['@ongov/ontario-design-system-component-library-react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<ontario-button>',
      description: 'Ontario accessible action button.',
      importExample: '<ontario-button type="primary">Continue / Continuer</ontario-button>',
      docSubUrl: 'components/button/'
    },
    callout: {
      canonicalName: '<ontario-callout>',
      description: 'Ontario informational callout box.',
      importExample: '<ontario-callout type="information" heading-text="Important Notice"><p>Notice body content</p></ontario-callout>',
      docSubUrl: 'components/callout/'
    }
  },
  aiInstructions: {
    principles: [
      'Ensure bilingual English and French string support across all user interfaces.',
      'Use `<ontario-*>` custom elements or React wrappers.',
      'Comply strictly with AODA accessibility standards.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Ontario Design System tokens and color scales.',
    iconUsage: 'Use `<ontario-icon-*>` components.',
    layoutConventions: 'Use Ontario page containers and grid layout classes.'
  }
};
