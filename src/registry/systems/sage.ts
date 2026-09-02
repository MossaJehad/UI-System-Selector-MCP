import { UISystem } from '../../schemas/uiSystem.js';

export const sage: UISystem = {
  id: 'sage',
  name: 'Kajabi Sage Design System',
  organization: 'Kajabi',
  description: 'Kajabi’s official open-source design system and React/Rails component library, engineered for online course creators, video curriculum builders, digital membership portals, and subscription marketing funnels.',
  category: 'company-design-system',
  secondaryCategories: ['saas', 'creative-tool', 'ecommerce'],
  frameworks: ['react', 'html-css'],
  stylingApproach: 'sass',
  packageNames: ['@kajabi/sage-react', '@kajabi/sage-assets'],
  docsUrl: 'https://sage.kajabi.com',
  repositoryUrl: 'https://github.com/Kajabi/sage-lib',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Conforms to WCAG 2.1 AA across creator course dashboards and checkout pages.'
  },
  darkMode: false,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and Sass variables',
    packageName: '@kajabi/sage-assets'
  },
  icons: {
    available: true,
    packageName: '@kajabi/sage-assets',
    name: 'Sage Creator Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Polished creator economy style: Kajabi Royal Blue (#006bf8), Sage Green, clean course module progress lists, video lesson cards, and member community feeds.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Online learning platforms, LMS course builders, and digital product checkout funnels',
    'Creator community portals, coaching schedules, and member discussion feeds',
    'React and Ruby on Rails SaaS applications'
  ],
  avoidFor: [
    'Developer terminal CLI utilities'
  ],
  strengths: [
    'Specialized creator economy components (CourseCard, ModuleList, PricingTable, HeroHeader, StatBox)',
    'Seamless dual React and Ruby on Rails view helper integration',
    'High polish for non-technical course creators and students'
  ],
  weaknesses: [
    'Creator economy and LMS domain specialization'
  ],
  tags: [
    'kajabi',
    'sage',
    'creator-economy',
    'lms',
    'courses',
    'education',
    'saas',
    'hidden-gem'
  ],
  aliases: ['Sage', 'Kajabi Design System', 'Sage UI'],
  systemTypes: ['company-design-system', 'component-library'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install @kajabi/sage-react @kajabi/sage-assets',
      packages: ['@kajabi/sage-react', '@kajabi/sage-assets'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Import `@kajabi/sage-assets/dist/main.css`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'SageButton',
      description: 'Sage action button with color="primary" | "secondary" | "danger".',
      importExample: "import { SageButton } from '@kajabi/sage-react';\n\n<SageButton color=\"primary\">Publish Course</SageButton>",
      docSubUrl: 'pages/elements/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@kajabi/sage-assets/dist/main.css`.',
      'Use Sage Card, StatBox, and List components for course structures.',
      'Apply Kajabi brand colors for primary actions.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Sage design tokens for color and typography.',
    iconUsage: 'Use Sage icon glyphs (e.g. SageIcon).',
    layoutConventions: 'Use Grid and Container classes with Sage spacing.'
  }
};
