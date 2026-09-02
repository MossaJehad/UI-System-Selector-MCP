import { UISystem } from '../../schemas/uiSystem.js';

export const vaGovDesignSystem: UISystem = {
  id: 'va-gov-design-system',
  name: 'VA.gov Design System',
  organization: 'U.S. Department of Veterans Affairs',
  description: 'The official design system and Web Component library powering VA.gov, built on top of USWDS and specialized for veteran healthcare, claims processing, and accessibility for disabled users.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'web-components'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@department-of-veterans-affairs/component-library'],
  docsUrl: 'https://design.va.gov',
  repositoryUrl: 'https://github.com/department-of-veterans-affairs/component-library',
  license: 'CC0-1.0 (Public Domain)',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Exceeds Section 508 and WCAG 2.1 AA with specialized high-contrast testing for veterans with visual impairments and traumatic brain injury.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and USWDS theme tokens',
    packageName: '@department-of-veterans-affairs/component-library'
  },
  icons: {
    available: true,
    packageName: '@department-of-veterans-affairs/component-library',
    name: 'VA.gov Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'High-clarity, extra accessible, compassionate veteran care aesthetic with large focus indicators and clear claims status indicators.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'U.S. Department of Veterans Affairs digital health and claims applications',
    'Civic tech and veteran support applications',
    'High-accessibility digital portals serving elderly or disabled populations'
  ],
  avoidFor: [
    'Fast-paced consumer entertainment apps'
  ],
  strengths: [
    'Exceptional accessibility and usability research on users with disabilities',
    'Web Component based with native Custom Elements (`<va-button>`, `<va-alert>`, `<va-modal>`)',
    'Specialized healthcare and claims processing components'
  ],
  weaknesses: [
    'VA-specific agency focus'
  ],
  tags: [
    'government',
    'va-gov',
    'veterans',
    'healthcare',
    'accessible',
    'high-accessibility',
    'web-components',
    'hidden-gem'
  ],
  aliases: ["VA Design System", "VA Component Library", "VA.gov UI", "VA.gov components"],
  systemTypes: ['government', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @department-of-veterans-affairs/component-library',
      packages: ['@department-of-veterans-affairs/component-library'],
      setupInstructions: 'Import `@department-of-veterans-affairs/component-library/dist/main.css` and register web components.'
    }
  },
  componentGuidance: {
    alert: {
      canonicalName: '<va-alert>',
      description: 'VA.gov accessible alert box with status and icon.',
      importExample: '<va-alert status="info" visible><h3>Your claim has been received</h3><p>We are reviewing your medical documentation.</p></va-alert>',
      docSubUrl: 'components/alert/'
    },
    button: {
      canonicalName: '<va-button>',
      description: 'VA.gov action button with primary, secondary, and continue variants.',
      importExample: '<va-button text="Apply for Benefits" continue></va-button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<va-*>` custom elements directly in templates.',
      'Ensure high contrast and clear plain-language labels.',
      'Provide explicit focus management across modals and alert states.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use VA.gov color palette (VA Blue: #003e67, Gold, Red).',
    iconUsage: 'Use built-in `<va-icon>` components.',
    layoutConventions: 'Structure pages using standard USWDS grid and VA page wrappers.'
  }
};
