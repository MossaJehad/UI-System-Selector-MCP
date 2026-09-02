import { UISystem } from '../../schemas/uiSystem.js';

export const svelteMaterialUi: UISystem = {
  id: 'svelte-material-ui',
  name: 'Svelte Material UI (SMUI)',
  organization: 'SMUI Community (Hunter Perrin)',
  description: 'An open-source Svelte component library implementing Google’s Material Design Web Components with lightweight Svelte wrappers, ripple animations, floating text fields, and dark theme support.',
  category: 'component-library',
  secondaryCategories: ['saas', 'consumer', 'dashboard'],
  frameworks: ['svelte', 'sveltekit'],
  stylingApproach: 'sass',
  packageNames: ['svelte-material-ui', '@smui/button', '@smui/card', '@smui/textfield'],
  docsUrl: 'https://sveltematerialui.com',
  repositoryUrl: 'https://github.com/hperrin/svelte-material-ui',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Implements Material Design Web accessibility standards in Svelte.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Material Design Sass variables and theme stylesheets',
    packageName: 'svelte-material-ui'
  },
  icons: {
    available: true,
    name: 'Material Icons via SMUI Icon'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'comfortable',
  aesthetic: 'Classic Google Material Design for Svelte: ripple animations, floating label text fields, elevated cards, and navigation drawers.',
  noveltyLevel: 'established',
  bestFor: [
    'Svelte and SvelteKit applications wanting authentic Google Material Design styling',
    'Developers migrating from AngularJS/Material or Vuetify into Svelte',
    'Apps needing modular standalone SMUI packages'
  ],
  avoidFor: [
    'React or Vue projects'
  ],
  strengths: [
    'Modular npm architecture: install only the components you need (`@smui/button`, `@smui/card`)',
    'Authentic Material Design Web components without heavy client runtimes',
    'Full dark mode and theme customization via Sass mixins'
  ],
  weaknesses: [
    'Svelte only'
  ],
  tags: [
    'smui',
    'svelte',
    'sveltekit',
    'material-design',
    'component-library',
    'dark-mode',
    'established'
  ],
  aliases: ['SMUI', 'Svelte Material UI', 'Svelte Material'],
  systemTypes: ['component-library', 'design-system'],
  openSource: true,
  installation: {
    svelte: {
      command: 'npm install --save-dev svelte-material-ui @smui/button @smui/card @smui/textfield',
      packages: ['svelte-material-ui', '@smui/button', '@smui/card', '@smui/textfield'],
      peerDependencies: ['svelte']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'SMUI Material action button with variant="raised" | "unelevated" | "outlined" | "text".',
      importExample: "<script>\n  import Button, { Label } from '@smui/button';\n</script>\n\n<Button variant=\"raised\"><Label>Save</Label></Button>",
      docSubUrl: 'demo/button'
    }
  },
  aiInstructions: {
    principles: [
      'Import SMUI component packages (e.g. `@smui/button`, `@smui/card`).',
      'Import SMUI theme CSS in root layout.',
      'Use Material Design ripple and elevation effects.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with SMUI Sass theme generator.',
    iconUsage: 'Use Material Icons with `<Icon class="material-icons">search</Icon>`.',
    layoutConventions: 'Use standard Svelte layout composition.'
  }
};
