import { UISystem } from '../../schemas/uiSystem.js';

export const metroUi: UISystem = {
  id: 'metro-ui',
  name: 'Metro UI (Windows Modern UI CSS Framework)',
  organization: 'Serhii Pimenov / Metro UI Community',
  description: 'An open-source, full-featured CSS framework and component library implementing the iconic Microsoft Windows Modern / Metro design language, featuring live tile grids, ribbon navigation bars, desktop window emulators, and 100+ components.',
  category: 'retro',
  secondaryCategories: ['css-framework', 'component-library', 'creative-tool'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic', 'react', 'vue'],
  stylingApproach: 'less',
  packageNames: ['metro4', 'metro4-react', 'metro4-vue'],
  docsUrl: 'https://metroui.org.ua',
  repositoryUrl: 'https://github.com/olton/Metro-UI-CSS',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides high-contrast tile grids and accessible keyboard focus navigation.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Metro UI Less variables and CSS custom properties',
    packageName: 'metro4'
  },
  icons: {
    available: true,
    packageName: 'metro4',
    name: 'Metro UI Icons (600+ Windows Modern style icons)'
  },
  maturity: 'mature',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Iconic Microsoft Windows 8/10 Modern Metro aesthetic: bold flat color tiles, live tile flip animations, Office Ribbon bars, sidebar charms, and crisp Segoe UI typography.',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Windows 8 / 10 / Windows Phone nostalgia apps, desktop simulation web toys, and dashboards',
    'Enterprise web apps wanting Microsoft Office Ribbon bars and Windows Live Tiles',
    'Interactive kiosk interfaces and touchscreen displays'
  ],
  avoidFor: [
    'Subtle macOS or iOS style mobile apps'
  ],
  strengths: [
    'The premier open-source implementation of Microsoft Windows Metro / Modern UI on the web',
    'Over 100+ rich UI components including Live Tiles, Ribbon Bar, Window, Calendar, Charm, and TreeView',
    'Built-in 600+ Windows Metro icon font'
  ],
  weaknesses: [
    'Strong Windows Modern UI branding'
  ],
  tags: [
    'metro-ui',
    'metro',
    'windows',
    'live-tiles',
    'ribbon',
    'retro',
    'css-framework',
    'niche-retro'
  ],
  aliases: ['Metro UI', 'Metro UI CSS', 'Metro 4', 'Windows Modern UI'],
  relatedSystems: ['7-css', 'react95', '98-css', 'xp-css'],
  systemTypes: ['retro', 'css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install metro4',
      packages: ['metro4'],
      setupInstructions: 'Import `metro4/build/css/metro-all.min.css` and `metro4/build/js/metro.min.js`.'
    }
  },
  componentGuidance: {
    tile: {
      canonicalName: 'tile',
      description: 'Windows Metro interactive live tile with flip animation.',
      importExample: '<div data-role="tile" class="bg-indigo fg-white" data-size="wide"><span class="mif-windows icon"></span><span class="branding-bar">Windows</span></div>',
      docSubUrl: 'tile.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use Metro UI `data-role="*"` attributes for interactive widgets.',
      'Import `metro-all.min.css` at app root.',
      'Use Metro tile grid classes (`tiles-grid`, `tile-group`, `tile-wide`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Metro UI Less variables.',
    iconUsage: 'Use `<span class="mif-search"></span>`.',
    layoutConventions: 'Use Windows Metro tile grid layout.'
  }
};
