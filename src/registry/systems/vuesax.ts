import { UISystem } from '../../schemas/uiSystem.js';

export const vuesax: UISystem = {
  id: 'vuesax',
  name: 'Vuesax',
  organization: 'Manuel Rovira (Lusaxweb) / Vuesax Community',
  description: 'An open-source Vue component library designed from scratch with a distinct, vibrant visual aesthetic, featuring bold color gradients, floating card shadows, animated switches, and custom interactive notifications.',
  category: 'component-library',
  secondaryCategories: ['creative-tool', 'consumer', 'styled'],
  frameworks: ['vue'],
  stylingApproach: 'css-modules',
  packageNames: ['vuesax-alpha', 'vuesax'],
  docsUrl: 'https://vuesax.com',
  repositoryUrl: 'https://github.com/lusaxweb/vuesax',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: false,
    ariaCompliant: true,
    notes: 'Provides animated feedback and accessible button/modal interaction states.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'CSS custom properties via Vuesax theme engine',
    packageName: 'vuesax'
  },
  icons: {
    available: true,
    packageName: 'boxicons',
    name: 'Boxicons integration'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'spacious',
  aesthetic: 'Unique vibrant startup aesthetic: punchy electric gradients (Vuesax Violet/Pink), floating soft drop shadows, rounded pill buttons with hover micro-animations, and stylish dark mode glass overlays.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    'Vue creative portfolios, startup apps, and web products wanting a distinctive look beyond standard Bootstrap/Tailwind',
    'Developers who appreciate animated UI micro-interactions and bold color choices',
    'Interactive web applications'
  ],
  avoidFor: [
    'Traditional conservative corporate banking portals'
  ],
  strengths: [
    'Distinctive, original visual identity with energetic micro-animations',
    'Rich interactive components (Sidebar, Card, Dialog, Table, Notification, Avatar)',
    'Dynamic color system with built-in dark theme'
  ],
  weaknesses: [
    'Vue only'
  ],
  tags: [
    'vuesax',
    'vue',
    'creative',
    'animated',
    'gradients',
    'dark-mode',
    'hidden-gem'
  ],
  aliases: ['Vuesax', 'Vuesax UI', 'Lusaxweb Vuesax'],
  systemTypes: ['component-library'],
  openSource: true,
  installation: {
    vue: {
      command: 'npm install vuesax boxicons',
      packages: ['vuesax', 'boxicons'],
      peerDependencies: ['vue'],
      setupInstructions: 'Import `vuesax/dist/vuesax.css` in `main.js` and `app.use(Vuesax)`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'vs-button',
      description: 'Vuesax button with color="primary" | "success" | "danger" | "warn" | "dark", animation-type="gradient" | "relief".',
      importExample: '<vs-button gradient color="primary">Explore</vs-button>',
      docSubUrl: 'docs/components/Button.html'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<vs-*>` component tags in Vue templates.',
      'Import `vuesax/dist/vuesax.css` at app root.',
      'Use Vuesax animation modifiers (`gradient`, `relief`, `border`, `flat`).'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure colors with `this.$vs.setColor("primary", "#5b3cc4")`.',
    iconUsage: 'Use Boxicons or SVG icons inside slots.',
    layoutConventions: 'Use `<vs-row>` and `<vs-col>` grid primitives.'
  }
};
