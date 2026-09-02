import { UISystem } from '../../schemas/uiSystem.js';

export const auro: UISystem = {
  id: 'auro',
  name: 'Alaska Airlines Auro Design System',
  organization: 'Alaska Airlines',
  description: 'Alaska Airlines’s open-source Web Component design system, engineered for airline flight booking, boarding passes, seat selection maps, and travel itinerary management.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'html-css', 'vanilla', 'react'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@aurodesignsystem/auro-button', '@aurodesignsystem/design-tokens', '@aurodesignsystem/auro-icon'],
  docsUrl: 'https://auro.alaskaair.com',
  repositoryUrl: 'https://github.com/AlaskaAirlines/AuroDesignSystem',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA and U.S. DOT airline accessibility requirements.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Style Dictionary',
    packageName: '@aurodesignsystem/design-tokens'
  },
  icons: {
    available: true,
    packageName: '@aurodesignsystem/auro-icon',
    name: 'Auro Travel & Flight Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Pacific Northwest aviation aesthetic: Alaska Deep Blue, Emerald Green accents, clear flight status timelines, and crisp airport code typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Flight booking engines, airline reservation portals, and airport kiosk displays',
    'Travel itineraries, hotel bookings, and transit scheduling tools',
    'Web Component based travel applications'
  ],
  avoidFor: [
    'Dark-theme developer IDEs'
  ],
  strengths: [
    'Purpose-built for airline reservations and travel booking',
    'Standards-based Web Components using Lit with Shadow DOM encapsulation',
    'Rich flight icons library (aircraft, departure, arrival, baggage, seat)'
  ],
  weaknesses: [
    'Aviation and travel domain specialization'
  ],
  tags: [
    'alaska-airlines',
    'auro',
    'travel',
    'airline',
    'flight',
    'web-components',
    'lit',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Auro', 'Alaska Airlines Design System', 'Auro Design System'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @aurodesignsystem/design-tokens @aurodesignsystem/auro-button @aurodesignsystem/auro-icon',
      packages: ['@aurodesignsystem/design-tokens', '@aurodesignsystem/auro-button', '@aurodesignsystem/auro-icon'],
      setupInstructions: 'Import `@aurodesignsystem/design-tokens/dist/tokens/CSSCustomProperties.css` and register web components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<auro-button>',
      description: 'Auro action button with primary, secondary, and tertiary variants.',
      importExample: '<auro-button variant="primary">Search Flights</auro-button>',
      docSubUrl: 'components/auro/button'
    },
    flight: {
      canonicalName: '<auro-flight>',
      description: 'Flight summary card with origin, destination, duration, and layover stops.',
      importExample: '<auro-flight duration="2h 35m"><auro-flight-header flights="AS 123"></auro-flight-header><auro-flight-main stops="0" origin="SEA" destination="SFO"></auro-flight-main></auro-flight>',
      docSubUrl: 'components/auro/flight'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<auro-*>` custom elements in HTML templates.',
      'Import Auro CSS custom properties.',
      'Use Auro flight timeline and status patterns for transit data.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Auro design tokens (--auro-color-brand-primary, --auro-color-text-primary).',
    iconUsage: 'Use `<auro-icon category="travel" name="airplane"></auro-icon>`.',
    layoutConventions: 'Use standard travel card layouts with Auro spacing tokens.'
  }
};
