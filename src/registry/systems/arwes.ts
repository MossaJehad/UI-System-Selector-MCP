import { UISystem } from '../../schemas/uiSystem.js';

export const arwes: UISystem = {
  id: 'arwes',
  name: 'Arwes (Futuristic Sci-Fi UI)',
  organization: 'Arwes Community (Romel Pérez)',
  description: 'An open-source, futuristic, cyberpunk / sci-fi UI framework for React and Web, engineered with sound effects (Howler.js), glowing neon vectors, animated frame drawing lines, holograms, and HUD monitors inspired by cyberpunk and sci-fi films.',
  category: 'retro',
  secondaryCategories: ['creative-tool', 'experimental', 'styled'],
  frameworks: ['react', 'vanilla', 'html-css'],
  stylingApproach: 'emotion',
  packageNames: ['@arwes/react', '@arwes/sounds', '@arwes/frames', '@arwes/bleeps'],
  docsUrl: 'https://arwes.dev',
  repositoryUrl: 'https://github.com/arwes/arwes',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Prioritizes immersive cyberpunk and sci-fi aesthetic with sound effects and SVG frame drawing.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Arwes theme tokens (cyan, neon green, titanium)',
    packageName: '@arwes/react'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'High-tech cyberpunk and sci-fi HUD aesthetic: glowing cyan (#00f8f8) and neon amber vector frames, animated SVG line drawing, mechanical bleep sound effects, scanline grid overlays, and holographic card frames.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Sci-fi games, cyberpunk web applications, and space mission simulators',
    'High-tech creative developer portfolios and interactive audio-visual experiences',
    'Interactive web applications wanting cinematic sound effects and futuristic glowing HUDs'
  ],
  avoidFor: [
    'Corporate accounting dashboards or government benefits filing'
  ],
  strengths: [
    'The premier sci-fi / cyberpunk UI framework in the web development ecosystem',
    'Integrated audio sound system (`@arwes/sounds`, `@arwes/bleeps`) triggering mechanical sci-fi UI sounds on hover and click',
    'Animated SVG vector frames (`@arwes/frames`) with dynamic line drawing and corner clips'
  ],
  weaknesses: [
    'Highly specialized aesthetic'
  ],
  tags: [
    'arwes',
    'sci-fi',
    'cyberpunk',
    'hud',
    'sound-effects',
    'futuristic',
    'react',
    'niche-retro'
  ],
  aliases: ['Arwes', 'Arwes UI', 'Sci-Fi UI'],
  systemTypes: ['retro', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @arwes/react @arwes/sounds @arwes/frames @arwes/bleeps',
      packages: ['@arwes/react', '@arwes/sounds', '@arwes/frames', '@arwes/bleeps'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<ArwesThemeProvider>` and `<BleepsProvider>`.'
    }
  },
  componentGuidance: {
    frame: {
      canonicalName: 'FrameNestable',
      description: 'Animated glowing SVG sci-fi corner frame with clip corners.',
      importExample: "import { FrameNestable } from '@arwes/react';\n\n<FrameNestable style={{ padding: 20 }}><span>TACTICAL SCAN ACTIVE</span></FrameNestable>",
      docSubUrl: 'components'
    },
    button: {
      canonicalName: 'Button',
      description: 'Futuristic HUD button with sound effect trigger.',
      importExample: "import { Button } from '@arwes/react';\n\n<Button>Engage Warp Drive</Button>",
      docSubUrl: 'components'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap application in `<ArwesThemeProvider>` and `<BleepsProvider>`.',
      'Use Arwes animated frames (`FrameNestable`, `FrameSVGNestable`) for glowing borders.',
      'Incorporate scanline background overlays and glowing neon text.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure neon cyan and amber palette in Arwes theme provider.',
    iconUsage: 'Use tech/geometric SVG icons.',
    layoutConventions: 'Use high-tech sci-fi grid layouts.'
  }
};
