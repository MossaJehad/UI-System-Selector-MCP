import { UISystem } from '../../schemas/uiSystem.js';

export const spectreCss: UISystem = {
  id: 'spectre-css',
  name: 'Spectre.css',
  organization: 'Yan Zhu / Spectre.css Community',
  description: 'A lightweight (~10KB gzipped), modern, responsive CSS framework based on Flexbox, providing elegant typography, pure CSS avatars, badges, bars, cards, modals, navbars, and steps without JavaScript runtime dependencies.',
  category: 'css-framework',
  secondaryCategories: ['saas', 'consumer', 'component-library'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['spectre.css'],
  docsUrl: 'https://picturepan2.github.io/spectre',
  repositoryUrl: 'https://github.com/picturepan2/spectre',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Semantic HTML markup with accessible focus indicators.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Spectre Sass variables (`_variables.scss`)',
    packageName: 'spectre.css'
  },
  icons: {
    available: true,
    packageName: 'spectre.css',
    name: 'Spectre Icons (`spectre-icons.css`)'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Crisp, lightweight modern CSS aesthetic: Spectre Purple/Blue accents, clean rounded avatars with badge pips, responsive navbar bars, and multi-step progress indicators.',
  noveltyLevel: 'established',
  bestFor: [
    'Lightweight web apps wanting clean CSS components without heavy framework bloat (~10KB)',
    'Full-stack apps (Go, Rust, Python, Rails, Node) needing pure CSS avatars, modals, and tooltips',
    'Developers wanting elegant Flexbox grid layouts and step indicators'
  ],
  avoidFor: [
    'Complex enterprise multi-tier virtualized data grids'
  ],
  strengths: [
    'Lightweight and pure CSS: zero JavaScript dependencies required',
    'Rich pure CSS components (Avatars with status badges, Step indicators, Accordions, Modals, Empty States)',
    'Clean, elegant visual design with modular Sass architecture'
  ],
  weaknesses: [
    'Modals and dropdowns rely on pure CSS target/checkbox tricks or lightweight JS'
  ],
  tags: [
    'spectre-css',
    'css-framework',
    'pure-css',
    'lightweight',
    'flexbox',
    'sass',
    'established'
  ],
  aliases: ['Spectre.css', 'Spectre CSS', 'Spectre'],
  relatedSystems: ['bulma', 'pico-css', 'pure-css'],
  systemTypes: ['css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install spectre.css',
      packages: ['spectre.css'],
      setupInstructions: 'Import `spectre.css/dist/spectre.min.css`, `spectre.css/dist/spectre-exp.min.css`, and `spectre.css/dist/spectre-icons.min.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Spectre button with btn-primary, btn-link, btn-success, btn-error.',
      importExample: '<button class="btn btn-primary">Action</button>',
      docSubUrl: 'elements/buttons.html'
    },
    step: {
      canonicalName: 'step',
      description: 'Pure CSS multi-step process indicator.',
      importExample: '<ul class="step"><li class="step-item"><a href="#" class="tooltip" data-tooltip="Step 1">Step 1</a></li><li class="step-item active"><a href="#" class="tooltip" data-tooltip="Step 2">Step 2</a></li></ul>',
      docSubUrl: 'components/steps.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use Spectre CSS classes (`btn`, `card`, `avatar`, `step`, `empty`).',
      'Use Flexbox grid with `.container`, `.columns`, and `.column col-*`.',
      'Use Spectre Icons (`icon icon-search`, `icon icon-check`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Sass variables in `_variables.scss`.',
    iconUsage: 'Use Spectre Icons classes.',
    layoutConventions: 'Use `.container`, `.columns`, and `.column`.'
  }
};
