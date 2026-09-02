import { UISystem } from '../../schemas/uiSystem.js';

export const ngBootstrap: UISystem = {
  id: 'ng-bootstrap',
  name: 'ng-bootstrap (Angular Bootstrap)',
  organization: 'ng-bootstrap Team',
  description: 'The official, accessible Angular component library for Bootstrap 5, providing Angular widgets (Accordion, Alert, Carousel, Collapse, Datepicker, Dropdown, Modal, Pagination, Popover, Rating, Toast) with zero dependencies on jQuery or Bootstrap JavaScript.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas'],
  frameworks: ['angular'],
  stylingApproach: 'sass',
  packageNames: ['@ng-bootstrap/ng-bootstrap', 'bootstrap'],
  docsUrl: 'https://ng-bootstrap.github.io',
  repositoryUrl: 'https://github.com/ng-bootstrap/ng-bootstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides strict WAI-ARIA compliance, focus trapping in modal dialogs, and accessible datepicker keyboard navigation.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap 5 Sass variables and CSS custom properties',
    packageName: 'bootstrap'
  },
  icons: {
    available: true,
    packageName: 'bootstrap-icons',
    name: 'Bootstrap Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Bootstrap 5 clean enterprise style in Angular: Primary Blue (#0d6efd), accessible modal dialogs, responsive pagination, and datepicker popups.',
  noveltyLevel: 'established',
  bestFor: [
    'Angular applications styled with Bootstrap 5 wanting first-class reactive Angular components',
    'Projects requiring accessible date pickers, typeaheads, and modal dialogues with zero jQuery',
    'Enterprise web apps with established Bootstrap design guidelines'
  ],
  avoidFor: [
    'React, Vue, or Svelte projects'
  ],
  strengths: [
    'The standard gold-standard Bootstrap library for modern Angular',
    'Pure Angular widgets with zero third-party JS dependencies (no jQuery, no popper.js, no Bootstrap JS)',
    'Full Angular CLI schematic support (`ng add @ng-bootstrap/ng-bootstrap`) and accessible date picker'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'ng-bootstrap',
    'bootstrap',
    'angular',
    'component-library',
    'sass',
    'datepicker',
    'established'
  ],
  aliases: ['ng-bootstrap', 'Angular Bootstrap', 'ng bootstrap'],
  relatedSystems: ['bootstrap', 'react-bootstrap', 'bootstrap-vue-next'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    angular: {
      command: 'ng add @ng-bootstrap/ng-bootstrap',
      packages: ['@ng-bootstrap/ng-bootstrap', 'bootstrap'],
      peerDependencies: ['@angular/core', '@angular/common', '@angular/forms', '@angular/localize']
    }
  },
  componentGuidance: {
    modal: {
      canonicalName: 'NgbModal',
      description: 'ng-bootstrap accessible modal service and template.',
      importExample: "import { NgbModal } from '@ng-bootstrap/ng-bootstrap';\n\nconstructor(private modalService: NgbModal) {}\nopen(content: any) { this.modalService.open(content); }",
      docSubUrl: '#/components/modal/overview'
    }
  },
  aiInstructions: {
    principles: [
      'Import required `Ngb*Module` or use standalone imports in Angular.',
      'Use Bootstrap 5 CSS stylesheet in `angular.json`.',
      'Use `NgbModal` and `NgbDatepicker` for complex interactive flows.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Bootstrap 5 Sass variables.',
    iconUsage: 'Use `bootstrap-icons`.',
    layoutConventions: 'Use Bootstrap 5 12-column grid layout.'
  }
};
