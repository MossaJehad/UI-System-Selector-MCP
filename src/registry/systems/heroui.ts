import { UISystem } from '../../schemas/uiSystem.js';

export const heroui: UISystem = {
  id: 'heroui',
  name: 'HeroUI (formerly NextUI)',
  organization: 'HeroUI Community',
  description: 'A vibrant, modern, beautiful React UI library built on top of Tailwind CSS and React Aria, featuring fluid animations, accessible primitives, and rich customization with Tailwind variants.',
  category: 'saas',
  secondaryCategories: ['consumer', 'styled', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'utility-classes',
  packageNames: ['@heroui/react', '@heroui/theme'],
  docsUrl: 'https://heroui.com',
  repositoryUrl: 'https://github.com/heroui-inc/heroui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on Adobe React Aria for robust accessibility primitives.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin colors and tokens',
    packageName: '@heroui/theme'
  },
  icons: {
    available: false,
    name: 'Compatible with Lucide or Heroicons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Vibrant, high-polish, subtle glassmorphism, fluid spring animations, modern Next.js SaaS aesthetic.',
  noveltyLevel: 'established',
  bestFor: [
    'Modern React & Next.js SaaS web applications',
    'Consumer web apps needing smooth interactive animations',
    'Tailwind CSS projects seeking pre-styled accessible components'
  ],
  avoidFor: [
    'Ultra-compact low-level data-dense monitoring tables',
    'Projects avoiding Tailwind CSS'
  ],
  strengths: [
    'Combines React Aria accessibility with Tailwind CSS styling and Framer Motion animations',
    'Vibrant dark mode with gradient and glowing focus states',
    'Outstanding developer experience in Next.js App Router'
  ],
  weaknesses: [
    'Requires Tailwind CSS setup',
    'React-only'
  ],
  tags: [
    'tailwind',
    'react-aria',
    'nextjs',
    'saas',
    'animations',
    'dark-mode',
    'modern'
  ],
  installation: {
    react: {
      command: 'npm install @heroui/react framer-motion',
      packages: ['@heroui/react', 'framer-motion'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Wrap root in `<HeroUIProvider>` and add the `heroui()` plugin in `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'HeroUI button with color="primary" | "secondary" | "success" | "warning" | "danger" and variant="solid" | "bordered" | "flat" | "ghost" | "shadow".',
      importExample: "import { Button } from '@heroui/react';\n\n<Button color=\"primary\" variant=\"shadow\">Get Started</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root in `<HeroUIProvider>`.',
      'Use HeroUI components (e.g. `Card`, `Modal`, `Navbar`, `Table`, `Dropdown`).',
      'Leverage Tailwind CSS utilities for layout and page containers.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use HeroUI Tailwind plugin theme configuration or `dark` class.',
    iconUsage: 'Use Lucide React or Heroicons as children or startContent.',
    layoutConventions: 'Combine HeroUI Card and Navbar with Tailwind grid/flex.'
  }
};
