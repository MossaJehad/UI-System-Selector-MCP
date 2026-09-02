import { UISystem } from '../../schemas/uiSystem.js';

export const nhsDesignSystem: UISystem = {
  id: 'nhs-design-system',
  name: 'NHS digital service manual (NHS Design System)',
  organization: 'NHS England',
  description: 'The official frontend design system for the UK National Health Service, engineered for patient trust, accessible clinical and triage workflows, and universal accessibility across all health digital services.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'react', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['nhsuk-frontend', 'nhsuk-react-components'],
  docsUrl: 'https://service-manual.nhs.uk/design-system',
  repositoryUrl: 'https://github.com/nhsuk/nhsuk-frontend',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.2 AA standards with deep user testing across disabled, elderly, and vulnerable patient populations.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'NHS Blue color tokens and Frutiger typography scale',
    packageName: 'nhsuk-frontend'
  },
  icons: {
    available: true,
    packageName: 'nhsuk-frontend',
    name: 'NHS SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-trust, calm healthcare aesthetic featuring iconic NHS Blue (#005eb8), clear patient warning callouts, and accessible typography.',
  noveltyLevel: 'established',
  bestFor: [
    'NHS trusts, hospitals, and primary care digital health tools',
    'Health tracking, prescription ordering, and clinical symptom check workflows',
    'High-trust patient portals requiring universal accessibility'
  ],
  avoidFor: [
    'Non-health commercial platforms',
    'Dark-mode developer consoles'
  ],
  strengths: [
    'Unsurpassed user trust in healthcare contexts',
    'Specialized healthcare components: Care Cards (non-urgent, urgent, emergency), Warning Callouts, Do and Don’t lists',
    'Tested across patients with cognitive and physical impairments'
  ],
  weaknesses: [
    'Strong NHS brand identity makes it unsuitable for general commercial brands'
  ],
  tags: [
    'government',
    'healthcare',
    'nhs',
    'medical',
    'patient',
    'accessible',
    'high-accessibility',
    'wcag-aa'
  ],
  aliases: ['NHS Frontend', 'NHSUK Design System', 'NHS Service Manual'],
  systemTypes: ['government', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install nhsuk-frontend',
      packages: ['nhsuk-frontend'],
      setupInstructions: 'Import `nhsuk-frontend/dist/nhsuk.min.css` and initialize with `import nhsuk from "nhsuk-frontend"; nhsuk.initAll();`.'
    }
  },
  componentGuidance: {
    carecard: {
      canonicalName: 'nhsuk-care-card',
      description: 'Care card directing patient action based on medical urgency (non-urgent, urgent, immediate).',
      importExample: '<div class="nhsuk-care-card nhsuk-care-card--urgent"><div class="nhsuk-care-card__heading-container"><h3 class="nhsuk-care-card__heading"><span role="text"><span class="nhsuk-u-visually-hidden">Urgent advice: </span>Ask for an urgent GP appointment</span></h3></div><div class="nhsuk-care-card__content"><p>Contact your GP if symptoms persist.</p></div></div>',
      docSubUrl: 'components/care-cards/'
    },
    warningcallout: {
      canonicalName: 'nhsuk-warning-callout',
      description: 'Important medical warning callout component.',
      importExample: '<div class="nhsuk-warning-callout"><h3 class="nhsuk-warning-callout__label"><span role="text"><span class="nhsuk-u-visually-hidden">Important: </span>Important medical information</span></h3><p>Do not stop taking prescribed medications suddenly.</p></div>',
      docSubUrl: 'components/warning-callout/'
    }
  },
  aiInstructions: {
    principles: [
      'Use NHS Care Cards (`.nhsuk-care-card--urgent`, `.nhsuk-care-card--immediate`) for triage guidance.',
      'Use NHS Do & Don’t lists for clinical instructions.',
      'Always adhere to NHS England color contrast guidelines.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use NHS Blue ($nhsuk-blue: #005eb8), Warm Yellow, and Dark Pink emergency indicators.',
    iconUsage: 'Use SVG icons from nhsuk-frontend (Tick, Cross, Chevron).',
    layoutConventions: 'Wrap in `.nhsuk-width-container` and `.nhsuk-main-wrapper`.'
  }
};
