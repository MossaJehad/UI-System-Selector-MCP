import { UISystem } from '../../schemas/uiSystem.js';

export const braid: UISystem = {
  id: 'braid',
  name: 'SEEK Braid Design System',
  organization: 'SEEK',
  description: 'SEEK’s official open-source design system and React component suite powered by Treat / Vanilla Extract, engineered for employment marketplaces, resume builders, salary calculators, and multi-brand recruitment portals.',
  category: 'company-design-system',
  secondaryCategories: ['consumer', 'saas', 'accessibility-focused'],
  frameworks: ['react'],
  stylingApproach: 'vanilla-extract',
  packageNames: ['braid-design-system'],
  docsUrl: 'https://seek-oss.github.io/braid-design-system',
  repositoryUrl: 'https://github.com/seek-oss/braid-design-system',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Rigorously audited for WCAG 2.1 AA across SEEK and Jora job portals.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'TypeScript theme contracts and Vanilla Extract design tokens',
    packageName: 'braid-design-system'
  },
  icons: {
    available: true,
    packageName: 'braid-design-system',
    name: 'Braid Built-in SVG Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Modern, clean employment marketplace style: SEEK Pink / Blue accents, Box/Stack layout primitives, salary range badges, and crisp job card listings.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Job boards, recruitment platforms, and talent marketplace dashboards',
    'Multi-brand consumer portals needing zero-runtime CSS with Vanilla Extract',
    'Accessible React web applications with strict design token governance'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Pioneer of zero-runtime CSS layout primitives (Box, Stack, Inline, Columns, Tiles)',
    'Multi-brand theming (SEEK, SEEK Asia, JobStreet, JobsDB) out of the box',
    'Strict type safety and prop governance eliminating arbitrary inline CSS hacks'
  ],
  weaknesses: [
    'React only'
  ],
  tags: [
    'seek',
    'braid',
    'recruitment',
    'jobs',
    'vanilla-extract',
    'tokens',
    'accessible',
    'multi-brand',
    'hidden-gem'
  ],
  aliases: ['Braid', 'Braid Design System', 'SEEK UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install braid-design-system',
      packages: ['braid-design-system'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<BraidProvider theme={seekAnz}>` from `braid-design-system`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Braid action button with variant="solid" | "transparent" | "soft".',
      importExample: "import { Button } from 'braid-design-system';\n\n<Button variant=\"solid\">Apply for Job</Button>",
      docSubUrl: 'components/Button'
    },
    card: {
      canonicalName: 'Card',
      description: 'Braid content card container with rounded corners and shadow.',
      importExample: "import { Card, Heading, Text, Stack } from 'braid-design-system';\n\n<Card><Stack space=\"gutter\"><Heading level=\"3\">Senior Software Engineer</Heading><Text tone=\"secondary\">Sydney, NSW • $160k - $180k</Text></Stack></Card>",
      docSubUrl: 'components/Card'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap root with `<BraidProvider theme={...}>`.',
      'Use Braid layout primitives (`Box`, `Stack`, `Inline`, `Columns`, `Column`, `Tiles`) instead of raw HTML divs or custom CSS.',
      'Use Braid Badge and Tag components for salary, location, and job type chips.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material', 'tailwindcss'],
    themingGuide: 'Configure themes via `seekAnz`, `seekAsia`, or custom Braid theme contracts.',
    iconUsage: 'Import icons directly from `braid-design-system` (e.g. IconSearch, IconLocation).',
    layoutConventions: 'Construct layouts exclusively with Stack, Inline, Columns, and Tiles.'
  }
};
