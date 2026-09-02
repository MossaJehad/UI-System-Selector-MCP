import { UISystem } from '../../schemas/uiSystem.js';

export const bootstrap: UISystem = {
  id: 'bootstrap',
  name: 'Bootstrap 5',
  organization: 'Bootstrap Core Team (Mark Otto, Jacob Thornton)',
  description: 'The world’s most popular front-end open-source toolkit, featuring a 12-column responsive flexbox grid, extensive prebuilt components, powerful JavaScript plugins with zero jQuery dependency, and deep CSS custom properties.',
  category: 'css-framework',
  secondaryCategories: ['component-library', 'enterprise', 'consumer'],
  frameworks: ['html-css', 'vanilla', 'css-only', 'framework-agnostic'],
  stylingApproach: 'sass',
  packageNames: ['bootstrap', '@popperjs/core'],
  docsUrl: 'https://getbootstrap.com',
  repositoryUrl: 'https://github.com/twbs/bootstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements WAI-ARIA authoring practices with keyboard focus handling across modals, carousels, and dropdowns.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap Sass maps and comprehensive CSS custom properties (`--bs-*`)',
    packageName: 'bootstrap'
  },
  icons: {
    available: true,
    packageName: 'bootstrap-icons',
    name: 'Bootstrap Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Universal web computing aesthetic: 12-column grid system, familiar button variants (primary, success, danger), card panels, modal dialogs, and breadcrumb navigation.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'Traditional server-rendered web applications (Django, Rails, Laravel, ASP.NET, Spring Boot)',
    'Rapid prototyping with universal cross-developer recognition and countless third-party themes',
    'Developers wanting full CSS/HTML components without JavaScript framework runtime lock-in'
  ],
  avoidFor: [
    'Projects demanding utility-first Tailwind CSS or zero-runtime CSS architectures'
  ],
  strengths: [
    'The most ubiquitous, documented, and globally recognized frontend framework in web history',
    'Bootstrap 5 removed jQuery entirely and added native CSS custom properties and color modes (`data-bs-theme="dark"`)',
    'Massive third-party ecosystem of themes, templates, and UI extensions'
  ],
  weaknesses: [
    'Standard look is widely recognized and can look generic without custom theming'
  ],
  tags: [
    'bootstrap',
    'css-framework',
    'sass',
    'responsive',
    'grid',
    'dark-mode',
    'rtl',
    'mainstream'
  ],
  aliases: ['Bootstrap', 'Bootstrap 5', 'getbootstrap', 'TWBS'],
  relatedSystems: ['react-bootstrap', 'reactstrap', 'bulma', 'foundation'],
  systemTypes: ['css-framework', 'component-library'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install bootstrap @popperjs/core',
      packages: ['bootstrap', '@popperjs/core'],
      setupInstructions: 'Import `bootstrap/dist/css/bootstrap.min.css` and `bootstrap/dist/js/bootstrap.bundle.min.js`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'btn',
      description: 'Bootstrap action button with btn-primary, btn-secondary, btn-success, btn-danger.',
      importExample: '<button type="button" class="btn btn-primary">Primary Action</button>',
      docSubUrl: 'docs/5.3/components/buttons/'
    },
    card: {
      canonicalName: 'card',
      description: 'Bootstrap container card with card-header, card-body, and card-footer.',
      importExample: '<div class="card"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Content</p></div></div>',
      docSubUrl: 'docs/5.3/components/card/'
    }
  },
  aiInstructions: {
    principles: [
      'Use standard Bootstrap 5 container, row, and col classes for layout.',
      'Use `data-bs-*` attributes for JavaScript plugin behavior (e.g. `data-bs-toggle="modal"`).',
      'Toggle dark theme using `data-bs-theme="dark"` on `<html>` or container elements.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Configure themes via Bootstrap 5 Sass maps ($theme-colors) or CSS variables.',
    iconUsage: 'Use `bootstrap-icons` (e.g. `<i class="bi bi-search"></i>`).',
    layoutConventions: 'Use `.container`, `.row`, and `.col-*`.'
  }
};
