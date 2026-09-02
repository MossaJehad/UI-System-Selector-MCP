import { UISystem } from '../../schemas/uiSystem.js';

export const paperCss: UISystem = {
  id: 'paper-css',
  name: 'PaperCSS',
  organization: 'PaperCSS Community',
  description: 'The less-formal, hand-drawn sketch CSS framework that makes web applications look like pencil-drawn notebook sketches with uneven borders, playful typography, and whimsical charm.',
  category: 'retro',
  secondaryCategories: ['styled', 'experimental'],
  frameworks: ['css-only', 'vanilla', 'react', 'vue', 'svelte', 'solid', 'angular'],
  stylingApproach: 'vanilla-css',
  packageNames: ['papercss'],
  docsUrl: 'https://www.getpapercss.com',
  repositoryUrl: 'https://github.com/papercss/papercss',
  license: 'ISC',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: false,
    notes: 'CSS classes on semantic HTML markup.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    format: 'CSS Classes'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Hand-drawn notebook sketch with wobbly pencil borders, paper texture backgrounds, and indie zine charm.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Wireframes, design mockups, and early ideation prototypes',
    'Personal blogs, indie dev logs, and zines',
    'Educational apps, creative writing tools, and whimsical notebook apps'
  ],
  avoidFor: [
    'Strict corporate enterprise applications'
  ],
  strengths: [
    'Pure CSS with zero JS runtime dependencies',
    'Charming, informal, hand-drawn look that stands out completely from generic SaaS',
    'Built-in responsive grid system with sketch borders'
  ],
  weaknesses: [
    'Unique informal aesthetic not suitable for corporate apps'
  ],
  tags: [
    'sketch',
    'hand-drawn',
    'paper',
    'wireframe',
    'playful',
    'css-only',
    'unusual'
  ],
  installation: {
    generic: {
      command: 'npm install papercss',
      packages: ['papercss'],
      setupInstructions: 'Import `papercss/dist/paper.min.css` in your project.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '.btn-primary',
      description: 'Hand-drawn sketch button with uneven pencil borders.',
      importExample: '<button class="btn-primary">Sketch Idea</button>',
      docSubUrl: ''
    },
    card: {
      canonicalName: '.card',
      description: 'Paper card container with sketched borders.',
      importExample: '<div class="card" style="width: 20rem;"><div class="card-body"><h4 class="card-title">My Note</h4><p class="card-text">Content</p></div></div>',
      docSubUrl: ''
    }
  },
  aiInstructions: {
    principles: [
      'Import `papercss/dist/paper.min.css`.',
      'Use PaperCSS classes (`.card`, `.btn-*`, `.paper-input`, `.row`, `.col`).',
      'Maintain the hand-drawn, informal wireframe style.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'sharp corporate styling'],
    themingGuide: 'Standard paper texture and sketch styles.',
    iconUsage: 'Use hand-drawn style SVG icons.',
    layoutConventions: 'Use row and col-sm/col-md for responsive sketch layouts.'
  }
};
