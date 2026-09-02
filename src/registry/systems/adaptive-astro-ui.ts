import { UISystem } from '../../schemas/uiSystem.js';

export const adaptiveAstroUi: UISystem = {
  id: 'adaptive-astro-ui',
  name: 'Adaptive Astro UI',
  organization: 'Adaptive Web Community',
  description: 'An open-source, server-rendered component library engineered specifically for Astro, providing zero-JS adaptive layout primitives, responsive navigation drawers, image showcases, and content carousels.',
  category: 'component-library',
  secondaryCategories: ['minimalist', 'styled'],
  frameworks: ['astro', 'html-css'],
  stylingApproach: 'vanilla-css',
  packageNames: ['adaptive-astro-ui'],
  docsUrl: 'https://github.com/adaptive-web/adaptive-astro-ui',
  repositoryUrl: 'https://github.com/adaptive-web/adaptive-astro-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with zero client-side JavaScript overhead.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties and Astro scoped styling',
    packageName: 'adaptive-astro-ui'
  },
  icons: {
    available: true,
    name: 'SVG Vector Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Adaptive content-first web aesthetic: fast server-rendered hero headers, responsive masonry galleries, clean typography, and instant page loads.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Astro content sites, documentation portals, and blogs wanting fast server-rendered components with zero client JS',
    'Developers building high-speed Core Web Vitals optimized web pages',
    'Clean Astro websites'
  ],
  avoidFor: [
    'Complex client-heavy single-page applications'
  ],
  strengths: [
    'Native `.astro` components with 0KB client-side JavaScript output',
    'Perfect 100/100 Google Lighthouse performance benchmarks',
    'Clean, semantic CSS'
  ],
  weaknesses: [
    'Astro framework focus'
  ],
  tags: [
    'adaptive-astro-ui',
    'astro',
    'server-rendered',
    'zero-js',
    'lighthouse',
    'performance',
    'hidden-gem'
  ],
  aliases: ['Adaptive Astro UI', 'Adaptive Astro', 'Adaptive UI Astro'],
  relatedSystems: ['fulldev-ui', 'accessible-astro-components', 'pico-css'],
  systemTypes: ['component-library'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install adaptive-astro-ui',
      packages: ['adaptive-astro-ui'],
      setupInstructions: 'Import components directly into `.astro` templates.'
    }
  },
  componentGuidance: {
    hero: {
      canonicalName: 'Hero',
      description: 'Zero-JS server rendered hero section.',
      importExample: "--- \nimport { Hero } from 'adaptive-astro-ui';\n---\n\n<Hero title=\"Fast Web\" description=\"Built with Astro\" />",
      docSubUrl: '#'
    }
  },
  aiInstructions: {
    principles: [
      'Import `.astro` components directly into Astro templates.',
      'Maintain zero client-side JS philosophy.',
      'Use CSS custom properties for styling.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure CSS custom properties on `:root`.',
    iconUsage: 'Embed SVG icons.',
    layoutConventions: 'Use semantic HTML layout.'
  }
};
