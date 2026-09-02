import { UISystem } from '../../schemas/uiSystem.js';

export const preline: UISystem = {
  id: 'preline',
  name: 'Preline UI',
  organization: 'Htmlstream / Preline',
  description: 'An extensive open-source library of pre-built UI components, full-page SaaS templates, marketing sections, and interactive vanilla JavaScript plugins built with Tailwind CSS, supporting React, Vue, Angular, and plain HTML.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'consumer'],
  frameworks: ['react', 'vue', 'angular', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['preline'],
  docsUrl: 'https://preline.co',
  repositoryUrl: 'https://github.com/htmlstreamofficial/preline',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Preline JS plugins manage ARIA attributes and focus trapping for modals, dropdowns, and tabs.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS configuration and Preline theme variables',
    packageName: 'preline'
  },
  icons: {
    available: true,
    name: 'Tabler Icons / Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Crisp, modern Tailwind SaaS aesthetic: clean multi-tier sidebars, high-contrast tables with filter drawers, stats cards, and pricing comparison grids.',
  noveltyLevel: 'established',
  bestFor: [
    'Fast construction of SaaS dashboards, marketing landing pages, and administrative consoles in Tailwind CSS',
    'Multi-framework applications (React, Next.js, Vue, Nuxt, Laravel, Django, Rails) using Tailwind CSS',
    'Developers wanting pre-built responsive layout sections (Hero, Features, Pricing, Footers)'
  ],
  avoidFor: [
    'Projects not using Tailwind CSS'
  ],
  strengths: [
    'One of the largest free collections of Tailwind CSS components and complete landing page sections',
    'Works seamlessly with vanilla JS, React, Vue, Angular, or backend frameworks (Laravel, Rails, Django)',
    'Full dark mode and right-to-left (RTL) localization support'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS'
  ],
  tags: [
    'preline',
    'tailwind',
    'saas',
    'dashboard',
    'multi-framework',
    'react',
    'vue',
    'dark-mode',
    'rtl',
    'established'
  ],
  aliases: ['Preline UI', 'Preline', 'Preline Tailwind'],
  relatedSystems: ['daisyui', 'flowbite-react', 'shadcn-ui'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install preline',
      packages: ['preline'],
      setupInstructions: 'Add `require("preline/plugin")` to your `tailwind.config.js` and import `preline/preline`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Preline button classes in Tailwind CSS.',
      importExample: '<button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">Get Started</button>',
      docSubUrl: 'docs/buttons.html'
    }
  },
  aiInstructions: {
    principles: [
      'Include `preline/plugin` in `tailwind.config.js`.',
      'Use Preline data attributes (`data-hs-overlay`, `data-hs-collapse`) for interactive components.',
      'Initialize Preline on route changes in SPAs (`window.HSStaticMethods?.autoInit()`).'
    ],
    forbiddenSubstitutions: ['@mui/material', 'bootstrap'],
    themingGuide: 'Configure colors in `tailwind.config.js`.',
    iconUsage: 'Use Lucide or Tabler icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
