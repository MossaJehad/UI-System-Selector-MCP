import { UISystem } from '../../schemas/uiSystem.js';

export const coreuiReact: UISystem = {
  id: 'coreui-react',
  name: 'CoreUI for React',
  organization: 'creativeLabs / CoreUI',
  description: 'An open-source React admin dashboard template and component library based on Bootstrap 5, engineered for rapid creation of responsive enterprise back-office consoles, analytics dashboards, and chart-heavy admin panels.',
  category: 'component-library',
  secondaryCategories: ['dashboard', 'enterprise', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'sass',
  packageNames: ['@coreui/react', '@coreui/coreui', '@coreui/icons-react'],
  docsUrl: 'https://coreui.io/react/docs',
  repositoryUrl: 'https://github.com/coreui/coreui-react',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across admin template tables and forms.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Bootstrap 5 and CoreUI Sass variables and CSS custom properties',
    packageName: '@coreui/coreui'
  },
  icons: {
    available: true,
    packageName: '@coreui/icons-react',
    name: 'CoreUI Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Classic enterprise administration dashboard style: sidebar navigation drawer, top navbar breadcrumbs, metric widget cards, and Chart.js analytics graphs.',
  noveltyLevel: 'established',
  bestFor: [
    'Admin panels, internal back-office consoles, and enterprise ERP dashboards',
    'React applications leveraging Bootstrap 5 grid with pre-built dashboard widgets',
    'Fast MVP creation of corporate data management hubs'
  ],
  avoidFor: [
    'Consumer mobile games'
  ],
  strengths: [
    'Pre-built dashboard shell layout with sidebar toggling and breadcrumb integration',
    'First-class Chart.js and multi-select table components',
    'Available across React, Vue, and Angular with shared design language'
  ],
  weaknesses: [
    'Admin dashboard specific layout structure'
  ],
  tags: [
    'coreui',
    'admin',
    'dashboard',
    'bootstrap',
    'react',
    'enterprise',
    'dark-mode',
    'established'
  ],
  aliases: ['CoreUI', 'CoreUI React', 'CoreUI Admin'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @coreui/react @coreui/coreui @coreui/icons-react',
      packages: ['@coreui/react', '@coreui/coreui', '@coreui/icons-react'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@coreui/coreui/dist/css/coreui.min.css` in your root layout.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'CButton',
      description: 'CoreUI button with color="primary" | "secondary" | "success" | "danger".',
      importExample: "import { CButton } from '@coreui/react';\n\n<CButton color=\"primary\">Generate Invoice</CButton>",
      docSubUrl: 'components/button'
    },
    card: {
      canonicalName: 'CCard',
      description: 'CoreUI card container with CCardHeader, CCardBody, and CCardFooter.',
      importExample: "import { CCard, CCardHeader, CCardBody } from '@coreui/react';\n\n<CCard><CCardHeader>Sales Overview</CCardHeader><CCardBody>Card Content</CCardBody></CCard>",
      docSubUrl: 'components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@coreui/coreui/dist/css/coreui.min.css` at root.',
      'Use CContainer, CRow, and CCol for responsive grid layouts.',
      'Use CCard and CWidgetStats for dashboard metrics.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Configure themes via CoreUI Sass variables or `data-coreui-theme="dark"`.',
    iconUsage: 'Use `<CIcon icon={cilSearch} />` from `@coreui/icons-react`.',
    layoutConventions: 'Use CContainer, CRow, and CCol.'
  }
};
