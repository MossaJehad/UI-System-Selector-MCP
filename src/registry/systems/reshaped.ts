import { UISystem } from '../../schemas/uiSystem.js';

export const reshaped: UISystem = {
  id: 'reshaped',
  name: 'Reshaped',
  organization: 'Reshaped',
  description: 'A modern, multi-framework design system and component library built with TypeScript, CSS Modules, and Figma tokens, providing polished React and Figma-first UI architecture with automated color theming and full viewport responsive utilities.',
  category: 'component-library',
  secondaryCategories: ['saas', 'accessibility-focused', 'styled'],
  frameworks: ['react'],
  stylingApproach: 'css-modules',
  packageNames: ['reshaped'],
  docsUrl: 'https://reshaped.so',
  repositoryUrl: 'https://github.com/reshaped/reshaped',
  license: 'Commercial & Open Community',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Designed to conform to WCAG 2.1 AA with complete keyboard and focus trap management.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS variables and Style Dictionary',
    packageName: 'reshaped'
  },
  icons: {
    available: true,
    packageName: 'reshaped',
    name: 'Reshaped Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'flexible',
  density: 'comfortable',
  aesthetic: 'Ultra-refined modern SaaS aesthetic: sophisticated neutral gray palettes, crisp subtle borders, beautiful elevation shadows, and precise typography.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Modern SaaS web applications, developer platforms, and fintech interfaces',
    'Design teams wanting a seamless 1:1 match between Figma tokens and React code',
    'Multi-theme web applications needing light, dark, and custom brand modes'
  ],
  avoidFor: [
    'Retro 8-bit game interfaces'
  ],
  strengths: [
    'Exceptional visual craftsmanship and modern SaaS design polish',
    'Comprehensive component suite (Button, Card, Modal, Table, Tabs, Popover, Tooltip, Stepper)',
    'Automated theming with seamless Figma token sync'
  ],
  weaknesses: [
    'React only for web implementation'
  ],
  tags: [
    'reshaped',
    'saas',
    'design-tokens',
    'figma',
    'modern',
    'dark-mode',
    'rtl',
    'hidden-gem'
  ],
  aliases: ['Reshaped', 'Reshaped UI', 'Reshaped Design System'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install reshaped',
      packages: ['reshaped'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<Reshaped theme="slate">` from `reshaped` and import styles.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Reshaped action button with color="primary" | "neutral" | "critical" | "positive".',
      importExample: "import { Button } from 'reshaped';\n\n<Button color=\"primary\">Create Project</Button>",
      docSubUrl: 'components/button'
    },
    card: {
      canonicalName: 'Card',
      description: 'Reshaped container card with elevation and padding.',
      importExample: "import { Card, Text } from 'reshaped';\n\n<Card elevated><Text variant=\"body-2\">Project Overview</Text></Card>",
      docSubUrl: 'components/card'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with `<Reshaped theme="...">`.',
      'Use Reshaped View, Container, and Stack layout primitives.',
      'Apply Reshaped color tokens (primary, neutral, critical, positive).'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Reshaped theme switcher or custom theme configs.',
    iconUsage: 'Import icons from `reshaped` (e.g. Icon, IconSearch).',
    layoutConventions: 'Use View, Stack, and Grid primitives with token gap values.'
  }
};
