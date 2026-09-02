import { UISystem } from '../../schemas/uiSystem.js';

export const skeletonCss: UISystem = {
  id: 'skeleton-css',
  name: 'Skeleton (Minimal Boilerplate CSS)',
  organization: 'Dave Gamache / Skeleton CSS Community',
  description: 'The legendary, ultra-lightweight (~400 lines / ~2KB) responsive CSS boilerplate and grid system created by Dave Gamache, providing a minimalist 12-column mobile-friendly grid, buttons, forms, and typography baseline.',
  category: 'css-framework',
  secondaryCategories: ['unstyled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['skeleton-css'],
  docsUrl: 'http://getskeleton.com',
  repositoryUrl: 'https://github.com/dhg/Skeleton',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible baseline focus styles.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Pure CSS minimalist boilerplate classes.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Classic minimalist web typography and 12-column grid: clean buttons (`button-primary`), input fields, table lists, and responsive columns (`six columns`, `twelve columns`).',
  noveltyLevel: 'established',
  bestFor: [
    'Tiny landing pages, micro-sites, and quick HTML prototypes wanting a ~400-line CSS foundation',
    'Developers wanting the original, timeless 12-column CSS boilerplate',
    'Projects requiring minimal code with zero build steps'
  ],
  avoidFor: [
    'Complex modern SPAs wanting pre-built components (tabs, modals, drawers)'
  ],
  strengths: [
    'One of the most famous and influential minimalist CSS boilerplates in web history',
    'Under 400 lines of unminified CSS: easy to read and understand in 5 minutes',
    'Intuitive 12-column grid syntax (`one column`, `six columns`, `twelve columns`)'
  ],
  weaknesses: [
    'Created in the float-grid era; modern projects often prefer flexbox/grid'
  ],
  tags: [
    'skeleton-css',
    'boilerplate',
    'minimalist',
    'css-framework',
    'lightweight',
    '12-column',
    'established'
  ],
  aliases: ['Skeleton CSS', 'Skeleton Boilerplate', 'getskeleton'],
  relatedSystems: ['milligram', 'pure-css', 'pico-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install skeleton-css # or download skeleton.css',
      packages: ['skeleton-css'],
      setupInstructions: 'Import `skeleton-css/css/normalize.css` and `skeleton-css/css/skeleton.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'button',
      description: 'Skeleton button with .button-primary modifier.',
      importExample: '<button class="button-primary">Click Me</button>',
      docSubUrl: '#buttons'
    },
    grid: {
      canonicalName: 'row',
      description: 'Skeleton 12-column grid row with column width classes.',
      importExample: '<div class="row"><div class="six columns">Left</div><div class="six columns">Right</div></div>',
      docSubUrl: '#grid'
    }
  },
  aiInstructions: {
    principles: [
      'Use Skeleton container, row, and column classes (`.container`, `.row`, `.six.columns`).',
      'Use `.button-primary` for primary call-to-action buttons.',
      'Add custom CSS rules on top of Skeleton’s clean baseline.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Override Skeleton CSS declarations directly.',
    iconUsage: 'Embed inline SVG icons.',
    layoutConventions: 'Use `.container`, `.row`, and `.[number].columns`.'
  }
};
