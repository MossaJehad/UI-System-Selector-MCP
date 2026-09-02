import { UISystem } from '../../schemas/uiSystem.js';

export const otfUi: UISystem = {
  id: 'otf-ui',
  name: 'OTF UI (Off The Farm UI)',
  organization: 'OTF Community',
  description: 'An open-source, source-owned component library built for fast-moving startups in React and Tailwind CSS, featuring rapid form builders, modal dialogs, and conversion-optimized checkout layouts.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'styled'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://otfui.dev',
  repositoryUrl: 'https://github.com/otf-ui/otf-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML form elements with accessible focus rings.'
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
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern startup conversion aesthetic: high-contrast checkout forms, clean toggle switches, modal drawers, and responsive feature grids.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Early-stage startup prototypes, checkout flows, and user onboarding forms',
    'Developers wanting rapid copy-paste UI components in Next.js',
    'Clean SaaS web applications'
  ],
  avoidFor: [
    'Complex legacy enterprise mainframes'
  ],
  strengths: [
    '100% copy-paste code with zero package lock-in',
    'Optimized for fast developer assembly and conversion workflows',
    'Clean Tailwind CSS integration'
  ],
  weaknesses: [
    'Startup prototype focus'
  ],
  tags: [
    'otf-ui',
    'otf',
    'startup',
    'forms',
    'onboarding',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'hidden-gem'
  ],
  aliases: ['OTF UI', 'OTFUI', 'Off The Farm UI', 'OTF'],
  relatedSystems: ['launch-ui', 'origin-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    react: {
      command: 'npm install clsx tailwind-merge lucide-react',
      packages: ['clsx', 'tailwind-merge', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    form: {
      canonicalName: 'OnboardingForm',
      description: 'Multi-step onboarding form with validation and progress indicator.',
      importExample: "// Copy from components/otf/onboarding-form.tsx\nimport { OnboardingForm } from '@/components/ui/onboarding-form';",
      docSubUrl: 'docs/components/form'
    }
  },
  aiInstructions: {
    principles: [
      'Copy component code directly into the user’s `components/ui/` directory.',
      'Use OnboardingForm for conversion funnels.',
      'Use Tailwind CSS for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
