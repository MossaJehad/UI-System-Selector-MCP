import { UISystem } from '../../schemas/uiSystem.js';

export const flyonui: UISystem = {
  id: 'flyonui',
  name: 'FlyonUI',
  organization: 'FlyonUI Community',
  description: 'An open-source Tailwind CSS component library combining daisyUI’s semantic CSS class utility architecture with Preline’s interactive headless JavaScript plugins for rich, accessible interactive components.',
  category: 'component-library',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['react', 'vue', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['flyonui'],
  docsUrl: 'https://flyonui.com',
  repositoryUrl: 'https://github.com/themeselection/flyonui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Interactive JS plugins ensure WCAG 2.1 AA keyboard navigation across overlays and inputs.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin tokens with multi-theme switcher',
    packageName: 'flyonui'
  },
  icons: {
    available: true,
    name: 'Iconify integration'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Vibrant, semantic Tailwind UI style: daisyUI-like concise class names (`btn btn-primary`, `card`, `modal`), rich color themes, and smooth interactive dropdowns.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Developers wanting the clean semantic class names of daisyUI combined with powerful interactive JavaScript plugins',
    'Full-stack apps (Laravel, Next.js, Nuxt, Rails, Django) using Tailwind CSS',
    'Fast UI development with multi-theme dark/light switching'
  ],
  avoidFor: [
    'Non-Tailwind CSS projects'
  ],
  strengths: [
    'Combines semantic CSS classes with full interactive JS functionality',
    'Dozens of pre-built themes with one-click theme switcher attributes (`data-theme`)',
    'Framework-agnostic: works anywhere Tailwind CSS runs'
  ],
  weaknesses: [
    'Strict dependency on Tailwind CSS'
  ],
  tags: [
    'flyonui',
    'tailwind',
    'daisyui',
    'semantic-css',
    'multi-theme',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['FlyonUI', 'Flyon UI', 'Flyon'],
  relatedSystems: ['daisyui', 'preline', 'flowbite-react'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install flyonui',
      packages: ['flyonui'],
      setupInstructions: 'Add `require("flyonui")` to plugins in `tailwind.config.js` and import `flyonui/flyonui`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'FlyonUI button with semantic classes (btn btn-primary, btn btn-secondary).',
      importExample: '<button class="btn btn-primary">Submit</button>',
      docSubUrl: 'docs/components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use semantic FlyonUI classes (`btn`, `card`, `input`, `modal`).',
      'Configure `flyonui` in `tailwind.config.js`.',
      'Use `data-theme="..."` on `<html>` for theme switching.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Use FlyonUI theme names or custom theme definitions in Tailwind config.',
    iconUsage: 'Use Iconify or Lucide icons.',
    layoutConventions: 'Use Tailwind CSS flex and grid with FlyonUI container classes.'
  }
};
