import { UISystem } from '../../schemas/uiSystem.js';

export const ninetyEightCss: UISystem = {
  id: '98-css',
  name: '98.css',
  organization: 'Jordan Scales (jdan)',
  description: 'A retro CSS design system for building faithful Windows 98 user interfaces with authentic beveled buttons, window title bars, tree views, tabs, scrollbars, and classic dialogs.',
  category: 'retro',
  secondaryCategories: ['styled', 'experimental'],
  frameworks: ['css-only', 'vanilla', 'react', 'vue', 'svelte', 'solid', 'angular'],
  stylingApproach: 'vanilla-css',
  packageNames: ['98.css'],
  docsUrl: 'https://jdan.github.io/98.css',
  repositoryUrl: 'https://github.com/jdan/98.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: false,
    notes: 'Relies on native semantic HTML elements (<button>, <input>, <fieldset>).'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    format: 'CSS Custom Properties'
  },
  icons: {
    available: false,
    name: 'Retro Windows 98 SVG / ICO icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Authentic 1998 Windows 98 retro desktop: gray beveled surfaces, teal window bars, pixel fonts, classic scrollbars.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Retro web apps, nostalgic portfolios, and vintage gaming tools',
    'Novelty developer toys, Easter eggs, and desktop emulators',
    'Interactive 90s OS simulations and meme projects'
  ],
  avoidFor: [
    'Serious corporate enterprise SaaS',
    'Modern mobile-first consumer apps'
  ],
  strengths: [
    'Pure CSS with zero JavaScript dependencies',
    'Works with native HTML elements (<button>, <input type="checkbox">, <fieldset>)',
    'Pixel-perfect faithful recreation of Windows 98 OS UI'
  ],
  weaknesses: [
    'Strict retro aesthetic not suitable for general business apps',
    'No built-in JS state management for window dragging'
  ],
  tags: [
    'retro',
    'windows-98',
    '90s',
    'nostalgia',
    'css-only',
    'pixel-art',
    'desktop',
    'unusual'
  ],
  installation: {
    generic: {
      command: 'npm install 98.css',
      packages: ['98.css'],
      setupInstructions: 'Import `98.css/dist/98.css` into your stylesheet.'
    }
  },
  componentGuidance: {
    window: {
      canonicalName: '.window',
      description: 'Classic Windows 98 window frame with title bar and minimize/maximize/close controls.',
      importExample: '<div class="window" style="width: 300px;"><div class="title-bar"><div class="title-bar-text">My Computer</div><div class="title-bar-controls"><button aria-label="Close"></button></div></div><div class="window-body"><p>Content</p></div></div>',
      docSubUrl: ''
    }
  },
  aiInstructions: {
    principles: [
      'Import `98.css`.',
      'Use semantic HTML with `.window`, `.title-bar`, and standard `<button>` tags.',
      'Maintain compact retro desktop window layouts.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'tailwind modern rounded styles'],
    themingGuide: 'Standard Windows 98 gray theme.',
    iconUsage: 'Use vintage 16x16 pixelated icons.',
    layoutConventions: 'Window containers with title-bar and window-body.'
  }
};
