import { UISystem } from '../../schemas/uiSystem.js';

export const novel: UISystem = {
  id: 'novel',
  name: 'Novel (Notion-style WYSIWYG)',
  organization: 'Steventey / Novel Community',
  description: 'An open-source Notion-style WYSIWYG editor built for React and Next.js with Tiptap, Tailwind CSS, AI autocomplete prompts, slash command menus, and generative text completions.',
  category: 'source-owned',
  secondaryCategories: ['creative-tool', 'saas'],
  frameworks: ['react', 'next'],
  stylingApproach: 'tailwind',
  packageNames: ['novel', 'lucide-react'],
  docsUrl: 'https://novel.sh',
  repositoryUrl: 'https://github.com/steven-tey/novel',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Provides full keyboard shortcuts and WAI-ARIA editor roles.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Tailwind CSS theme variables matching shadcn/ui conventions',
    packageName: 'tailwindcss'
  },
  icons: {
    available: true,
    packageName: 'lucide-react',
    name: 'Lucide Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Notion-like document writing experience: clean floating selection bubble menus, slash commands (`/heading`, `/image`), inline AI writing assistant popups, and image upload dropzones.',
  noveltyLevel: 'established',
  bestFor: [
    'Notion-like writing interfaces, blog post editors, and AI note-taking apps in Next.js',
    'Rich text documents requiring built-in OpenAI/Anthropic AI text completions',
    'React projects wanting a drop-in Notion-style editor powered by Tiptap'
  ],
  avoidFor: [
    'Non-React frameworks'
  ],
  strengths: [
    'Out-of-the-box Notion editing feel with zero complicated manual Tiptap configuration',
    'First-class AI autocomplete integration and slash command dropdowns',
    'Styled with Tailwind CSS for seamless integration into modern SaaS applications'
  ],
  weaknesses: [
    'Focused specifically on rich text document editing'
  ],
  tags: [
    'novel',
    'tiptap',
    'editor',
    'wysiwyg',
    'notion-like',
    'ai',
    'tailwind',
    'react',
    'next',
    'established'
  ],
  aliases: ['Novel', 'Novel Editor', 'Novel.sh'],
  relatedSystems: ['plate-ui', 'shadcn-ui'],
  systemTypes: ['source-owned', 'component-library'],
  sourceOwned: true,
  openSource: true,
  installation: {
    react: {
      command: 'npm install novel lucide-react',
      packages: ['novel', 'lucide-react'],
      peerDependencies: ['react', 'react-dom', 'tailwindcss']
    }
  },
  componentGuidance: {
    editor: {
      canonicalName: 'EditorRoot',
      description: 'Novel Notion-style rich text editor component.',
      importExample: "import { EditorRoot, EditorContent } from 'novel';\n\n<EditorRoot><EditorContent initialContent={content} onUpdate={handleUpdate} /></EditorRoot>",
      docSubUrl: 'docs'
    }
  },
  aiInstructions: {
    principles: [
      'Use `EditorRoot` and `EditorContent` from `novel`.',
      'Configure extensions for slash commands and AI completions.',
      'Apply Tailwind typography and prose classes.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure Tailwind theme with prose extensions.',
    iconUsage: 'Use `lucide-react`.',
    layoutConventions: 'Wrap in standard responsive article and editor containers.'
  }
};
