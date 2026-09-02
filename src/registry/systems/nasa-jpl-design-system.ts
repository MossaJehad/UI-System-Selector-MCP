import { UISystem } from '../../schemas/uiSystem.js';

export const nasaJplDesignSystem: UISystem = {
  id: 'nasa-jpl-design-system',
  name: 'NASA JPL Space Design System (Astro UXDS / JPL)',
  organization: 'NASA Jet Propulsion Laboratory (JPL) & Rocket Communications',
  description: 'The open-source space operations and mission control design system developed for NASA, defense, and aerospace applications, engineered for mission-critical telemetry, dark-mode satellite tracking, and high-density space flight monitoring.',
  category: 'government',
  secondaryCategories: ['creative-tool', 'data-heavy', 'dashboard', 'web-components'],
  frameworks: ['web-components', 'html-css', 'react', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@astrouxds/astro-web-components', '@astrouxds/react'],
  docsUrl: 'https://astrouxds.com',
  repositoryUrl: 'https://github.com/RocketCommunicationsInc/astro-web-components',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA with specialized dark-room mission operations contrast testing.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties for telemetry and status colors',
    packageName: '@astrouxds/astro-web-components'
  },
  icons: {
    available: true,
    packageName: '@astrouxds/astro-web-components',
    name: 'Astro Space UX Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Deep aerospace mission control aesthetic: deep space navy (#00162b), vivid telemetry status lights (cyan, green, yellow, red), satellite status symbols, and monospace data readouts.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Space mission control and satellite operations software',
    'Defense, aerospace, and telemetry monitoring dashboards',
    'Real-time scientific equipment and IoT hardware control interfaces'
  ],
  avoidFor: [
    'Casual lifestyle or fashion websites'
  ],
  strengths: [
    'Authentic space flight and satellite telemetry components (Status Symbol, Clock, Monitoring Timeline)',
    'Full dark theme optimized for mission control command rooms',
    'Standards-based Web Components with React bindings'
  ],
  weaknesses: [
    'Very specialized aerospace aesthetic'
  ],
  tags: [
    'government',
    'nasa',
    'space',
    'aerospace',
    'telemetry',
    'mission-control',
    'dark-mode',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Astro UXDS', 'NASA Space Design System', 'Space Operations Design System'],
  systemTypes: ['government', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @astrouxds/astro-web-components',
      packages: ['@astrouxds/astro-web-components'],
      setupInstructions: 'Import `@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css`.'
    },
    react: {
      command: 'npm install @astrouxds/react',
      packages: ['@astrouxds/react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    status: {
      canonicalName: '<rux-status>',
      description: 'Telemetry status symbol indicating critical, serious, caution, normal, off, or standby.',
      importExample: '<rux-status status="normal"></rux-status>',
      docSubUrl: 'components/status-symbol/'
    },
    clock: {
      canonicalName: '<rux-clock>',
      description: 'Mission elapsed time (MET) and UTC space mission operations clock.',
      importExample: '<rux-clock timezone="UTC"></rux-clock>',
      docSubUrl: 'components/clock/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<rux-*>` web components or `@astrouxds/react` components for all mission control features.',
      'Use standard Astro status levels (`critical`, `serious`, `caution`, `normal`, `standby`, `off`).',
      'Maintain deep dark mode theme for command center visibility.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Astro UXDS design tokens (--rux-color-background, --rux-color-status-normal).',
    iconUsage: 'Use `<rux-icon icon="..." />` components.',
    layoutConventions: 'Structure with `<rux-container>` and `<rux-monitoring-icon>` arrays.'
  }
};
