import { UISystem } from '../../schemas/uiSystem.js';

export const rpgui: UISystem = {
  id: 'rpgui',
  name: 'RPGUI (Classic RPG Game Interface)',
  organization: 'Ronen Ness / RPGUI Community',
  description: 'An open-source, pixel-art retro CSS framework for building classic 16-bit RPG (Role Playing Game) web interfaces, featuring pixelated parchment boxes, health/mana progress bars, retro gold coin counters, golden frames, and pixel fonts.',
  category: 'retro',
  secondaryCategories: ['creative-tool', 'experimental', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'vanilla-css',
  packageNames: ['rpgui'],
  docsUrl: 'https://ronenness.github.io/rpgui',
  repositoryUrl: 'https://github.com/RonenNess/RPGUI',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'Not Specified',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Prioritizes 16-bit pixel-art RPG game aesthetic authenticity.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: false,
    description: 'Pixel-art RPG CSS classes and image sliced frames.'
  },
  icons: {
    available: true,
    name: 'RPGUI 16-bit Pixel Icons (Sword, Shield, Potion, Coin)'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Authentic 16-bit SNES / RPG Maker game aesthetic: stone and wooden border containers, red Health / blue Mana progress bars, parchment paper panels, golden dialogue boxes, and pixelated button presses.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Web-based RPG games, quest log trackers, and tabletop D&D character sheet managers',
    'Gaming community hubs, guild websites, and pixel-art developer portfolios',
    'Interactive web applications wanting an authentic fantasy video game feel'
  ],
  avoidFor: [
    'Corporate financial or enterprise business software'
  ],
  strengths: [
    'The premier CSS framework for classic 16-bit RPG game user interfaces',
    'Authentic image-sliced pixel frames with 9-slice scaling for boxes and buttons',
    'Specialized gaming components: Health Bar, Mana Bar, Inventory Slots, Gold Counter, Dialogue Box'
  ],
  weaknesses: [
    'Fantasy RPG game aesthetic domain specialization'
  ],
  tags: [
    'rpgui',
    'rpg',
    'gaming',
    'pixel-art',
    'retro',
    'fantasy',
    'dnd',
    'niche-retro'
  ],
  aliases: ['RPGUI', 'RPG UI', 'RPG CSS'],
  relatedSystems: ['nes-css', '98-css', 'react95'],
  systemTypes: ['retro', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install rpgui # or download rpgui.min.css',
      packages: ['rpgui'],
      setupInstructions: 'Import `rpgui/dist/rpgui.min.css` and wrap content in `<div class="rpgui-content">`.'
    }
  },
  componentGuidance: {
    box: {
      canonicalName: 'rpgui-container',
      description: 'Pixel-art RPG container box (framed, framed-golden, framed-grey).',
      importExample: '<div class="rpgui-container framed"><p>Inventory Items</p></div>',
      docSubUrl: '#containers'
    },
    progress: {
      canonicalName: 'rpgui-progress',
      description: 'Retro pixelated Health (red) or Mana (blue) progress bar.',
      importExample: '<div class="rpgui-progress red"><div class="rpgui-progress-track"><div class="rpgui-progress-fill red" style="width: 75%"></div></div><div class="rpgui-progress-left-edge"></div><div class="rpgui-progress-right-edge"></div></div>',
      docSubUrl: '#progress'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap interface elements in `<div class="rpgui-content">`.',
      'Use `rpgui-container framed-golden` for dialogue and quest boxes.',
      'Use `rpgui-progress red` for Health and `rpgui-progress blue` for Mana.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Use RPGUI container variants (framed, framed-golden, framed-grey).',
    iconUsage: 'Use RPGUI pixel icon classes (e.g. `rpgui-icon sword`, `rpgui-icon shield`).',
    layoutConventions: 'Simulate game HUD windows and inventory grids.'
  }
};
