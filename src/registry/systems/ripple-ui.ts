import { UISystem } from '../../schemas/uiSystem.js';

export const rippleUi: UISystem = {
  id: 'ripple-ui',
  name: 'Ripple UI',
  organization: 'Suhu / Ripple UI Community',
  description: 'An open-source, modern Tailwind CSS component library providing pure CSS components, semantic class names (`btn btn-primary`, `card`, `modal`), dark mode support, and tiny footprint without requiring JavaScript framework runtimes.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'css-framework'],
  frameworks: ['html-css', 'react', 'vue', 'svelte', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['rippleui'],
  docsUrl: 'https://ripple-ui.com',
  repositoryUrl: 'https://github.com/Suhu/rippleui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus rings.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin tokens and theme configurations',
    packageName: 'rippleui'
  },
  icons: {
    available: false
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern semantic Tailwind CSS aesthetic: clean card surfaces, colorful button states, accessible checkboxes, and crisp dark mode styling.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting semantic class names (like daisyUI) with clean alternative visual styling',
    'Full-stack apps (Laravel, Next.js, Nuxt, Rails, Django) using Tailwind CSS',
    'Lightweight projects wanting pure CSS components without heavy JS dependencies'
  ],
  avoidFor: [
    'Non-Tailwind projects'
  ],
  strengths: [
    'Semantic Tailwind CSS plugin architecture: write `btn btn-primary` instead of 10 utility classes',
    'Zero JavaScript runtime overhead: pure CSS components',
    'Built-in dark mode and customizable color themes'
  ],
  weaknesses: [
    'Requires Tailwind CSS'
  ],
  tags: [
    'ripple-ui',
    'tailwind',
    'semantic-css',
    'daisyui-alternative',
    'pure-css',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Ripple UI', 'RippleUI', 'Ripple Tailwind'],
  relatedSystems: ['daisyui', 'flyonui', 'flowbite-react'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install rippleui',
      packages: ['rippleui'],
      setupInstructions: 'Add `require("rippleui")` to plugins in `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Ripple UI semantic button class with btn-primary, btn-secondary, btn-error.',
      importExample: '<button class="btn btn-primary">Submit</button>',
      docSubUrl: 'docs/get-started/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic Ripple UI classes (`btn`, `card`, `input`, `badge`, `modal`).',
      'Configure `rippleui` plugin in `tailwind.config.js`.',
      'Use standard Tailwind CSS flex and grid for layout.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes in `tailwind.config.js` using Ripple UI plugin options.',
    iconUsage: 'Use Lucide or Tabler icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
