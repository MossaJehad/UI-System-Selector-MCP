import { UISystem } from '../../schemas/uiSystem.js';

export const terminalCss: UISystem = {
  id: 'terminal-css',
  name: 'Terminal.css (TUI Terminal Aesthetic)',
  organization: 'Genshin / Terminal.css Community',
  description: 'An open-source, modern, lightweight (~3KB) CSS framework inspired by retro terminal command lines, featuring monospace typography, green/amber CRT phosphor glow, ASCII box-drawing characters, and retro console styling.',
  category: 'retro',
  secondaryCategories: ['developer-tool', 'css-framework', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['terminal.css'],
  docsUrl: 'https://terminalcss.xyz',
  repositoryUrl: 'https://github.com/gbl/terminal.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'High-contrast monochrome and phosphor color schemes with accessible semantic HTML tags.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties for terminal font and colors',
    packageName: 'terminal.css'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Retro CRT command-line terminal aesthetic: pitch black background (#000000), bright phosphor green / amber text (#00ff00 / #ffb000), monospace typography, blinking block cursors, and ASCII box-drawn border frames.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Developer terminal portfolios, CLI tool web dashboards, and hacker blogs',
    'Text-based games, cyberpunk websites, and retro computing applications',
    'Lightweight websites wanting an authentic VT100 / ANSI terminal look'
  ],
  avoidFor: [
    'Mainstream consumer e-commerce storefronts'
  ],
  strengths: [
    'Instant terminal TUI look with pure semantic HTML and minimal classes',
    'Tiny footprint (~3KB gzipped) with zero JavaScript dependencies',
    'Rich terminal components (Terminal Card, Monospace Tables, Prompt Inputs, ASCII Alerts)'
  ],
  weaknesses: [
    'Terminal aesthetic domain specialization'
  ],
  tags: [
    'terminal-css',
    'terminal',
    'tui',
    'cli',
    'monospace',
    'cyberpunk',
    'retro',
    'niche-retro'
  ],
  aliases: ['Terminal.css', 'Terminal CSS', 'Terminal UI'],
  relatedSystems: ['nes-css', '98-css', 'arwes'],
  systemTypes: ['retro', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install terminal.css',
      packages: ['terminal.css'],
      setupInstructions: 'Import `terminal.css/dist/terminal.min.css` in your project.'
    }
  },
  componentGuidance: {
    card: {
      canonicalName: 'terminal-card',
      description: 'Monospace terminal card with ASCII header and border.',
      importExample: '<div class="terminal-card"><header>SYSTEM STATUS</header><div>ALL NODES OPERATIONAL</div></div>',
      docSubUrl: '#components'
    },
    button: {
      canonicalName: 'btn',
      description: 'Monospace terminal button with hover invert.',
      importExample: '<button class="btn btn-default">EXECUTE</button>',
      docSubUrl: '#components'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic HTML with Terminal.css classes (`terminal-card`, `terminal-prompt`, `btn`).',
      'Use monospace typography and uppercase headers for terminal realism.',
      'Apply dark background (`#000000` or `#1a1a1a`) with green or amber phosphor text.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS variables (`--primary-color`, `--background-color`).',
    iconUsage: 'Use ASCII/Unicode characters (e.g. `[x]`, `[>]`, `[+]`).',
    layoutConventions: 'Use `.container` with terminal grid structure.'
  }
};
