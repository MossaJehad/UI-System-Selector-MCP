import { UISystem } from '../../schemas/uiSystem.js';

export const tailwindUi: UISystem = {
  id: 'tailwind-ui',
  name: 'Tailwind UI (Catalyst)',
  organization: 'Tailwind Labs (Adam Wathan, Steve Schoger)',
  description: 'The official component and application UI kit by the creators of Tailwind CSS, featuring production-ready application shells, marketing pages, e-commerce stores, and the Catalyst modern React application UI kit built on Headless UI and Tailwind CSS.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'ecommerce', 'source-owned'],
  frameworks: ['react', 'next', 'vue', 'html-css'],
  stylingApproach: 'tailwind',
  packageNames: ['@headlessui/react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://tailwindui.com',
  repositoryUrl: 'https://github.com/tailwindlabs',
  license: 'Commercial Component Kit & Open Source Catalyst Core',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered by Tailwind Labs with Headless UI for rock-solid WAI-ARIA and keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Official Tailwind CSS default theme configuration',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: '@heroicons/react',
    name: 'Heroicons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'The definitive Tailwind aesthetic crafted by Steve Schoger: ultra-refined typography scale, subtle zinc/slate dark modes, crisp borders, and beautiful application layouts.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Developers wanting the benchmark standard for Tailwind CSS design quality and craftsmanship',
    'Modern React & Next.js web applications using the Catalyst component kit with Headless UI',
    'Enterprise SaaS applications, marketing websites, and e-commerce storefronts'
  ],
  avoidFor: [
    'Projects avoiding Tailwind CSS'
  ],
  strengths: [
    'The gold standard and design benchmark for the entire Tailwind CSS ecosystem',
    'Catalyst application UI kit providing clean, source-owned accessible React components',
    'Designed directly by the creators of Tailwind CSS (Adam Wathan, Steve Schoger)'
  ],
  weaknesses: [
    'Full Tailwind UI catalog requires a commercial license, though Catalyst core patterns are open'
  ],
  tags: [
    'tailwind-ui',
    'catalyst',
    'tailwind',
    'headless-ui',
    'heroicons',
    'react',
    'next',
    'mainstream'
  ],
  aliases: ['Tailwind UI', 'Catalyst', 'TailwindUI', 'Tailwind Catalyst'],
  relatedSystems: ['headless-ui', 'shadcn-ui', 'daisyui', 'flowbite-react'],
  systemTypes: ['component-library', 'source-owned'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @headlessui/react @heroicons/react clsx tailwind-merge',
      packages: ['@headlessui/react', '@heroicons/react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Catalyst action button with color="dark/zinc" | "primary" | "plain".',
      importExample: "import { Button } from '@/components/button';\n\n<Button color=\"dark/zinc\">Save Settings</Button>",
      docSubUrl: 'components/catalyst'
    }
  },
  aiInstructions: {
    principles: [
      'Use Catalyst source-owned components in `components/`.',
      'Use `@headlessui/react` for accessible behavior.',
      'Use `@heroicons/react` for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure Tailwind theme colors (Zinc, Slate, Neutral).',
    iconUsage: 'Use `@heroicons/react/20/solid` or `@heroicons/react/24/outline`.',
    layoutConventions: 'Use standard Catalyst SidebarLayout or StackedLayout.'
  }
};
