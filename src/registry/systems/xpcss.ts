import { UISystem } from '../../schemas/uiSystem.js';

export const xpCss: UISystem = {
  id: 'xp-css',
  name: 'XP.css',
  organization: 'botoxparty',
  description: 'An extension of 98.css crafted to replicate the vibrant Luna theme of Windows XP with rounded blue window bars, glossy buttons, green start button, and authentic early-2000s desktop UI styling.',
  category: 'retro',
  secondaryCategories: ['styled', 'experimental'],
  frameworks: ['css-only', 'vanilla', 'react', 'vue', 'svelte', 'solid', 'angular'],
  stylingApproach: 'vanilla-css',
  packageNames: ['xp.css'],
  docsUrl: 'https://botoxparty.github.io/XP.css',
  repositoryUrl: 'https://github.com/botoxparty/XP.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: false,
    notes: 'Relies on native semantic HTML elements.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    format: 'Pure CSS'
  },
  icons: {
    available: false,
    name: 'Windows XP Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Windows XP Luna blue aesthetic: glossy buttons, royal blue title bars, green start button accents, 2000s nostalgia.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Windows XP desktop simulations and vintage tech demonstrations',
    'Nostalgic portfolio sites and interactive web art',
    'Novelty retro audio players (Winamp style) and game launchers'
  ],
  avoidFor: [
    'Standard corporate business websites'
  ],
  strengths: [
    'Pure CSS with zero JS runtime overhead',
    'Faithful replication of the iconic Windows XP Luna interface',
    'Works with standard HTML semantic tags'
  ],
  weaknesses: [
    'Highly specialized vintage aesthetic'
  ],
  tags: [
    'retro',
    'windows-xp',
    '2000s',
    'nostalgia',
    'css-only',
    'desktop',
    'unusual'
  ],
  installation: {
    generic: {
      command: 'npm install xp.css',
      packages: ['xp.css'],
      setupInstructions: 'Import `xp.css/dist/XP.css` in your project.'
    }
  },
  componentGuidance: {
    window: {
      canonicalName: '.window',
      description: 'Windows XP style window frame with blue Luna title bar.',
      importExample: '<div class="window" style="width: 320px;"><div class="title-bar"><div class="title-bar-text">Windows Media Player</div><div class="title-bar-controls"><button aria-label="Close"></button></div></div><div class="window-body"><p>Content</p></div></div>',
      docSubUrl: ''
    }
  },
  aiInstructions: {
    principles: [
      'Import `xp.css`.',
      'Use `.window`, `.title-bar`, and standard HTML elements.',
      'Emulate early 2000s desktop layout conventions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Classic Windows XP Luna theme.',
    iconUsage: 'Use Windows XP 32x32 SVG or PNG icons.',
    layoutConventions: 'Window containers with title-bar and window-body.'
  }
};
