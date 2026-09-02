import { UISystem } from '../../schemas/uiSystem.js';

export const reactstrap: UISystem = {
  id: 'reactstrap',
  name: 'reactstrap',
  organization: 'reactstrap Community',
  description: 'An open-source React component library for Bootstrap 5, providing simple, flexible React wrapper components without jQuery dependencies for rapid Bootstrap application development.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'sass',
  packageNames: ['reactstrap', 'bootstrap'],
  docsUrl: 'https://reactstrap.github.io',
  repositoryUrl: 'https://github.com/reactstrap/reactstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides Bootstrap 5 accessible component state and keyboard focus handling.'
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
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Standard Bootstrap 5 aesthetic: clean cards, responsive collapse navbars, and familiar Bootstrap component ergonomics.',
  noveltyLevel: 'established',
  bestFor: [
    'React applications wanting lightweight Bootstrap 5 wrapper components',
    'Projects migrating from legacy Bootstrap templates into React',
    'Teams prioritizing straightforward component naming and Bootstrap conventions'
  ],
  avoidFor: [
    'Tailwind-only or headless-only projects'
  ],
  strengths: [
    'Lightweight and intuitive React bindings for Bootstrap 5',
    'Full support for Bootstrap 5 color modes and responsive utilities',
    'No runtime CSS-in-JS dependencies'
  ],
  weaknesses: [
    'Similar feature set to React-Bootstrap'
  ],
  tags: [
    'reactstrap',
    'bootstrap',
    'react',
    'css-framework',
    'sass',
    'established'
  ],
  aliases: ['Reactstrap', 'Bootstrap Reactstrap'],
  relatedSystems: ['bootstrap', 'react-bootstrap'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install reactstrap bootstrap',
      packages: ['reactstrap', 'bootstrap'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `bootstrap/dist/css/bootstrap.min.css` in your root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Reactstrap button with color="primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark".',
      importExample: "import { Button } from 'reactstrap';\n\n<Button color=\"primary\">Action</Button>",
      docSubUrl: '?path=/docs/components-button--button'
    }
  },
  aiInstructions: {
    principles: [
      'Import `bootstrap/dist/css/bootstrap.min.css` at root.',
      'Use `Container`, `Row`, `Col` for responsive layout.',
      'Use `Form`, `FormGroup`, `Label`, `Input` for form controls.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure themes via Bootstrap 5 Sass variables.',
    iconUsage: 'Use `bootstrap-icons`.',
    layoutConventions: 'Use Container, Row, and Col layout structure.'
  }
};
