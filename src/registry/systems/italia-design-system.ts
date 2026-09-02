import { UISystem } from '../../schemas/uiSystem.js';

export const italiaDesignSystem: UISystem = {
  id: 'italia-design-system',
  name: 'Designers Italia (Bootstrap Italia)',
  organization: 'Dipartimento per la trasformazione digitale & AgID (Italy)',
  description: 'The official Italian Public Administration design system and frontend library, based on Bootstrap and Titillium Web typography, engineered for accessibility (WCAG 2.1 AA) and modern citizen services across Italian municipalities and ministries.',
  category: 'government',
  secondaryCategories: ['accessibility-focused', 'css-framework'],
  frameworks: ['html-css', 'vanilla', 'react', 'css-only'],
  stylingApproach: 'sass',
  packageNames: ['bootstrap-italia', 'design-react-kit'],
  docsUrl: 'https://designers.italia.it',
  repositoryUrl: 'https://github.com/italia/bootstrap-italia',
  license: 'BSD-3-Clause',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Complies with Italian AgID guidelines and European standard EN 301 549 (WCAG 2.1 AA).'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in Sass and CSS Custom Properties',
    packageName: 'bootstrap-italia'
  },
  icons: {
    available: true,
    packageName: 'bootstrap-italia',
    name: 'Bootstrap Italia SVG Sprites'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Contemporary Italian civic style with Italia Blue (#0066cc) accents, Titillium Web typography, and official PA header patterns.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Italian public administration portals and municipal websites',
    'European civic tech and digital identity (SPID / CIE) integration portals',
    'Bootstrap-based accessible government websites'
  ],
  avoidFor: [
    'Non-Italian commercial web applications'
  ],
  strengths: [
    'AgID and European accessibility standard EN 301 549 compliance',
    'Official SPID and CIE digital identity login button patterns',
    'Comprehensive React component wrapper via `design-react-kit`'
  ],
  weaknesses: [
    'Strong Italian public administration branding'
  ],
  tags: [
    'government',
    'italy',
    'italia',
    'agid',
    'spid',
    'accessible',
    'bootstrap',
    'hidden-gem'
  ],
  aliases: ['Designers Italia', 'Bootstrap Italia', 'AgID Design System'],
  systemTypes: ['government', 'design-system', 'css-framework'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install bootstrap-italia',
      packages: ['bootstrap-italia'],
      setupInstructions: 'Import `bootstrap-italia/dist/css/bootstrap-italia.min.css` and `bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js`.'
    },
    react: {
      command: 'npm install design-react-kit bootstrap-italia',
      packages: ['design-react-kit', 'bootstrap-italia'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    header: {
      canonicalName: 'it-header-wrapper',
      description: 'Official Italian Public Administration multi-tier header.',
      importExample: '<div class="it-header-wrapper"><div class="it-header-slim-wrapper"><div class="container"><div class="row"><div class="col-12"><div class="it-header-slim-wrapper-content"><a class="d-none d-lg-block navbar-brand" href="#">Nome della Pubblica Amministrazione</a></div></div></div></div></div></div>',
      docSubUrl: 'modelli/modello-comuni/'
    },
    button: {
      canonicalName: 'btn-primary',
      description: 'Bootstrap Italia accessible primary action button.',
      importExample: '<button type="button" class="btn btn-primary">Accedi con SPID</button>',
      docSubUrl: 'design-system/componenti/bottoni/'
    }
  },
  aiInstructions: {
    principles: [
      'Use official Bootstrap Italia classes or `design-react-kit` components.',
      'Ensure EN 301 549 / WCAG 2.1 AA accessibility compliance.',
      'Use Titillium Web as the primary font family.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure via Bootstrap Italia Sass variables ($primary: #0066cc).',
    iconUsage: 'Use SVG sprite icons via `<svg class="icon"><use href="...#it-check"></use></svg>`.',
    layoutConventions: 'Use standard Bootstrap 5 container, row, and col layout grid.'
  }
};
