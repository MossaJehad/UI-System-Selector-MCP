import { UISystem } from '../../schemas/uiSystem.js';

export const webtui: UISystem = {
  id: 'webtui',
  name: 'WebTUI (Terminal User Interface for Web)',
  organization: 'WebTUI Community',
  description: 'An open-source CSS and component library designed for creating authentic Terminal User Interfaces (TUI), ASCII box-drawing frames, command-line interfaces (CLI) in the browser, and retro VT100/ANSI terminal web applications.',
  category: 'retro',
  secondaryCategories: ['developer-tool', 'minimalist', 'creative-tool'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react'],
  stylingApproach: 'vanilla-css',
  packageNames: ['webtui'],
  docsUrl: "https://github.com/webtui/webtui",
  repositoryUrl: 'https://github.com/webtui/webtui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Monospace high-contrast layout with full keyboard navigation support.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'ANSI / VT100 terminal color palette in CSS custom properties',
    packageName: 'webtui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Authentic ANSI/VT100 Terminal UI aesthetic: ASCII box-drawing border characters (`┌─┐`, `│ │`, `└─┘`), monospace fonts, blinking block cursors, CRT phosphor green/amber themes, and keyboard menu selectors.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Terminal simulators, command-line web apps, interactive developer portfolios, and Hacker News / BBS style tools',
    'Interactive TUI dashboards, ASCII gaming interfaces, and sysadmin web toys',
    'Developers who love terminal aesthetics (curses, blessed, textual) on the web'
  ],
  avoidFor: [
    'Modern corporate consumer mobile apps'
  ],
  strengths: [
    'Authentic ASCII box-drawing border characters and TUI layout mechanics in the browser',
    'Full keyboard-driven navigation (arrow keys, hotkeys, modal overlays)',
    'Zero heavy dependencies: pure CSS & lightweight JS'
  ],
  weaknesses: [
    'Strict terminal monospace TUI aesthetic'
  ],
  tags: [
    'webtui',
    'terminal',
    'tui',
    'ascii',
    'monospace',
    'cli',
    'retro',
    'niche-retro'
  ],
  aliases: ["WebTUI", "Web TUI", "Terminal UI Web", "Web TUI CSS"],
  relatedSystems: ['terminal-css', 'react95', '98-css'],
  systemTypes: ['retro', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install webtui',
      packages: ['webtui'],
      setupInstructions: 'Link `webtui/dist/webtui.min.css` in your HTML `<head>`.'
    }
  },
  componentGuidance: {
    window: {
      canonicalName: 'tui-window',
      description: 'ASCII terminal window with titlebar and box-drawing borders.',
      importExample: '<div class="tui-window"><div class="tui-window-title">System Status</div><div class="tui-window-body"><p>CPU: 12% | RAM: 4.2GB</p></div></div>',
      docSubUrl: 'docs/window'
    }
  },
  aiInstructions: {
    principles: [
      'Use WebTUI terminal components (`tui-window`, `tui-button`, `tui-input`, `tui-menu`).',
      'Use monospace typography and ANSI terminal color tokens.',
      'Provide keyboard shortcuts and arrow-key navigation.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure ANSI color custom properties (`--tui-bg: #000; --tui-fg: #00ff00;`).',
    iconUsage: 'Use ASCII symbols (e.g. `[x]`, `[o]`, `->`).',
    layoutConventions: 'Use monospace grid and box-drawing frames.'
  }
};
