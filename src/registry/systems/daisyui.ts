import { UISystem } from '../../schemas/uiSystem.js';

export const daisyUi: UISystem = {
  id: 'daisyui',
  name: 'DaisyUI',
  organization: 'Pouya Saadeghi',
  description: 'The most popular component library plugin for Tailwind CSS, adding semantic class names (btn, card, modal, drawer) with dozens of built-in themes and zero JavaScript dependencies.',
  category: 'styled',
  secondaryCategories: ['saas', 'consumer', 'retro', 'experimental'],
  frameworks: ['react', 'vue', 'svelte', 'solid', 'angular', 'vanilla'],
  stylingApproach: 'utility-classes',
  packageNames: ['daisyui'],
  docsUrl: 'https://daisyui.com',
  repositoryUrl: 'https://github.com/saadeghi/daisyui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'A',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup styled via Tailwind utility class names.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS Themes & Color Variables',
    packageName: 'daisyui'
  },
  icons: {
    available: false,
    name: 'Compatible with Lucide, Heroicons, or Font Awesome'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, versatile, semantic class-based UI with 30+ themes (synthwave, cyberpunk, retro, cupcake, forest, etc.).',
  noveltyLevel: 'established',
  bestFor: [
    'Tailwind CSS projects seeking concise semantic classes (`btn btn-primary`) instead of 20 raw utility classes',
    'Apps wanting dozens of ready-made instant theme switches (retro, cyberpunk, luxury, autumn, etc.)',
    'Multi-framework teams (Vue, Svelte, React, Solid, HTML)'
  ],
  avoidFor: [
    'Projects avoiding Tailwind CSS',
    'Complex headless state machines requiring JS focus trapping'
  ],
  strengths: [
    'Pure CSS Tailwind plugin with zero JS runtime overhead',
    'Massive library of 30+ built-in color themes with instant `data-theme` switching',
    'Works seamlessly across any framework using standard HTML class names'
  ],
  weaknesses: [
    'Requires manual JS wiring for complex modal focus traps or comboboxes'
  ],
  tags: [
    'daisyui',
    'tailwind',
    'themes',
    'multi-framework',
    'semantic-classes',
    'dark-mode',
    'rtl'
  ],
  installation: {
    generic: {
      command: 'npm install -D daisyui@latest',
      packages: ['daisyui'],
      setupInstructions: 'Add `require("daisyui")` to plugins in `tailwind.config.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: '.btn',
      description: 'DaisyUI button class (.btn .btn-primary, .btn-secondary, etc.).',
      importExample: '<button className="btn btn-primary">Action</button>',
      docSubUrl: 'components/button'
    },
    card: {
      canonicalName: '.card',
      description: 'DaisyUI card container with .card-body, .card-title, and .card-actions.',
      importExample: '<div className="card w-96 bg-base-100 shadow-xl"><div className="card-body"><h2 className="card-title">Card title!</h2><p>Content</p><div className="card-actions justify-end"><button className="btn btn-primary">Buy Now</button></div></div></div>',
      docSubUrl: 'components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Use DaisyUI semantic class names (`btn`, `card`, `modal`, `navbar`, `alert`, `badge`).',
      'Leverage Tailwind classes for spacing and custom layout.',
      'Control theme via `data-theme="synthwave"` attribute on root HTML.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `data-theme="light|dark|cupcake|cyberpunk|synthwave|retro"` on HTML element.',
    iconUsage: 'Use Lucide React, Heroicons, or standard SVGs.',
    layoutConventions: 'Combine DaisyUI card/navbar with Tailwind flex/grid.'
  }
};
