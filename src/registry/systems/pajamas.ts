import { UISystem } from '../../schemas/uiSystem.js';

export const pajamas: UISystem = {
  id: 'pajamas',
  name: 'GitLab Pajamas',
  organization: 'GitLab',
  description: 'GitLab’s open-source design system powering GitLab.com, focused on DevOps workflows, merge requests, CI/CD pipelines, repository exploration, and developer collaboration.',
  category: 'company-design-system',
  secondaryCategories: ['developer-tool', 'accessibility-focused', 'saas'],
  frameworks: ['vue', 'css-only'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@gitlab/ui', '@gitlab/svgs'],
  docsUrl: 'https://design.gitlab.com',
  repositoryUrl: 'https://gitlab.com/gitlab-org/gitlab-ui',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Audited for WCAG 2.1 AA compliance across GitLab core product features.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'GitLab Design Tokens',
    packageName: '@gitlab/ui'
  },
  icons: {
    available: true,
    packageName: '@gitlab/svgs',
    name: 'GitLab SVGs / Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'GitLab DevOps aesthetic: clean developer interface, merge request diffs, pipeline graphs, violet and charcoal accents.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue.js developer tools and DevOps management portals',
    'GitLab integrations, extensions, and bots',
    'CI/CD pipeline and deployment monitoring apps',
    'Code review and markdown collaboration software'
  ],
  avoidFor: [
    'React-exclusive projects (Pajamas is Vue 3 focused)',
    'Mobile consumer games'
  ],
  strengths: [
    'The premier company design system for Vue.js developer tooling',
    'Rich ecosystem of CI/CD, merge request, and code review components',
    'Full GitLab SVG icon set included'
  ],
  weaknesses: [
    'Vue-only component library (no official React wrapper)'
  ],
  tags: [
    'gitlab',
    'vue',
    'devops',
    'developer-tool',
    'dense',
    'ci-cd',
    'code-review',
    'dark-mode'
  ],
  installation: {
    vue: {
      command: 'npm install @gitlab/ui @gitlab/svgs',
      packages: ['@gitlab/ui', '@gitlab/svgs'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `@gitlab/ui/dist/index.css` and register Gl components.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'GlButton',
      description: 'GitLab Vue button with category="primary" | "secondary" | "tertiary" and variant="default" | "confirm" | "danger".',
      importExample: "import { GlButton } from '@gitlab/ui';\n\n<GlButton variant=\"confirm\" category=\"primary\">Merge Request</GlButton>",
      docSubUrl: 'components/button'
    },
    badge: {
      canonicalName: 'GlBadge',
      description: 'GitLab status badge with variant="muted" | "neutral" | "info" | "success" | "warning" | "danger".',
      importExample: "import { GlBadge } from '@gitlab/ui';\n\n<GlBadge variant=\"success\">Pipeline Passed</GlBadge>",
      docSubUrl: 'components/badge'
    }
  },
  aiInstructions: {
    principles: [
      'Import `@gitlab/ui/dist/index.css`.',
      'Use `Gl*` components (e.g. `GlButton`, `GlBadge`, `GlModal`, `GlTable`).',
      'Use `@gitlab/svgs/dist/icons.svg` or `GlIcon` for icons.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', 'vuetify', 'element-plus'],
    themingGuide: 'Use GitLab UI CSS custom properties and dark mode classes.',
    iconUsage: 'Use `<GlIcon name="merge-request" />`.',
    layoutConventions: 'Combine Gl components with standard CSS Grid or Flex.'
  }
};
