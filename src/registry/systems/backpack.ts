import { UISystem } from '../../schemas/uiSystem.js';

export const backpack: UISystem = {
  id: 'backpack',
  name: 'Skyscanner Backpack',
  organization: 'Skyscanner',
  description: 'Skyscanner’s official open-source design system and React/React Native component suite, engineered for global flight search, hotel price comparison, car rental bookings, and responsive travel date calendars.',
  category: 'company-design-system',
  secondaryCategories: ['ecommerce', 'consumer', 'mobile'],
  frameworks: ['react', 'react-native'],
  stylingApproach: 'css-modules',
  packageNames: ['@skyscanner/backpack-web', 'bpk-component-button', 'bpk-component-calendar'],
  docsUrl: 'https://backpack.github.io',
  repositoryUrl: 'https://github.com/skyscanner/backpack',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across global travel search engines.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JavaScript theme constants',
    packageName: '@skyscanner/backpack-web'
  },
  icons: {
    available: true,
    packageName: '@skyscanner/backpack-web',
    name: 'Backpack Travel Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Travel search and adventure style: Skyscanner Sky Blue (#0770e3), Monteverde green pricing badges, flight leg duration indicators, and dual date range calendars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Flight search engines, travel aggregators, and hotel price comparison portals',
    'Date range selection, fare calendar heatmaps, and travel itinerary cards',
    'Cross-platform React Web and React Native travel applications'
  ],
  avoidFor: [
    'Enterprise Kubernetes dashboards'
  ],
  strengths: [
    'Unbeatable domain specialization for flight search, hotel pricing, and travel calendars',
    'Specialized travel components: BpkCalendar, BpkTicket, BpkFareCard, BpkFlightLeg, BpkStarRating',
    'Unified React Web and React Native component architecture'
  ],
  weaknesses: [
    'Travel and hospitality domain specialization'
  ],
  tags: [
    'skyscanner',
    'backpack',
    'travel',
    'flights',
    'hotels',
    'calendar',
    'ecommerce',
    'react-native',
    'rtl',
    'hidden-gem'
  ],
  aliases: ['Backpack', 'Skyscanner Design System', 'BPK'],
  systemTypes: ['company-design-system', 'component-library', 'mobile'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @skyscanner/backpack-web bpk-component-button bpk-component-calendar',
      packages: ['@skyscanner/backpack-web', 'bpk-component-button', 'bpk-component-calendar'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'BpkButton',
      description: 'Backpack action button with primary, secondary, and featured styles.',
      importExample: "import BpkButton from 'bpk-component-button';\n\n<BpkButton primary>Search Flights</BpkButton>",
      docSubUrl: 'components/button'
    },
    calendar: {
      canonicalName: 'BpkCalendar',
      description: 'Travel date picker calendar supporting price tags and range selection.',
      importExample: "import BpkCalendar from 'bpk-component-calendar';\n\n<BpkCalendar minDate={new Date()} />",
      docSubUrl: 'components/calendar'
    }
  },
  aiInstructions: {
    principles: [
      'Use Backpack travel components (`BpkCalendar`, `BpkTicket`, `BpkPrice`) for travel booking flows.',
      'Apply Skyscanner Sky Blue and Monteverde green accents for cheapest fare highlights.',
      'Ensure high contrast across flight timetable listings.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Backpack theme tokens from `@skyscanner/backpack-web`.',
    iconUsage: 'Use BpkIcon components (e.g. BpkIconFlight, BpkIconHotel).',
    layoutConventions: 'Use standard travel card layouts with Backpack spacing tokens.'
  }
};
