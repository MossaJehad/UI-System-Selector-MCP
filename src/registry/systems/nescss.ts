import { UISystem } from '../../schemas/uiSystem.js';

export const nesCss: UISystem = {
  id: 'nes-css',
  name: 'NES.css',
  organization: 'nostalgic-css',
  description: 'An 8-bit NES console-style pure CSS framework with pixelated borders, retro gaming dialog balloons, pixel art buttons, progress bars, and classic gaming icons.',
  category: 'retro',
  secondaryCategories: ['styled', 'experimental'],
  frameworks: ['css-only', 'vanilla', 'react', 'vue', 'svelte', 'solid', 'angular'],
  stylingApproach: 'vanilla-css',
  packageNames: ['nes.css'],
  docsUrl: 'https://nostalgic-css.github.io/NES.css',
  repositoryUrl: 'https://github.com/nostalgic-css/NES.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: false,
    notes: 'Pure CSS classes on standard HTML elements.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: false,
    format: 'CSS Classes'
  },
  icons: {
    available: true,
    packageName: 'nes.css',
    name: 'Built-in 8-bit pixel icons (nes-icon)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: '8-bit retro gaming NES nostalgia: pixelated borders, speech balloons, chunky pixel buttons, Press Start 2P font.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Web games, gaming leaderboards, and gamified apps',
    'Hackathons, retro gaming blogs, and playful creative portfolios',
    'Interactive 8-bit RPG style UI experiments'
  ],
  avoidFor: [
    'Enterprise corporate business software'
  ],
  strengths: [
    'Pure CSS with zero JS runtime dependencies',
    'Iconic 8-bit pixelated aesthetic that delights users',
    'Built-in speech balloons (`nes-balloon`) and retro reaction icons'
  ],
  weaknesses: [
    'Extremely specific gaming aesthetic'
  ],
  tags: [
    'retro',
    '8-bit',
    'nes',
    'gaming',
    'pixel-art',
    'playful',
    'css-only',
    'unusual'
  ],
  installation: {
    generic: {
      command: 'npm install nes.css',
      packages: ['nes.css'],
      setupInstructions: 'Import `nes.css/css/nes.min.css` and load the "Press Start 2P" Google Font.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '.nes-btn',
      description: '8-bit pixel button with .is-primary | .is-success | .is-warning | .is-error.',
      importExample: '<button type="button" class="nes-btn is-primary">Start Game</button>',
      docSubUrl: ''
    },
    balloon: {
      canonicalName: '.nes-balloon',
      description: 'Retro RPG dialog speech bubble.',
      importExample: '<div class="nes-balloon from-left"><p>Hello! Welcome to the quest.</p></div>',
      docSubUrl: ''
    }
  },
  aiInstructions: {
    principles: [
      'Import `nes.css/css/nes.min.css`.',
      'Use `nes-btn`, `nes-container`, `nes-balloon`, `nes-input` classes.',
      'Pair with "Press Start 2P" pixel font for full immersion.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'tailwind smooth rounding'],
    themingGuide: 'Use `.nes-container.is-dark` for dark theme containers.',
    iconUsage: 'Use `<i class="nes-icon is-medium heart"></i>` or coin/trophy icons.',
    layoutConventions: 'Use nes-container with nes-btn and speech balloons.'
  }
};
