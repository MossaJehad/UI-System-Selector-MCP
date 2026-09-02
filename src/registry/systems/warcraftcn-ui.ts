import { UISystem } from '../../schemas/uiSystem.js';

export const warcraftcnUi: UISystem = {
  id: 'warcraftcn-ui',
  name: 'warcraftcn/ui',
  organization: 'warcraftcn Community',
  description: 'An open-source, source-owned component library bringing the iconic World of Warcraft / fantasy gaming aesthetic to shadcn/ui and Tailwind CSS, featuring parchment paper dialogs, stone and gold beveled frames, fantasy tooltips, and action bar buttons.',
  category: 'retro',
  secondaryCategories: ['source-owned', 'creative-tool', 'experimental'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://warcraftcn.com',
  repositoryUrl: 'https://github.com/warcraftcn/ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Built on Radix UI primitives with custom fantasy game visual wrappers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens with fantasy stone and gold borders',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'Fantasy Game Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Epic fantasy video game aesthetic: Warcraft gold-trimmed beveled borders, parchment quest scroll dialogs, spell action bar buttons, and mythical glowing rarity tooltips (Epic Purple, Legendary Orange).',
  noveltyLevel: 'niche-retro',
  bestFor: [
    'Gaming web apps, guild websites, quest logs, and tabletop RPG companion tools',
    'Interactive web games and fantasy developer portfolios',
    'Developers wanting the shadcn/ui copy-paste architecture with an authentic fantasy RPG skin'
  ],
  avoidFor: [
    'Corporate banking or enterprise accounting applications'
  ],
  strengths: [
    'Brings authentic World of Warcraft and fantasy RPG visual design to the modern shadcn/ui ecosystem',
    '100% source-owned copy-paste code with Tailwind CSS customization',
    'Built on top of accessible Radix UI primitives'
  ],
  weaknesses: [
    'Fantasy RPG aesthetic specialization'
  ],
  tags: [
    'warcraftcn',
    'warcraft',
    'rpg',
    'gaming',
    'fantasy',
    'shadcn',
    'source-owned',
    'tailwind',
    'niche-retro'
  ],
  aliases: ['warcraftcn/ui', 'warcraftcn', 'Warcraft UI', 'Warcraft shadcn'],
  relatedSystems: ['rpgui', 'react95', 'shadcn-ui'],
  systemTypes: ['source-owned', 'retro', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy code from warcraftcn.com',
      packages: ['clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    dialog: {
      canonicalName: 'QuestDialog',
      description: 'Parchment and gold-trimmed fantasy modal quest dialog.',
      importExample: "// Copy from components/warcraft/dialog.tsx\nimport { Dialog, DialogContent } from '@/components/ui/dialog';",
      docSubUrl: 'docs/components/dialog'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code into the user’s `components/ui/` directory.',
      'Use fantasy color tokens (Gold `#ffd100`, Epic `#a335ee`, Legendary `#ff8000`).',
      'Apply beveled gold and stone border utility classes.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with Warcraft color and border assets.',
    iconUsage: 'Use gaming SVG icons.',
    layoutConventions: 'Simulate game HUD windows and quest logs.'
  }
};
