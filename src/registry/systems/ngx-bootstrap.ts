import { UISystem } from '../../schemas/uiSystem.js';

export const ngxBootstrap: UISystem = {
  id: 'ngx-bootstrap',
  name: 'ngx-bootstrap (Valor Software Angular Bootstrap)',
  organization: 'Valor Software',
  description: 'An open-source Angular component library containing all core Bootstrap components powered by Angular, engineered for high performance on mobile and desktop with support for Bootstrap 3, 4, and 5.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'enterprise', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['ngx-bootstrap', 'bootstrap'],
  docsUrl: 'https://valor-software.com/ngx-bootstrap',
  repositoryUrl: 'https://github.com/valor-software/ngx-bootstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides accessible keyboard navigation and WAI-ARIA roles across Angular Bootstrap widgets.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Bootstrap Sass variables',
    packageName: 'bootstrap'
  },
  icons: {
    available: true,
    name: 'Bootstrap Icons / FontAwesome integration'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Classic enterprise Bootstrap styling in Angular: crisp buttons, responsive modals, date-range pickers, tooltips, and carousels.',
  noveltyLevel: 'established',
  bestFor: [
    'Angular applications wanting flexible support across Bootstrap 4 or Bootstrap 5',
    'Enterprise projects needing advanced date-range pickers with localization in Angular',
    'Legacy Angular migrations'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'Maintained by Valor Software with battle-tested enterprise performance',
    'One of the most feature-rich datepicker and daterangepicker widgets for Angular',
    'Zero jQuery dependency'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'ngx-bootstrap',
    'bootstrap',
    'angular',
    'valor-software',
    'datepicker',
    'daterangepicker',
    'established'
  ],
  aliases: ['ngx-bootstrap', 'NGX Bootstrap', 'Valor Bootstrap'],
  relatedSystems: ['ng-bootstrap', 'bootstrap'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add ngx-bootstrap',
      packages: ['ngx-bootstrap', 'bootstrap'],
      peerDependencies: ['@angular/core', '@angular/common']
    }
  },
  componentGuidance: {
    datepicker: {
      canonicalName: 'bsDatepicker',
      description: 'ngx-bootstrap datepicker and daterangepicker directive.',
      importExample: '<input type="text" placeholder="Select Date Range" class="form-control" bsDaterangepicker>',
      docSubUrl: '#/components/datepicker'
    }
  },
  aiInstructions: {
    principles: [
      'Import required `Bs*Module` (e.g. `BsDatepickerModule.forRoot()`) in Angular.',
      'Use Bootstrap CSS stylesheet in `angular.json`.',
      'Use `bsDatepicker` / `bsDaterangepicker` directives for date inputs.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Bootstrap Sass variables.',
    iconUsage: 'Use `bootstrap-icons` or FontAwesome.',
    layoutConventions: 'Use Bootstrap grid layout.'
  }
};
