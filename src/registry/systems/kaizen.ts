import { UISystem } from '../../schemas/uiSystem.js';

export const kaizen: UISystem = {
  id: 'kaizen',
  name: 'Culture Amp Kaizen',
  organization: 'Culture Amp',
  description: 'Culture Amp’s official open-source design system and React component library, engineered for people analytics, employee pulse surveys, performance reviews, and workplace culture insights.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'dashboard', 'data-heavy', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['@kaizen/button', '@kaizen/design-tokens', '@kaizen/component-library'],
  docsUrl: 'https://cultureamp.design',
  repositoryUrl: 'https://github.com/cultureamp/kaizen-design-system',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA conformance across employee sentiment surveys.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and JavaScript constants',
    packageName: '@kaizen/design-tokens'
  },
  icons: {
    available: true,
    name: 'Kaizen Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Warm, thoughtful, people-first HR tech aesthetic: Culture Amp Purple and Coral accents, Likert survey scale cards, and employee feedback sentiment bars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Employee engagement surveys, pulse feedback, and 360 performance reviews',
    'People analytics dashboards, diversity reporting, and workforce sentiment trends',
    'SaaS applications needing empathetic and accessible feedback collection'
  ],
  avoidFor: [
    'Developer terminal CLI utilities'
  ],
  strengths: [
    'Specialized survey and sentiment feedback components (Likert scales, sentiment tags, survey steppers)',
    'Empathetic, inclusive design language with high accessibility standards',
    'Rich React component kit backed by Kaizen design tokens'
  ],
  weaknesses: [
    'React only',
    'HR/People analytics focus'
  ],
  tags: [
    'culture-amp',
    'kaizen',
    'hr',
    'survey',
    'people-analytics',
    'saas',
    'accessible',
    'hidden-gem'
  ],
  aliases: ['Kaizen', 'Culture Amp Design System', 'Kaizen UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @kaizen/button @kaizen/design-tokens',
      packages: ['@kaizen/button', '@kaizen/design-tokens'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@kaizen/design-tokens/tokens.css` at your application root.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Kaizen action button with primary, secondary, and destructive variants.',
      importExample: "import { Button } from '@kaizen/button';\n\n<Button primary>Submit Survey</Button>",
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@kaizen/design-tokens/tokens.css`.',
      'Use Kaizen Tag and Badge components for sentiment categories.',
      'Ensure high contrast and clear accessible survey options.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Kaizen design tokens for colors, spacing, and typography.',
    iconUsage: 'Use Kaizen icon components.',
    layoutConventions: 'Use standard survey and card layouts with Kaizen spacing.'
  }
};
