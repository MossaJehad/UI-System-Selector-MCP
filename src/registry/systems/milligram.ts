import { UISystem } from '../../schemas/uiSystem.js';

export const milligram: UISystem = {
  id: 'milligram',
  name: 'Milligram',
  organization: 'CJ Patoilo / Milligram Community',
  description: 'An open-source, minimalist CSS framework providing a lightweight (~2KB gzipped) starting point based on Flexbox and modern CSS norms, designed for fast performance and clean typography.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['milligram'],
  docsUrl: 'https://milligram.io',
  repositoryUrl: 'https://github.com/milligram/milligram',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible baseline typography.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Minimalist Sass variables and CSS classes.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Ultra-minimalist typography and clean purple (#9b4dca) accents: clean sans-serif type, lightweight buttons, minimalist blockquotes, and flexbox columns.',
  noveltyLevel: 'established',
  bestFor: [
    'Ultra-minimalist static websites, markdown blogs, and lightweight web apps (<2KB total CSS)',
    'Clean typography and form baseline reset for custom CSS design systems',
    'Developers wanting a microscopic CSS footprint'
  ],
  avoidFor: [
    'Feature-heavy dashboards needing complex pre-built interactive tabs and modals'
  ],
  strengths: [
    'One of the smallest CSS frameworks ever created (~2KB gzipped)',
    'Modern Flexbox grid (`.row`, `.column`) without bloated utility classes',
    'Clean, elegant default typography and form controls'
  ],
  weaknesses: [
    'Minimalist by design: no JavaScript components'
  ],
  tags: [
    'milligram',
    'minimalist',
    'css-framework',
    'lightweight',
    'pure-css',
    'flexbox',
    'established'
  ],
  aliases: ['Milligram', 'Milligram CSS', 'Milligram.io'],
  relatedSystems: ['pure-css', 'pico-css', 'skeleton-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install milligram',
      packages: ['milligram'],
      setupInstructions: 'Import `milligram/dist/milligram.min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Milligram button with button-outline or button-clear modifier.',
      importExample: '<button class="button button-outline">Action</button>',
      docSubUrl: '#buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic HTML with Milligram classes (`button`, `button-outline`, `container`, `row`, `column`).',
      'Use `.column-50`, `.column-25`, `.column-offset-25` for column grid layout.',
      'Add custom CSS on top of Milligram baseline styling.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Configure Sass variables (`$color-primary: #9b4dca`).',
    iconUsage: 'Embed inline SVG icons.',
    layoutConventions: 'Use `.container`, `.row`, and `.column`.'
  }
};
