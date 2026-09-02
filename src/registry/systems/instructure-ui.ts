import { UISystem } from '../../schemas/uiSystem.js';

export const instructureUi: UISystem = {
  id: 'instructure-ui',
  name: 'Instructure UI (Canvas LMS Design System)',
  organization: 'Instructure',
  description: 'Instructure’s official open-source design system and React component suite, powering Canvas LMS, MasterConnect, and educational software worldwide with benchmark WCAG AAA accessibility, accessible gradebooks, quizzes, and course navigation.',
  category: 'company-design-system',
  secondaryCategories: ['accessibility-focused', 'saas', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@instructure/ui', '@instructure/ui-buttons', '@instructure/ui-themeable'],
  docsUrl: 'https://instructure.github.io/instructure-ui',
  repositoryUrl: 'https://github.com/instructure/instructure-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Engineered specifically for strict Section 508 and WCAG 2.1 AAA education accessibility compliance across thousands of universities and K-12 schools.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Instructure Theme engine with Emotion theme provider',
    packageName: '@instructure/ui-themeable'
  },
  icons: {
    available: true,
    packageName: '@instructure/ui-icons',
    name: 'Instructure Education & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern education technology aesthetic: Canvas Red (#e02424) / Blue accents, gradebook rubrics, course syllabus cards, student submissions drawers, and high-contrast accessible typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Learning management systems (LMS), education technology, student portals, and grading consoles',
    'EdTech applications requiring strict WCAG AAA and Section 508 government education compliance',
    'Complex educational workflow interfaces with full screen reader accessibility'
  ],
  avoidFor: [
    'Retro gaming websites'
  ],
  strengths: [
    'The premier open-source design system for global education technology and LMS software',
    'Industry-leading accessibility (Section 508 / WCAG AAA compliance built into every component)',
    'Full RTL support and comprehensive localization for global education deployments'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'instructure',
    'canvas-lms',
    'education',
    'edtech',
    'accessibility',
    'aaa-compliance',
    'enterprise',
    'hidden-gem'
  ],
  aliases: ['Instructure UI', 'Canvas LMS UI', 'InstUI', 'Canvas Design System'],
  systemTypes: ['company-design-system', 'component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @instructure/ui @instructure/ui-icons @instructure/ui-themeable',
      packages: ['@instructure/ui', '@instructure/ui-icons', '@instructure/ui-themeable'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<InstUISettingsProvider theme={canvas}>`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Instructure accessible button with color="primary" | "secondary" | "danger".',
      importExample: "import { Button } from '@instructure/ui';\n\n<Button color=\"primary\">Submit Assignment</Button>",
      docSubUrl: '#Button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<InstUISettingsProvider theme={canvas}>`.',
      'Use Instructure UI accessible primitives for education workflows.',
      'Ensure strict WCAG AAA color contrast compliance.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes via `@instructure/ui-themeable`.',
    iconUsage: 'Import icons from `@instructure/ui-icons`.',
    layoutConventions: 'Use View and Flex layout primitives.'
  }
};
