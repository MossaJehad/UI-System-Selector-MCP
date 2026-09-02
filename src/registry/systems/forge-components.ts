import { UISystem } from '../../schemas/uiSystem.js';

export const forgeComponents: UISystem = {
  id: 'forge-components',
  name: 'Autodesk Forge UI (Autodesk Platform Services Design System)',
  organization: 'Autodesk',
  description: 'Autodesk’s official design system, viewer UI components, and design language for 3D CAD modeling, BIM architecture viewing, engineering blueprints, construction project management, and spatial digital twins.',
  category: 'company-design-system',
  secondaryCategories: ['creative-tool', 'enterprise', 'data-heavy', 'web-components'],
  frameworks: ['web-components', 'react', 'html-css', 'vanilla', 'framework-agnostic'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@hig/button', '@hig/theme-data', '@hig/typography'],
  docsUrl: 'https://hig.autodesk.com',
  repositoryUrl: 'https://github.com/Autodesk/hig',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across 3D CAD model toolbars, architectural measurement tools, and BIM viewers.'
  },
  darkMode: true,
  rtlSupport: false,
  designTokens: {
    available: true,
    format: 'Autodesk HIG design token schema and CSS custom properties via `@hig/theme-data`',
    packageName: '@hig/theme-data'
  },
  icons: {
    available: true,
    packageName: '@hig/icons',
    name: 'Autodesk 3D & CAD Engineering Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Engineering CAD and 3D architectural aesthetic: Autodesk Blue (#0696d7) / Dark Carbon theme, 3D model viewport canvas overlays, precision measurement rulers, layer tree selectors, and property inspection sidebars.',
  noveltyLevel: 'hidden-gem',
  bestFor: [
    '3D CAD viewers, architectural BIM model portals, digital twins, and construction management apps',
    'Engineering tools requiring compact precision controls around 3D WebGL / Three.js viewports',
    'Autodesk Platform Services (APS) / Forge API integration portals'
  ],
  avoidFor: [
    'Playful consumer social apps'
  ],
  strengths: [
    'Official design system of 3D modeling and architecture pioneer Autodesk',
    'Engineered specifically to accompany 3D WebGL model viewports and spatial measurement tools',
    'Full dark theme and high precision compact toolbars'
  ],
  weaknesses: [
    '3D CAD and architectural domain focus'
  ],
  tags: [
    'forge',
    'autodesk',
    'cad',
    '3d',
    'bim',
    'architecture',
    'engineering',
    'web-components',
    'hidden-gem'
  ],
  aliases: ['Autodesk Forge UI', 'Autodesk HIG', 'Autodesk Design System', 'Forge Components', 'APS UI'],
  relatedSystems: ['siemens-ix', 'carbon', 'calcite'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  status: 'active',
  verificationStatus: 'verified',
  installation: {
    generic: {
      command: 'npm install @hig/button @hig/theme-data @hig/theme-context',
      packages: ['@hig/button', '@hig/theme-data', '@hig/theme-context'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Autodesk HIG action button with type="primary" | "secondary" | "flat".',
      importExample: "import Button from '@hig/button';\nimport ThemeContext, { HIGLightTheme } from '@hig/theme-context';\n\n<ThemeContext.Provider value={HIGLightTheme}><Button title=\"Measure Model Distance\" type=\"primary\" /></ThemeContext.Provider>",
      docSubUrl: 'packages/button'
    }
  },
  aiInstructions: {
    principles: [
      'Wrap root with Autodesk `<ThemeContext.Provider>`.',
      'Use compact toolbars and property panels positioned around 3D viewport canvas.',
      'Use Autodesk CAD and engineering iconography.'
    ],
    forbiddenSubstitutions: ['@mui/material'],
    themingGuide: 'Configure themes with `@hig/theme-data` and `@hig/theme-context`.',
    iconUsage: 'Use `@hig/icons`.',
    layoutConventions: 'Use precision sidebar inspection and toolbar overlays.'
  }
};
