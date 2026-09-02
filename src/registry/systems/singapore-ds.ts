import { UISystem } from '../../schemas/uiSystem.js';

export const singaporeDs: UISystem = {
  id: 'singapore-ds',
  name: 'Singapore Government Design System (SGDS)',
  organization: 'Government Technology Agency of Singapore (GovTech)',
  description: 'Singapore’s official design system for public digital services, providing accessible Web Components, React components, and design tokens tailored for citizen-centric digital portals.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'web-components'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@govtechsg/sgds-web-component', '@govtechsg/sgds-react'],
  docsUrl: 'https://designsystem.tech.gov.sg',
  repositoryUrl: 'https://github.com/GovTechSG/sgds-web-component',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Complies with Singapore Digital Service Standards (DSS) and WCAG 2.1 AA.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties / Sass variables',
    packageName: '@govtechsg/sgds-web-component'
  },
  icons: {
    available: true,
    packageName: '@govtechsg/sgds-web-component',
    name: 'Boxicons integration via SGDS'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern, clean, high-density Asian civic aesthetic featuring Singapore Red accents and official SG Masthead banner.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Singapore statutory board and ministry digital portals',
    'Citizen identity, grant application, and municipal service workflows',
    'Web Component-based government applications'
  ],
  avoidFor: [
    'Gaming and streaming entertainment applications'
  ],
  strengths: [
    'Official SG Masthead (`sgds-masthead`) for authentic government verification',
    'Standards-based W3C Web Components and official React bindings',
    'Streamlined form controls and stepper patterns'
  ],
  weaknesses: [
    'Singapore government-specific masthead and branding'
  ],
  tags: [
    'government',
    'singapore',
    'govtech',
    'sgds',
    'web-components',
    'accessible',
    'public-sector',
    'hidden-gem'
  ],
  aliases: ['SGDS', 'Singapore Design System', 'GovTech SGDS'],
  systemTypes: ['government', 'design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @govtechsg/sgds-web-component',
      packages: ['@govtechsg/sgds-web-component'],
      setupInstructions: 'Import `@govtechsg/sgds-web-component` and link SGDS stylesheet in your page.'
    },
    react: {
      command: 'npm install @govtechsg/sgds-react',
      packages: ['@govtechsg/sgds-react'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    masthead: {
      canonicalName: '<sgds-masthead>',
      description: 'Official Singapore Government Masthead element.',
      importExample: '<sgds-masthead></sgds-masthead>',
      docSubUrl: 'components/masthead'
    },
    button: {
      canonicalName: '<sgds-button>',
      description: 'SGDS accessible action button.',
      importExample: '<sgds-button variant="primary">Submit Application</sgds-button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Include `<sgds-masthead>` at the top of Singapore government web applications.',
      'Use `<sgds-*>` web components or `@govtechsg/sgds-react` wrapper components.',
      'Adhere to Singapore DSS accessibility guidelines.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via SGDS CSS variables (--sgds-primary, --sgds-body-color).',
    iconUsage: 'Use Boxicons or SGDS built-in icon components.',
    layoutConventions: 'Use standard container and grid structures provided by SGDS.'
  }
};
