import { UISystem } from '../../schemas/uiSystem.js';

export const astroUxds: UISystem = {
  id: 'astro-uxds',
  name: 'Astro Space UX Design System (Astro UXDS)',
  organization: 'Rocket Communications / US Space Force',
  description: 'The official open-source design system and Web Component / React library built for space mission control telemetry, satellite command and control (C2), aerospace ground systems, and mission-critical operations consoles.',
  category: 'company-design-system',
  secondaryCategories: ['data-heavy', 'web-components', 'dashboard'],
  frameworks: ['web-components', 'react', 'angular', 'vue', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@astrouxds/astro-web-components', '@astrouxds/react'],
  docsUrl: 'https://astrouxds.com',
  repositoryUrl: 'https://github.com/RocketCommunicationsInc/astro',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered for high-stress space operations control rooms and compliance with Department of Defense / Section 508 accessibility.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON (Astro Dark theme, status symbols)',
    packageName: '@astrouxds/tokens'
  },
  icons: {
    available: true,
    packageName: '@astrouxds/astro-web-components',
    name: 'Astro Space & Status Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Aerospace mission control aesthetic: deep space dark mode (#1b2d3e), military status symbols (Critical, Serious, Caution, Normal, Standby, Off), satellite tracking azimuth/elevation dials, clock monitors, and high-density telemetry tables.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Space mission operations, satellite telemetry monitoring, and orbital command consoles',
    'Aerospace defense interfaces, drone telemetry hubs, and maritime navigation systems',
    'High-stress mission-critical dashboards requiring unambiguous status symbology'
  ],
  avoidFor: [
    'Consumer fashion or lifestyle blogs'
  ],
  strengths: [
    'The premier space operations design system in the world (used across US Space Force and aerospace contractors)',
    'Standardized aerospace status symbol system (Critical Red, Serious Orange, Caution Yellow, Normal Green, Standby Blue, Off Gray)',
    'Specialized aerospace components: RruxClock, StatusSymbol, NotificationBanner, LogTable, Timeline'
  ],
  weaknesses: [
    'Aerospace mission control focus'
  ],
  tags: [
    'astro-uxds',
    'space',
    'aerospace',
    'telemetry',
    'satellite',
    'mission-control',
    'military',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Astro UXDS', 'Astro Space UX', 'Space UX Design System', 'Rocket Astro'],
  relatedSystems: ['nasa-jpl-design-system', 'siemens-ix', 'carbon'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @astrouxds/astro-web-components',
      packages: ['@astrouxds/astro-web-components'],
      setupInstructions: 'Import `@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css` and custom elements.'
    },
    react: {
      command: 'npm install @astrouxds/react @astrouxds/astro-web-components',
      packages: ['@astrouxds/react', '@astrouxds/astro-web-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    statussymbol: {
      canonicalName: '<rux-status>',
      description: 'Aerospace standardized status symbol with status="critical" | "serious" | "caution" | "normal" | "standby" | "off".',
      importExample: '<rux-status status="normal"></rux-status>',
      docSubUrl: 'components/status'
    },
    clock: {
      canonicalName: '<rux-clock>',
      description: 'Mission control UTC / Zulu / local time clock monitor.',
      importExample: '<rux-clock timezone="UTC"></rux-clock>',
      docSubUrl: 'components/clock'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<rux-*>` custom elements or `@astrouxds/react` components.',
      'Use `<rux-status>` for mission-critical telemetry status indicators.',
      'Apply Astro Dark space theme as the primary default background.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root` or `body.dark-theme`.',
    iconUsage: 'Use `<rux-icon icon="satellite"></rux-icon>`.',
    layoutConventions: 'Use high-density aerospace monitoring grid structures.'
  }
};
