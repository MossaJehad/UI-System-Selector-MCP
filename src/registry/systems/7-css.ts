import { UISystem } from '../../schemas/uiSystem.js';

export const sevenCss: UISystem = {
  id: '7-css',
  name: '7.css (Windows 7 Aero Glass CSS)',
  organization: 'Khaled Hosseini / 7.css Community',
  description: 'An open-source CSS framework replicating the iconic Windows 7 Aero Glass design language, featuring translucent glass window frames, skeuomorphic gloss buttons, animated taskbars, balloon tooltips, and classic Windows 7 UI elements.',
  category: 'retro',
  secondaryCategories: ['creative-tool', 'experimental', 'css-framework'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['7.css'],
  docsUrl: 'https://khang-nd.github.io/7.css',
  repositoryUrl: 'https://github.com/khang-nd/7.css',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Prioritizes faithful Windows 7 Aero skeuomorphic authenticity over modern WCAG compliance.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Windows 7 Aero CSS classes.'
  },
  icons: {
    available: true,
    name: 'Windows 7 System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Authentic 2009 Windows 7 Aero Glass aesthetic: translucent blurred window title bars, glossy blue buttons with reflective highlights, skeuomorphic slider tracks, and start orb buttons.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Frutiger Aero and 2000s nostalgia websites, music visualizers, and retro developer portfolios',
    'Interactive desktop simulations, web games, and nostalgic UI art projects',
    'Playful creative web experiments'
  ],
  avoidFor: [
    'Conservative corporate banking portals'
  ],
  strengths: [
    'The premier CSS framework for authentic Windows 7 Aero Glass recreation',
    'Pure CSS: zero JavaScript dependencies with faithful skeuomorphic rendering',
    'Rich nostalgic components (Aero Window, Balloon Tooltip, Glossy Button, Taskbar, Tabs)'
  ],
  weaknesses: [
    'Niche skeuomorphic aesthetic not intended for modern enterprise business apps'
  ],
  tags: [
    '7-css',
    'windows-7',
    'aero-glass',
    'frutiger-aero',
    'retro',
    'skeuomorphism',
    'niche-retro'
  ],
  aliases: ['7.css', 'Windows 7 CSS', 'Seven CSS', 'Aero CSS'],
  relatedSystems: ['98-css', 'xp-css', 'react95'],
  systemTypes: ['retro', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install 7.css',
      packages: ['7.css'],
      setupInstructions: 'Import `7.css/dist/7.css` in your project stylesheet.'
    }
  },
  componentGuidance: {
    window: {
      canonicalName: 'window',
      description: 'Windows 7 Aero Glass window with title bar and minimize/maximize/close controls.',
      importExample: '<div class="window active glass" style="width: 400px"><div class="title-bar"><div class="title-bar-text">Control Panel</div><div class="title-bar-controls"><button aria-label="Minimize"></button><button aria-label="Maximize"></button><button aria-label="Close"></button></div></div><div class="window-body"><p>Aero content</p></div></div>',
      docSubUrl: '#window'
    }
  },
  aiInstructions: {
    principles: [
      'Import `7.css/dist/7.css`.',
      'Use `.window.glass` for translucent Aero title bar effects.',
      'Use standard Windows 7 form controls and balloon tooltips.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'tailwindcss'],
    themingGuide: 'Use Aero glass classes and Windows 7 background wallpapers.',
    iconUsage: 'Use vintage Windows 7 PNG/ICO icons.',
    layoutConventions: 'Simulate desktop window positioning and taskbars.'
  }
};
