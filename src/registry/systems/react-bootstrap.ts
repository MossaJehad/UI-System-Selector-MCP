import { UISystem } from '../../schemas/uiSystem.js';

export const reactBootstrap: UISystem = {
  id: 'react-bootstrap',
  name: 'React Bootstrap',
  organization: 'React Bootstrap Community',
  description: 'The premier open-source React implementation of Bootstrap 5, rebuilding Bootstrap components as pure React components with zero jQuery dependency, full state encapsulation, and Bootstrap CSS theme compatibility.',
  category: 'component-library',
  secondaryCategories: ['css-framework', 'saas', 'consumer'],
  frameworks: ['react'],
  stylingApproach: 'sass',
  packageNames: ['react-bootstrap', 'bootstrap'],
  docsUrl: 'https://react-bootstrap.github.io',
  repositoryUrl: 'https://github.com/react-bootstrap/react-bootstrap',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Replaces Bootstrap jQuery plugins with accessible React state and ARIA attributes.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap 5 Sass variables and CSS Custom Properties',
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
  aesthetic: 'Universal Bootstrap 5 aesthetic: 12-column grid, responsive navbars, modal dialogs, cards, and clean forms with Bootstrap color tokens.',
  noveltyLevel: 'mainstream',
  bestFor: [
    'React applications leveraging standard Bootstrap 5 stylesheets or existing Bootstrap themes',
    'Developers and teams familiar with Bootstrap’s grid, modal, and navbar conventions',
    'Projects requiring a stable, mature, and ubiquitous component foundation'
  ],
  avoidFor: [
    'Projects demanding ultra-modern zero-runtime Tailwind or headless unstyled architectures'
  ],
  strengths: [
    'Zero jQuery: 100% pure React component state and event handlers',
    'Full compatibility with any Bootstrap 5 theme, CSS variables, and Sass customization',
    'Huge global ecosystem and battle-tested stability'
  ],
  weaknesses: [
    'Traditional Bootstrap aesthetic requires styling customization if distinct branding is required'
  ],
  tags: [
    'bootstrap',
    'react-bootstrap',
    'react',
    'css-framework',
    'grid',
    'sass',
    'mainstream'
  ],
  aliases: ['React-Bootstrap', 'Bootstrap React', 'React Bootstrap 5'],
  relatedSystems: ['bootstrap', 'reactstrap'],
  systemTypes: ['component-library', 'css-framework'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install react-bootstrap bootstrap',
      packages: ['react-bootstrap', 'bootstrap'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `bootstrap/dist/css/bootstrap.min.css` in your root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'React Bootstrap button with variant="primary" | "secondary" | "success" | "danger".',
      importExample: "import Button from 'react-bootstrap/Button';\n\n<Button variant=\"primary\">Save Changes</Button>",
      docSubUrl: 'components/buttons/'
    },
    modal: {
      canonicalName: 'Modal',
      description: 'Accessible Bootstrap modal dialog.',
      importExample: "import Modal from 'react-bootstrap/Modal';\n\n<Modal show={show} onHide={handleClose}><Modal.Header closeButton><Modal.Title>Modal title</Modal.Title></Modal.Header><Modal.Body>Content</Modal.Body></Modal>",
      docSubUrl: 'components/modal/'
    }
  },
  aiInstructions: {
    principles: [
      'Import `bootstrap/dist/css/bootstrap.min.css` at application root.',
      'Use React Bootstrap Container, Row, and Col for 12-column responsive layout.',
      'Use React Bootstrap Form, FormGroup, FormLabel, and FormControl for accessible forms.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure theme via Bootstrap 5 Sass variables or CSS custom properties (`data-bs-theme="dark"`).',
    iconUsage: 'Use `bootstrap-icons` (e.g. `npm i bootstrap-icons`).',
    layoutConventions: 'Use Container, Row, Col grid layout.'
  }
};
