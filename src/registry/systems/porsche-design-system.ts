import { UISystem } from '../../schemas/uiSystem.js';

export const porscheDesignSystem: UISystem = {
  id: 'porsche-design-system',
  name: 'Porsche Design System',
  organization: 'Dr. Ing. h.c. F. Porsche AG',
  description: 'Porsche’s official open-source design system and Web Component / React / Angular / Vue component library, engineered for luxury automotive digital experiences, vehicle configurators, charging networks, and racing telematics.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'creative-tool', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@porsche-design-system/components-js', '@porsche-design-system/components-react', '@porsche-design-system/components-vue', '@porsche-design-system/components-angular'],
  docsUrl: 'https://designsystem.porsche.com',
  repositoryUrl: 'https://github.com/porsche-design-system/porsche-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across Porsche digital channels.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON token files',
    packageName: '@porsche-design-system/components-js'
  },
  icons: {
    available: true,
    packageName: '@porsche-design-system/components-js',
    name: 'Porsche Automotive & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Luxury automotive high-performance aesthetic: Porsche Red (#d5001c), Porsche Next typography, dark mode car showrooms, vehicle trim selectors, and precision speed telemetry.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Automotive configurators, luxury brand showcases, and vehicle sales portals',
    'EV charging station monitors, racing telemetry, and connected car companion apps',
    'Multi-framework enterprise applications (React, Vue, Angular, Web Components)'
  ],
  avoidFor: [
    'B2B clinical medical records'
  ],
  strengths: [
    'Unsurpassed luxury automotive craftsmanship and visual polish',
    'True multi-framework Web Component architecture with native wrappers for React, Angular, and Vue',
    'First-class dark and high-contrast automotive themes'
  ],
  weaknesses: [
    'Distinctive Porsche automotive brand identity'
  ],
  tags: [
    'porsche',
    'automotive',
    'luxury',
    'web-components',
    'react',
    'vue',
    'angular',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Porsche Design System', 'PDS', 'Porsche UI'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @porsche-design-system/components-js',
      packages: ['@porsche-design-system/components-js'],
      setupInstructions: 'Initialize Porsche Design System components via `load({ prefix: "p" });`.'
    },
    react: {
      command: 'npm install @porsche-design-system/components-react',
      packages: ['@porsche-design-system/components-react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<p-button>',
      description: 'Porsche action button with variant="primary" | "secondary" | "tertiary".',
      importExample: '<p-button variant="primary">Configure 911 GT3</p-button>',
      docSubUrl: 'components/button/'
    },
    carousel: {
      canonicalName: '<p-carousel>',
      description: 'High-performance automotive photo carousel.',
      importExample: '<p-carousel heading="Exterior Colors"></p-carousel>',
      docSubUrl: 'components/carousel/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<p-*>` custom elements or `@porsche-design-system/components-react` components.',
      'Maintain luxury automotive whitespace and precision typography.',
      'Use Porsche Red (#d5001c) sparingly for high-impact CTA focus.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Porsche theme attributes (`theme="dark"`, `theme="light"`).',
    iconUsage: 'Use `<p-icon name="steering-wheel"></p-icon>`.',
    layoutConventions: 'Use Porsche grid and content wrappers.'
  }
};
