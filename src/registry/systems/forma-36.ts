import { UISystem } from '../../schemas/uiSystem.js';

export const forma36: UISystem = {
  id: 'forma-36',
  name: 'Contentful Forma 36',
  organization: 'Contentful',
  description: 'Contentful’s official open-source design system and React component library, engineered for rich content authoring tools, headless CMS apps, media asset libraries, and editorial workflows.',
  category: 'company-design-system',
  secondaryCategories: ['creative-tool', 'developer-tool', 'saas'],
  frameworks: ['react'],
  stylingApproach: 'emotion',
  packageNames: ['@contentful/f36-components', '@contentful/f36-tokens', '@contentful/f36-icons'],
  docsUrl: 'https://f36.contentful.com',
  repositoryUrl: 'https://github.com/contentful/forma-36',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Tested for WCAG 2.1 AA conformance across Contentful Web App.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS Custom Properties and JS/TS constants',
    packageName: '@contentful/f36-tokens'
  },
  icons: {
    available: true,
    packageName: '@contentful/f36-icons',
    name: 'Forma 36 Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Clean, structured editorial workspace aesthetic: Contentful Blue (#0059c8), crisp asset cards, drag-and-drop entry cards, and rich text toolbar styling.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Contentful Marketplace Apps and custom field editors',
    'Headless CMS content authoring and publishing dashboards',
    'Media asset managers, tag organizers, and editorial workflow tools'
  ],
  avoidFor: [
    'High-speed stock trading terminals',
    'Dark-mode developer consoles'
  ],
  strengths: [
    'Specialized content management components: EntryCard, AssetCard, Note, EntityList, Workbench',
    'Comprehensive design tokens and official icon set',
    'The standard design system for Contentful ecosystem developers'
  ],
  weaknesses: [
    'React only',
    'Lacks native dark mode'
  ],
  tags: [
    'contentful',
    'forma-36',
    'cms',
    'editorial',
    'content-management',
    'saas',
    'developer-tool',
    'hidden-gem'
  ],
  aliases: ['Forma 36', 'F36', 'Contentful Design System'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @contentful/f36-components @contentful/f36-tokens @contentful/f36-icons',
      packages: ['@contentful/f36-components', '@contentful/f36-tokens', '@contentful/f36-icons'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import components directly from `@contentful/f36-components`.'
    }
  },
  componentGuidance: {
    entrycard: {
      canonicalName: 'EntryCard',
      description: 'Card representing a CMS content entry with title, description, status, and actions.',
      importExample: "import { EntryCard } from '@contentful/f36-components';\n\n<EntryCard title=\"Blog Post Draft\" status=\"draft\" contentType=\"Article\" />",
      docSubUrl: 'components/entry-card'
    },
    button: {
      canonicalName: 'Button',
      description: 'Forma 36 action button with variant="primary" | "secondary" | "positive" | "negative".',
      importExample: "import { Button } from '@contentful/f36-components';\n\n<Button variant=\"primary\">Publish Entry</Button>",
      docSubUrl: 'components/button'
    }
  },
  aiInstructions: {
    principles: [
      'Use `@contentful/f36-components` for all UI primitives.',
      'Use `EntryCard` and `AssetCard` for content listings.',
      'Use `Flex` and `Grid` layout primitives with Forma 36 tokens.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use `@contentful/f36-tokens` for colors, spacing, and typography.',
    iconUsage: 'Import icons from @contentful/f36-icons (e.g. PlusIcon, EditIcon, CheckCircleIcon).',
    layoutConventions: 'Use Flex and Stack components with token spacing (e.g. spacingM, spacingL).'
  }
};
