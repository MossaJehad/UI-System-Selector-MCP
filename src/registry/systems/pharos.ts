import { UISystem } from '../../schemas/uiSystem.js';

export const pharos: UISystem = {
  id: 'pharos',
  name: 'JSTOR Pharos',
  organization: 'ITHAKA / JSTOR',
  description: 'JSTOR’s official open-source Web Component design system, engineered for academic research portals, digital library archives, scholarly journal readers, and citation management.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'web-components', 'accessibility-focused'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@ithaka/pharos', '@ithaka/pharos-site'],
  docsUrl: 'https://pharos.jstor.org',
  repositoryUrl: 'https://github.com/ithaka/pharos',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA with specialized testing for academic research readability.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and ITHAKA typography scale',
    packageName: '@ithaka/pharos'
  },
  icons: {
    available: true,
    packageName: '@ithaka/pharos',
    name: 'Pharos Academic & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Scholarly, dignified academic library aesthetic: JSTOR Crimson / Brick (#990000), serif book typography, citation export drawers, and PDF reader toolbars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Digital libraries, academic journal portals, and scientific archives',
    'Scholarly search engines, citation generators, and thesis repository tools',
    'Web Component based research platforms'
  ],
  avoidFor: [
    'Fast-paced fintech stock ticker screens'
  ],
  strengths: [
    'Lit-based W3C standard Web Components with official React wrappers',
    'Specialized scholarly reading patterns: citations, academic journal headers, thumbnail carousels',
    'High readability typography optimized for dense academic reading'
  ],
  weaknesses: [
    'Academic publishing domain specialization'
  ],
  tags: [
    'jstor',
    'pharos',
    'academic',
    'library',
    'research',
    'web-components',
    'lit',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Pharos', 'JSTOR Design System', 'ITHAKA Pharos'],
  systemTypes: ['company-design-system', 'web-components'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @ithaka/pharos',
      packages: ['@ithaka/pharos'],
      setupInstructions: 'Import `@ithaka/pharos/lib/styles/pharos.css` and register web components (e.g. `import "@ithaka/pharos/lib/components/button/pharos-button"`).'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '<pharos-button>',
      description: 'Pharos action button with variant="primary" | "secondary" | "subtle".',
      importExample: '<pharos-button variant="primary">Download PDF</pharos-button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<pharos-*>` custom elements in HTML templates.',
      'Import Pharos CSS custom properties for color and typography.',
      'Provide accessible citation and reader controls.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Pharos design tokens (--pharos-color-brand-primary, --pharos-font-family-serif).',
    iconUsage: 'Use `<pharos-icon name="cite"></pharos-icon>`.',
    layoutConventions: 'Use standard academic reading layout containers.'
  }
};
