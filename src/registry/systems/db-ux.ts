import { UISystem } from '../../schemas/uiSystem.js';

export const dbUx: UISystem = {
  id: 'db-ux',
  name: 'Deutsche Bahn DB UX (DB UI Core / Elements)',
  organization: 'Deutsche Bahn AG (DB Systel)',
  description: 'Deutsche Bahn’s official open-source design system and Web Component / multi-framework component library, engineered for European rail transit, train station departure boards, seat reservation maps, ticket booking, and high-contrast transit passenger accessibility.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@db-ui/elements', '@db-ui/core', '@db-ui/react', '@db-ui/vue', '@db-ui/ngx-components'],
  docsUrl: 'https://db-ui.github.io/mono',
  repositoryUrl: 'https://github.com/db-ui/mono',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets European EN 301 549 and WCAG 2.1 AA across German federal transit digital platforms.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Style Dictionary',
    packageName: '@db-ui/core'
  },
  icons: {
    available: true,
    packageName: '@db-ui/elements',
    name: 'DB Transit Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'German railway transit aesthetic: DB Red (#ec0016), DB Sans typography, live train departure flip-boards, platform track badges, and seat reservation carriages.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Public transit, train timetable tracking, and railway ticket booking systems',
    'Station departure screens, bus/tram schedules, and mobility routing apps',
    'Multi-framework Web Component consumer applications (React, Vue, Angular)'
  ],
  avoidFor: [
    'Silicon Valley crypto trading apps'
  ],
  strengths: [
    'Unsurpassed domain excellence for public railway transit and mobility software',
    'True multi-framework Web Component architecture (`@db-ui/elements`, `@db-ui/react`, `@db-ui/vue`, `@db-ui/ngx-components`)',
    'Specialized transit components: Timetable, DepartureBoard, SeatMap, TicketCard'
  ],
  weaknesses: [
    'German railway branding'
  ],
  tags: [
    'deutsche-bahn',
    'db-ux',
    'transit',
    'railway',
    'mobility',
    'web-components',
    'react',
    'vue',
    'angular',
    'hidden-gem'
  ],
  aliases: ['DB UX', 'Deutsche Bahn Design System', 'DB UI', 'DB Elements'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @db-ui/elements @db-ui/core',
      packages: ['@db-ui/elements', '@db-ui/core'],
      setupInstructions: 'Import `@db-ui/core/dist/css/enterprise/db-ui-core.css` and register custom elements.'
    },
    react: {
      command: 'npm install @db-ui/react @db-ui/core',
      packages: ['@db-ui/react', '@db-ui/core'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<db-button>',
      description: 'Deutsche Bahn action button with variant="primary" | "secondary" | "brand".',
      importExample: '<db-button variant="brand">Book ICE Ticket</db-button>',
      docSubUrl: 'components/button/'
    },
    card: {
      canonicalName: '<db-card>',
      description: 'DB journey card with departure, arrival, and platform details.',
      importExample: '<db-card heading="ICE 512 • Platform 4"><p>Berlin Hbf → München Hbf</p></db-card>',
      docSubUrl: 'components/card/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<db-*>` custom elements or `@db-ui/react` / `@db-ui/vue` components.',
      'Apply DB Red and transit status colors (on time: green, delayed: amber).',
      'Ensure high contrast for station timetable readability.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use DB UI design tokens (--db-brand-color, --db-body-bg).',
    iconUsage: 'Use `<db-icon name="train"></db-icon>`.',
    layoutConventions: 'Use standard DB grid and transit card layouts.'
  }
};
