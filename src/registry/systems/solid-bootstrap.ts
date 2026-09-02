import { UISystem } from '../../schemas/uiSystem.js';

export const solidBootstrap: UISystem = {
  id: 'solid-bootstrap',
  name: 'Solid Bootstrap',
  organization: 'SolidJS Community / solid-bootstrap Team',
  description: 'The official Bootstrap 5 component library reconstructed for SolidJS fine-grained reactivity, providing full Bootstrap 5 widgets (Modal, Dropdown, Accordion, Navbar, Carousel, Tabs) with zero virtual DOM overhead.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas'],
  frameworks: ['solid'],
  stylingApproach: 'sass',
  packageNames: ['solid-bootstrap', 'bootstrap'],
  docsUrl: 'https://solid-bootstrap.github.io/solid-bootstrap',
  repositoryUrl: 'https://github.com/solid-bootstrap/solid-bootstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to Bootstrap 5 accessibility standards with SolidJS fine-grained focus management.'
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
  aesthetic: 'Bootstrap 5 clean enterprise style in SolidJS: reactive modals, dropdowns, navbars, and buttons without virtual DOM overhead.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'SolidJS web applications styled with Bootstrap 5 wanting fine-grained reactivity',
    'Developers transitioning from React Bootstrap to SolidJS',
    'High-performance web apps'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Pure SolidJS fine-grained reactivity with zero virtual DOM diffing',
    '100% Bootstrap 5 component parity and familiar React-Bootstrap component API',
    'Zero jQuery and zero Bootstrap JS dependencies'
  ],
  weaknesses: [
    'SolidJS only'
  ],
  tags: [
    'solid-bootstrap',
    'bootstrap',
    'solidjs',
    'solid',
    'component-library',
    'sass',
    'hidden-gem'
  ],
  aliases: ['Solid Bootstrap', 'SolidBootstrap', 'Bootstrap Solid'],
  relatedSystems: ['suid', 'hope-ui', 'bootstrap', 'react-bootstrap'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    solid: {
      command: 'npm install solid-bootstrap bootstrap',
      packages: ['solid-bootstrap', 'bootstrap'],
      peerDependencies: ['solid-js'],
      setupInstructions: 'Import `bootstrap/dist/css/bootstrap.min.css` in `index.tsx`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Solid Bootstrap button with variant="primary" | "secondary" | "success" | "danger".',
      importExample: "import { Button } from 'solid-bootstrap';\n\n<Button variant=\"primary\">Save</Button>",
      docSubUrl: '#/components/buttons'
    }
  },
  aiInstructions: {
    principles: [
      'Import components from `solid-bootstrap`.',
      'Import Bootstrap CSS at root entry file.',
      'Use Solid Bootstrap Grid components (`Container`, `Row`, `Col`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via Bootstrap 5 Sass variables.',
    iconUsage: 'Use `bootstrap-icons`.',
    layoutConventions: 'Use Bootstrap 12-column grid system.'
  }
};
