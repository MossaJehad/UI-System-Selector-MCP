import { UISystem } from '../../schemas/uiSystem.js';

export const aceternityUi: UISystem = {
  id: 'aceternity-ui',
  name: 'Aceternity UI',
  organization: 'Aceternity (Manu Arora)',
  description: 'An open-source, source-owned React component library for high-end landing pages, interactive portfolios, and 3D web experiences, built with Framer Motion, Three.js / Canvas, Tailwind CSS, and shadcn/ui to deliver glowing cards, 3D pins, parallax scrolls, and spotlight effects.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'consumer', 'experimental'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['framer-motion', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://ui.aceternity.com',
  repositoryUrl: 'https://github.com/aceternity/ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides accessible DOM structure behind 3D canvas and motion effects.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    name: 'Tabler Icons / Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'Ultra-modern dark-mode 3D aesthetic: glowing interactive spotlights, 3D card perspective tilt, lamp header glow, background aurora beams, and infinite moving cards.',
  noveltyLevel: 'established',
  bestFor: [
    'Hero sections, interactive marketing websites, and award-winning developer portfolios',
    '3D perspective tilt cards, spotlight mouse-tracking effects, and parallax scroll showcases',
    'Next.js & Tailwind CSS projects wanting copy-paste visual showstoppers'
  ],
  avoidFor: [
    'Standard government or administrative data entry portals'
  ],
  strengths: [
    'One of the most visually stunning animated component collections on the web',
    'Specialized 3D and canvas effects (3D Card, Spotlight, Lamp, AuroraBackground, Vortex, TracingBeam)',
    '100% source-owned copy-paste code with zero npm package lock-in'
  ],
  weaknesses: [
    'Heavy visual styling optimized for dark mode landing pages'
  ],
  tags: [
    'aceternity-ui',
    'framer-motion',
    'threejs',
    '3d',
    'landing-page',
    'portfolio',
    'source-owned',
    'tailwind',
    'react',
    'next',
    'established'
  ],
  aliases: ['Aceternity UI', 'Aceternity', 'Aceternity Design'],
  relatedSystems: ['magic-ui', 'shadcn-ui', 'cult-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npm install framer-motion clsx tailwind-merge',
      packages: ['framer-motion', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss', 'framer-motion'],
      setupInstructions: 'Copy component files from ui.aceternity.com into your project.'
    }
  },
  componentGuidance: {
    card3d: {
      canonicalName: 'CardContainer',
      description: '3D perspective card that tilts and lifts on mouse hover.',
      importExample: "import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';\n\n<CardContainer><CardBody><CardItem translateZ=\"50\">Title</CardItem></CardBody></CardContainer>",
      docSubUrl: 'components/3d-card-effect'
    },
    spotlight: {
      canonicalName: 'Spotlight',
      description: 'Glowing spotlight beam for dark mode hero headers.',
      importExample: "import { Spotlight } from '@/components/ui/spotlight';\n\n<Spotlight className=\"-top-40 left-0 md:left-60 md:-top-20\" fill=\"white\" />",
      docSubUrl: 'components/spotlight'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code into `components/ui/`.',
      'Use Framer Motion and Tailwind CSS utility classes.',
      'Use dark mode background canvas (`bg-black` or `bg-slate-950`) for maximum visual impact.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with Aceternity animations.',
    iconUsage: 'Use `tabler-icons-react` or `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
