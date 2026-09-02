import { UISystem } from '../../schemas/uiSystem.js';

export const spartanNg: UISystem = {
  id: 'spartan-ng',
  name: 'Spartan (Angular Brain & Helm / shadcn for Angular)',
  organization: 'goetzrobin / Spartan Community',
  description: 'An open-source, source-owned component collection for Angular, combining headless primitives (Spartan Brain powered by Angular CDK) with pre-styled Tailwind CSS components (Spartan Helm) to bring the shadcn/ui experience to modern Angular.',
  category: 'source-owned',
  secondaryCategories: ['saas', 'dashboard', 'styled'],
  frameworks: ['angular'],
  stylingApproach: 'tailwind',
  packageNames: ['@spartan-ng/ui-core', 'clsx', 'tailwind-merge', 'lucide-angular'],
  docsUrl: 'https://spartan.ng',
  repositoryUrl: 'https://github.com/goetzrobin/spartan',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Built on Spartan Brain (Angular CDK) headless primitives with accessible focus trapping and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme variables matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-angular',
    name: 'Lucide Angular Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'The iconic shadcn/ui minimalist aesthetic brought to Angular: subtle neutral borders, command palettes, accessible dialogs, and dark mode toggles.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Modern Angular applications built on Tailwind CSS wanting source-owned copy-paste component architecture',
    'Angular developers wanting the shadcn/ui developer experience with Angular Signals and standalone components',
    'SaaS dashboards and developer platforms in Angular'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Brings the shadcn/ui architecture directly to modern Angular (Signals + Standalone + CDK)',
    'Modular separation between headless behavior (Brain) and Tailwind styling (Helm)',
    '100% source-owned components generated via Spartan CLI (`npx @spartan-ng/cli ui add ...`)'
  ],
  weaknesses: [
    'Angular only'
  ],
  tags: [
    'spartan',
    'angular',
    'shadcn',
    'source-owned',
    'brain',
    'helm',
    'tailwind',
    'signals',
    'hidden-gem'
  ],
  aliases: ['Spartan', 'spartan/ui', 'Spartan NG', 'shadcn for Angular'],
  relatedSystems: ['shadcn-ui', 'angular-material', 'shadcn-vue'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    angular: {
      command: 'npx @spartan-ng/cli ui add button dialog',
      packages: ['@spartan-ng/ui-core', 'clsx', 'tailwind-merge', 'lucide-angular'],
      peerDependencies: ['@angular/core', '@angular/cdk', 'tailwindcss']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'HlmButtonDirective',
      description: 'Spartan Helm button directive for Angular with variant and size inputs.',
      importExample: '<button hlmBtn variant="default">Save Changes</button>',
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Generate components via `npx @spartan-ng/cli ui add <component>`.',
      'Use Spartan Helm directives (`hlmBtn`, `hlmInput`, `hlmCard`) for Tailwind styling.',
      'Use `lucide-angular` for iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors via Tailwind CSS CSS variables.',
    iconUsage: 'Use `lucide-angular`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
