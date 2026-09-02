import { UISystem } from '../../schemas/uiSystem.js';

export const uswds: UISystem = {
  id: 'uswds',
  name: 'U.S. Web Design System (USWDS)',
  organization: 'U.S. General Services Administration (GSA / Technology Transformation Services)',
  description: 'The official design system and component library for U.S. federal government websites, powered by design tokens, WCAG 2.1 AA accessibility, and mobile-friendly civic components.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'css-framework', 'enterprise'],
  frameworks: ['html-css', 'vanilla', 'react', 'css-only'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@uswds/uswds', '@trussworks/react-uswds'],
  docsUrl: 'https://designsystem.digital.gov',
  repositoryUrl: 'https://github.com/uswds/uswds',
  license: 'CC0-1.0 (Public Domain)',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed to conform to Section 508 and WCAG 2.1 AA across federal digital properties.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and Sass maps',
    packageName: '@uswds/uswds'
  },
  icons: {
    available: true,
    packageName: '@uswds/uswds',
    name: 'USWDS Sprite Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Authoritative, clean, accessible federal agency look with official US flag identifier header and high-contrast typography.',
  noveltyLevel: 'established',
  bestFor: [
    'U.S. federal, state, and municipal government websites',
    'Civic tech and public benefits portals',
    'Section 508 accessibility compliant enterprise portals'
  ],
  avoidFor: [
    'Commercial consumer e-commerce shops',
    'Trendy personal portfolio sites'
  ],
  strengths: [
    'Section 508 and 21st Century IDEA Act compliance built-in',
    'Official government banner (`usa-banner`) and identifier components',
    'Modular token-based theming architecture with comprehensive utility classes'
  ],
  weaknesses: [
    'Heavy styling defaults specific to federal branding',
    'React wrappers are community-maintained (`@trussworks/react-uswds`)'
  ],
  tags: [
    'government',
    'uswds',
    'gsa',
    'section-508',
    'public-sector',
    'accessible',
    'high-accessibility',
    'civic-tech'
  ],
  aliases: ['USWDS', 'US Web Design System', 'Digital.gov Design System'],
  systemTypes: ['government', 'design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @uswds/uswds',
      packages: ['@uswds/uswds'],
      setupInstructions: 'Import `@uswds/uswds/css/uswds.min.css` and initialize `@uswds/uswds/js/uswds.min.js`.'
    },
    react: {
      command: 'npm install @trussworks/react-uswds @uswds/uswds',
      packages: ['@trussworks/react-uswds', '@uswds/uswds'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    banner: {
      canonicalName: 'usa-banner',
      description: 'Official government banner identifying an authentic government site.',
      importExample: '<section class="usa-banner" aria-label="Official website of the United States government"><div class="usa-accordion"><header class="usa-banner__header"><div class="usa-banner__inner"><p class="usa-banner__header-text">An official website of the United States government</p></div></header></div></section>',
      docSubUrl: 'components/banner/'
    },
    button: {
      canonicalName: 'usa-button',
      description: 'Standard accessible USWDS action button (default, secondary, accent-cool, outline).',
      importExample: '<button type="button" class="usa-button">Submit Application</button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Include `.usa-banner` at the very top of federal portal pages.',
      'Use USWDS token utilities (e.g., `margin-x-2`, `bg-primary`) instead of raw inline styles.',
      'Ensure form inputs have associated `.usa-label` elements and error text wrappers.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'bootstrap'],
    themingGuide: 'Configure theme via USWDS settings variables in Sass or CSS Custom Properties.',
    iconUsage: 'Use SVG sprite icons from @uswds/uswds/img/sprite.svg.',
    layoutConventions: 'Structure layouts with `.grid-container` and `.grid-row` / `.grid-col-*`.'
  }
};
