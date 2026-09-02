import { UISystem } from '../../schemas/uiSystem.js';

export const govukDesignSystem: UISystem = {
  id: 'govuk-design-system',
  name: 'GOV.UK Design System',
  organization: 'UK Government Digital Service (GDS)',
  description: 'The official design system and frontend library for UK public services, internationally recognized for benchmark-setting accessibility (WCAG 2.2 AA), progressive enhancement, and user-tested civic workflows.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'css-framework'],
  frameworks: ['html-css', 'vanilla', 'react', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['govuk-frontend'],
  docsUrl: 'https://design-system.service.gov.uk',
  repositoryUrl: 'https://github.com/alphagov/govuk-frontend',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.2 AA standards with rigorous usability testing across diverse assistive technologies.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'SCSS variables and GDS Transport typography tokens',
    packageName: 'govuk-frontend'
  },
  icons: {
    available: false,
    description: 'Uses minimal functional SVG chevrons and status icons.'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-contrast, crystal-clear public sector layout with bold GDS black headers, yellow focus rings, and large legible typography.',
  noveltyLevel: 'established',
  bestFor: [
    'UK central and local government digital services',
    'Public sector, civic tech, and high-compliance accessibility applications',
    'Multi-step wizard forms with error summary banners and progressive enhancement'
  ],
  avoidFor: [
    'Consumer mobile gaming apps',
    'Commercial marketing storefronts wanting flashy animations'
  ],
  strengths: [
    'Gold standard for government and accessible web forms',
    'Progressive enhancement: works 100% without JavaScript',
    'Extensive user research backing every component pattern (Error Summary, Radios, Checkboxes, Date Input)'
  ],
  weaknesses: [
    'Distinctive UK GOV.UK crown and typography branding',
    'No native dark mode'
  ],
  tags: [
    'government',
    'public-sector',
    'gds',
    'govuk',
    'high-accessibility',
    'wcag-aa',
    'accessible',
    'sass',
    'progressive-enhancement'
  ],
  aliases: ['GOV.UK Frontend', 'GDS Design System', 'alphagov'],
  systemTypes: ['government', 'design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install govuk-frontend',
      packages: ['govuk-frontend'],
      setupInstructions: 'Import `govuk-frontend/dist/govuk/govuk-frontend.min.css` and initialize JS with `import { initAll } from "govuk-frontend"; initAll();`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'govuk-button',
      description: 'GOV.UK accessible action button (primary, secondary, warning, start).',
      importExample: '<button type="submit" class="govuk-button" data-module="govuk-button">Save and continue</button>',
      docSubUrl: 'components/button/'
    },
    errorsummary: {
      canonicalName: 'govuk-error-summary',
      description: 'Accessible error summary component displayed at the top of forms.',
      importExample: '<div class="govuk-error-summary" data-module="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1"><h2 class="govuk-error-summary__title" id="error-summary-title">There is a problem</h2><div class="govuk-error-summary__body"><ul class="govuk-list govuk-error-summary__list"><li><a href="#passport-number">Enter your passport number</a></li></ul></div></div>',
      docSubUrl: 'components/error-summary/'
    }
  },
  aiInstructions: {
    principles: [
      'Prioritize progressive enhancement: forms must work without client JavaScript.',
      'Place a `.govuk-error-summary` at the top of the page when form validation fails.',
      'Use GDS spacing tokens (`govuk-spacing(x)`) and font mixins.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'bootstrap'],
    themingGuide: 'Use GOV.UK color palette ($govuk-brand-colour, $govuk-error-colour) and standard GDS typography scale.',
    iconUsage: 'Use minimal functional SVG icons.',
    layoutConventions: 'Wrap page contents in `.govuk-width-container` with `.govuk-main-wrapper` and `.govuk-grid-row`.'
  }
};
