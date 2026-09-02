import { UISystem } from '../../schemas/uiSystem.js';

export const plateUi: UISystem = {
  id: 'plate-ui',
  name: 'Plate UI (Slate.js + shadcn/ui)',
  organization: 'UDecode / Plate Community',
  description: 'An open-source, source-owned rich text editor framework built for React and Next.js, combining Slate.js with shadcn/ui and Tailwind CSS to deliver accessible Notion-like WYSIWYG editors, slash commands, table blocks, code syntax, and AI copilot prompts.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'developer-tool', 'saas'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['@udecode/plate-common', 'lucide-react', 'clsx', 'tailwind-merge'],
  docsUrl: 'https://platejs.org',
  repositoryUrl: 'https://github.com/udecode/plate',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides full keyboard shortcuts, focus preservation, and accessible rich text editor ARIA roles.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme tokens matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'moderately-opinionated',
  density: 'comfortable',
  aesthetic: 'Notion-like modern WYSIWYG editor style: floating bubble toolbars, slash command (`/`) popup menus, block drag handles, inline markdown formatting, and AI prompt input popovers.',
  noveltyLevel: 'established',
  bestFor: [
    'Notion-like document editors, markdown notes apps, and knowledge bases in React & Next.js',
    'Rich text editing with slash command menus, tables, code blocks, and media embeds',
    'Applications wanting source-owned editable Plate editor components built with shadcn/ui'
  ],
  avoidFor: [
    'Simple static landing pages not requiring text editing'
  ],
  strengths: [
    'The premier WYSIWYG and rich text editor framework for the shadcn/ui and Tailwind ecosystem',
    'Deep plugin ecosystem (Slash Commands, Table, Code Block, Excalidraw, AI Copilot, Drag & Drop)',
    '100% source-owned component CLI (`npx @udecode/plate-ui@latest add editor`)'
  ],
  weaknesses: [
    'Rich text editor domain specialization'
  ],
  tags: [
    'plate-ui',
    'editor',
    'wysiwyg',
    'slate',
    'rich-text',
    'notion-like',
    'shadcn',
    'source-owned',
    'tailwind',
    'react',
    'established'
  ],
  aliases: ['Plate UI', 'Plate', 'PlateJS', 'UDecode Plate'],
  relatedSystems: ['novel', 'shadcn-ui', 'origin-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npx @udecode/plate-ui@latest add editor',
      packages: ['@udecode/plate-common', 'lucide-react', 'clsx', 'tailwind-merge'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    editor: {
      canonicalName: 'Plate',
      description: 'Rich text editor root container with plugin configuration.',
      importExample: "import { Plate } from '@udecode/plate-common';\nimport { Editor } from '@/components/plate-ui/editor';\n\n<Plate plugins={plugins} initialValue={initialValue}><Editor /></Plate>",
      docSubUrl: 'docs/getting-started'
    }
  },
  aiInstructions: {
    principles: [
      'Use Plate UI components generated in `components/plate-ui/`.',
      'Configure Plate plugins for rich text features (Slash, Table, Code, Link, Mention).',
      'Use `lucide-react` for toolbar and slash command icons.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme matching shadcn/ui CSS variables.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Use Tailwind CSS flex and grid.'
  }
};
