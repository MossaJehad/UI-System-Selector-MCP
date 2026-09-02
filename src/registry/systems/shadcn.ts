import { UISystem } from '../../schemas/uiSystem.js';

export const shadcn: UISystem = {
  id: 'shadcn-ui',
  name: 'shadcn/ui',
  organization: 'shadcn Community',
  description: 'A copy-paste collection of re-usable React components built using Radix Primitives and Tailwind CSS, giving developers ownership over the code within their own repositories.',
  category: 'saas',
  secondaryCategories: ['developer-tool', 'styled', 'accessibility-focused'],
  frameworks: ['react', 'vue', 'svelte', 'solid'],
  stylingApproach: 'utility-classes',
  packageNames: ['@radix-ui/react-slot', 'class-variance-authority', 'clsx', 'tailwind-merge', 'lucide-react'],
  docsUrl: 'https://ui.shadcn.com',
  repositoryUrl: 'https://github.com/shadcn-ui/ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Accessibility is provided by the underlying Radix Primitives.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS Custom Properties via Tailwind CSS'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern minimalist SaaS aesthetic: neutral zinc/slate backgrounds, subtle borders, crisp modern typography.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Fast-moving React/Next.js MVPs and modern SaaS web apps',
    'Developers who want direct code ownership rather than a node_modules package dependency',
    'Projects built with Tailwind CSS'
  ],
  avoidFor: [
    'Complex multi-app enterprise suites with centralized token distribution',
    'Non-Tailwind codebases',
    'Projects requiring enterprise data tables or specialized analytics charts out of the box'
  ],
  strengths: [
    'Code ownership: components live directly in your repository',
    'Ubiquitous modern SaaS aesthetic',
    'Backed by Radix Primitives accessibility and Lucide icons'
  ],
  weaknesses: [
    'Frequently over-recommended by default by AI coding agents',
    'Maintenance burden: updates require re-copying or managing local diffs',
    'Homogenized visual identity across the modern web'
  ],
  tags: [
    'shadcn',
    'tailwind',
    'radix',
    'copy-paste',
    'saas',
    'dark-mode',
    'mainstream'
  ],
  installation: {
    react: {
      command: 'npx shadcn@latest init',
      packages: ['clsx', 'tailwind-merge', 'class-variance-authority', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss'],
      setupInstructions: 'Initialize shadcn via `npx shadcn@latest init` and add components with `npx shadcn@latest add button`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Shadcn button with variant="default" | "destructive" | "outline" | "secondary" | "ghost" | "link".',
      importExample: "import { Button } from '@/components/ui/button';\n\n<Button variant=\"default\">Continue</Button>",
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from local `@/components/ui/*`.',
      'Use `cn()` helper to merge Tailwind classes.',
      'Use `lucide-react` for icons.'
    ],
    forbiddenSubstitutions: ['Silently overriding an explicit user preference for Primer, Carbon, Cloudscape, etc.'],
    themingGuide: 'Configure CSS variables in `globals.css` (.dark class).',
    iconUsage: 'Import from lucide-react.',
    layoutConventions: 'Tailwind CSS Grid and Flexbox.'
  }
};
