import { UISystem } from '../../schemas/uiSystem.js';

export const react95: UISystem = {
  id: 'react95',
  name: 'React95',
  organization: 'React95 Community',
  description: 'An open-source, nostalgic Windows 95 UI component library for React, crafted with styled-components, pixel-perfect beveled borders, retro window title bars, start menu popups, desktop icons, and nostalgic sound effects.',
  category: 'retro',
  secondaryCategories: ['creative-tool', 'consumer', 'experimental'],
  frameworks: ['react'],
  stylingApproach: 'styled-components',
  packageNames: ['react95', 'styled-components'],
  docsUrl: 'https://react95.io',
  repositoryUrl: 'https://github.com/react95/react95',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Prioritizes pixel-perfect Windows 95 aesthetic authenticity over strict modern WCAG compliance.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Windows 95 classic theme objects in styled-components',
    packageName: 'react95'
  },
  icons: {
    available: true,
    packageName: '@react95/icons',
    name: 'Windows 95 Pixel Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Authentic 1995 desktop computing aesthetic: teal desktop background (#008080), classic Windows gray (#c0c0c0), beveled drop-shadow 3D borders, Start menu button, and pixelated desktop folder icons.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Retro developer portfolio websites, nostalgic music players, and interactive art projects',
    'Indie games, web-based operating system simulations, and 90s nostalgia web apps',
    'Interactive developer playgrounds showcasing vintage UI'
  ],
  avoidFor: [
    'Corporate enterprise banking applications',
    'High-compliance public sector portals'
  ],
  strengths: [
    'The premier React component library for authentic Windows 95 UI simulation',
    'Rich nostalgic components: Window, WindowHeader, WindowContent, AppBar, Toolbar, Cutout, List',
    'Multiple vintage themes (Original Windows 95, Tokyo Dark, Millenium, Rainy Day, Rose)'
  ],
  weaknesses: [
    'Niche retro aesthetic not intended for modern enterprise apps'
  ],
  tags: [
    'react95',
    'retro',
    'windows-95',
    'nostalgia',
    'pixel-art',
    '90s',
    'styled-components',
    'niche-retro'
  ],
  aliases: ['React95', 'React 95', 'Win95 React'],
  relatedSystems: ['98-css', 'xp-css', 'nes-css'],
  systemTypes: ['component-library', 'retro'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install react95 styled-components @react95/icons',
      packages: ['react95', 'styled-components', '@react95/icons'],
      peerDependencies: ['react', 'react-dom', 'styled-components'],
      setupInstructions: 'Wrap your app in `<ThemeProvider theme={original}>` and `<GlobalStyles />` from `react95`.'
    }
  },
  componentGuidance: {
    window: {
      canonicalName: 'Window',
      description: 'Windows 95 draggable window with title bar, minimize/maximize/close buttons.',
      importExample: "import { Window, WindowHeader, WindowContent, Button } from 'react95';\n\n<Window style={{ width: 400 }}><WindowHeader className=\"window-title\"><span>My Computer</span><Button><span>✕</span></Button></WindowHeader><WindowContent>Retro content</WindowContent></Window>",
      docSubUrl: '?path=/docs/components-window--default'
    },
    button: {
      canonicalName: 'Button',
      description: 'Windows 95 beveled 3D button.',
      importExample: "import { Button } from 'react95';\n\n<Button>Start</Button>",
      docSubUrl: '?path=/docs/components-button--default'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<ThemeProvider theme={original}>` and `<GlobalStyles />`.',
      'Use `Window`, `WindowHeader`, and `WindowContent` for desktop window framing.',
      'Use `Cutout` for recessed retro text areas and screens.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'tailwindcss'],
    themingGuide: 'Choose from React95 vintage themes (`original`, `tokyoDark`, `matrix`, `millenium`).',
    iconUsage: 'Use `@react95/icons` for authentic pixel icons.',
    layoutConventions: 'Simulate desktop windows and taskbars.'
  }
};
