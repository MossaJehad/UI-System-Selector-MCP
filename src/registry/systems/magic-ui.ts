import { UISystem } from '../../schemas/uiSystem.js';

export const magicUi: UISystem = {
  id: 'magic-ui',
  name: 'Magic UI',
  organization: 'Magic UI Community (Darian Chen)',
  description: 'An open-source, source-owned React component library for modern landing pages, marketing sites, and creative portfolios, built with Framer Motion, Tailwind CSS, and shadcn/ui to deliver animated bento grids, particle beams, globe visualizers, and text effects.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'consumer', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://magicui.design',
  repositoryUrl: 'https://github.com/magicuidesign/magicui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible fallback states for motion-reduced browser environments.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'High-impact Silicon Valley startup landing page style: glowing neon borders, interactive 3D particle globes, animated bento grids, marquee testimonial ribbons, and retro grid backgrounds.',
  noveltyLevel: 'established',
  bestFor: [
    'Startup landing pages, marketing websites, and developer product launch pages',
    'Animated bento grids, interactive particle effects, and animated text headlines',
    'Next.js projects wanting copy-paste source-owned animated components'
  ],
  avoidFor: [
    'Dense corporate accounting ledgers'
  ],
  strengths: [
    'The premier animated component collection for modern SaaS landing pages',
    'Stunning visual effects (BentoGrid, Globe, Marquee, Meteors, AnimatedBeam, ShimmerButton)',
    '100% source-owned copy-paste JSX integrated directly with shadcn/ui'
  ],
  weaknesses: [
    'Landing page and marketing focus; not designed for heavy back-office data entry'
  ],
  tags: [
    'magic-ui',
    'framer-motion',
    'animations',
    'landing-page',
    'bento-grid',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'next',
    'established'
  ],
  aliases: ['Magic UI', 'MagicUI', 'Magic Design'],
  relatedSystems: ['aceternity-ui', 'shadcn-ui', 'origin-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx shadcn@latest add ... # or copy component code from magicui.design',
      packages: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss', 'framer-motion'],
      setupInstructions: 'Install `framer-motion` and copy components from magicui.design.'
    }
  },
  componentGuidance: {
    bento: {
      canonicalName: 'BentoGrid',
      description: 'Animated responsive bento grid container with BentoCard children.',
      importExample: "import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';\n\n<BentoGrid><BentoCard name=\"Feature 1\" className=\"col-span-2\" /></BentoGrid>",
      docSubUrl: 'docs/components/bento-grid'
    },
    marquee: {
      canonicalName: 'Marquee',
      description: 'Smooth infinite looping marquee ribbon for logos and reviews.',
      importExample: "import Marquee from '@/components/magicui/marquee';\n\n<Marquee pauseOnHover className=\"[--duration:20s]\"><div>Review 1</div><div>Review 2</div></Marquee>",
      docSubUrl: 'docs/components/marquee'
    }
  },
  aiInstructions: {
    principles: [
      'Use `framer-motion` for smooth layout and entrance animations.',
      'Copy component code into `components/magicui/`.',
      'Use Magic UI components for landing page hero sections and bento grids.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with Magic UI animations and keyframes.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS grid and flex with Framer Motion layout props.'
  }
};
