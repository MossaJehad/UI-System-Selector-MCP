import { UISystem } from '../../schemas/uiSystem.js';

export const kutty: UISystem = {
  id: 'kutty',
  name: 'Kutty (Tailwind CSS UI Plugin & Components)',
  organization: 'Kutty / CreativeCodeCo',
  description: 'An open-source Tailwind CSS plugin and accessible component library providing 20+ interactive components (Dropdown, Modal, Tabs, Accordion, Tooltip) powered by Alpine.js and clean Tailwind utilities.',
  category: 'css-framework',
  secondaryCategories: ['styled', 'minimalist'],
  frameworks: ['html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'tailwind',
  packageNames: ['kutty', 'tailwindcss', 'alpinejs'],
  docsUrl: 'https://kutty.netlify.app',
  repositoryUrl: 'https://github.com/azouaoui-med/kutty',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Interactive accessibility behaviors powered by Alpine.js.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS plugin configuration via `kutty`',
    packageName: 'kutty'
  },
  icons: {
    available: true,
    name: 'Heroicons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Lightweight interactive Tailwind aesthetic: clean rounded buttons, simple animated modal popups, Alpine.js dropdown triggers, and crisp form controls.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'HTML + Alpine.js + Tailwind CSS web applications (Laravel Blade, Rails, Django, static sites)',
    'Developers wanting interactive UI components without heavy JavaScript single-page-app frameworks',
    'Fast web prototypes'
  ],
  avoidFor: [
    'Pure React / Vue single page applications with virtual DOM state managers'
  ],
  strengths: [
    'Tailwind CSS plugin with built-in Alpine.js interactive components',
    'Zero heavy JavaScript framework overhead (~15KB Alpine.js)',
    'Clean, readable HTML markup'
  ],
  weaknesses: [
    'Alpine.js pairing dependency'
  ],
  tags: [
    'kutty',
    'tailwind',
    'alpinejs',
    'plugin',
    'html-css',
    'lightweight',
    'hidden-gem'
  ],
  aliases: ['Kutty', 'Kutty UI', 'Kutty Tailwind', 'Kutty Plugin'],
  relatedSystems: ['flyonui', 'daisyui', 'preline'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install kutty tailwindcss alpinejs',
      packages: ['kutty', 'tailwindcss', 'alpinejs'],
      setupInstructions: 'Add `require("kutty")` to plugins in `tailwind.config.js` and include Alpine.js.'
    }
  },
  componentGuidance: {
    dropdown: {
      canonicalName: 'Dropdown',
      description: 'Alpine.js-powered accessible dropdown menu.',
      importExample: '<div x-data="{ open: false }" class="relative"><button @click="open = !open" class="btn btn-primary">Menu</button><div x-show="open" @click.away="open = false" class="dropdown-menu">...</div></div>',
      docSubUrl: 'components/dropdown'
    }
  },
  aiInstructions: {
    principles: [
      'Add `kutty` plugin to `tailwind.config.js`.',
      'Use Alpine.js directives (`x-data`, `x-show`, `@click`) for interactive UI states.',
      'Use Tailwind CSS for visual styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure `tailwind.config.js`.',
    iconUsage: 'Embed SVG Heroicons.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
