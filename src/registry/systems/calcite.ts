import { UISystem } from '../../schemas/uiSystem.js';

export const calcite: UISystem = {
  id: 'calcite',
  name: 'Esri Calcite Design System',
  organization: 'Esri (ArcGIS)',
  description: 'Esri’s official open-source Web Component design system powering ArcGIS Online, ArcGIS Pro web apps, geospatial mapping viewers, spatial analytics, and cartographic dashboards.',
  category: 'company-design-system',
  secondaryCategories: ['data-heavy', 'creative-tool', 'web-components', 'dashboard'],
  frameworks: ['web-components', 'react', 'vue', 'angular', 'html-css', 'vanilla'],
  stylingApproach: 'shadow-dom',
  packageNames: ['@esri/calcite-components', '@esri/calcite-components-react', '@esri/calcite-ui-icons'],
  docsUrl: 'https://developers.arcgis.com/calcite-design-system',
  repositoryUrl: 'https://github.com/Esri/calcite-design-system',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Meets WCAG 2.1 AA across ArcGIS Online mapping applications and spatial tools.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Design tokens in CSS custom properties and JSON',
    packageName: '@esri/calcite-components'
  },
  icons: {
    available: true,
    packageName: '@esri/calcite-ui-icons',
    name: 'Calcite Geospatial & System Icons'
  },
  maturity: 'production',
  opinionatedLevel: 'highly-opinionated',
  density: 'compact/dense',
  aesthetic: 'Geospatial and GIS map analytics style: Calcite Blue (#007ac2), dark mode satellite map overlay panels, layer list trees, legend drawers, and coordinate measurement tools.',
  noveltyLevel: 'established',
  bestFor: [
    'Geographic Information Systems (GIS), interactive map viewers, and spatial dashboards',
    'Cartographic layer managers, geospatial filters, and coordinate inspector tools',
    'ArcGIS JavaScript API integrations and multi-framework Web Component apps'
  ],
  avoidFor: [
    'Simple text-only blogging platforms'
  ],
  strengths: [
    'The global benchmark design system for mapping, GIS, and geospatial technology',
    'Specialized map layout components: Shell, Panel, ActionPad, LayerList, Legend, ColorPicker',
    'Seamless Web Component integration with the ArcGIS Maps SDK for JavaScript'
  ],
  weaknesses: [
    'Geospatial and GIS domain specialization'
  ],
  tags: [
    'esri',
    'calcite',
    'gis',
    'maps',
    'geospatial',
    'arcgis',
    'web-components',
    'dark-mode',
    'rtl',
    'established'
  ],
  aliases: ['Calcite', 'Esri Design System', 'Calcite Design System', 'ArcGIS Calcite'],
  systemTypes: ['company-design-system', 'web-components', 'design-system'],
  openSource: true,
  installation: {
    generic: {
      command: 'npm install @esri/calcite-components',
      packages: ['@esri/calcite-components'],
      setupInstructions: 'Import `@esri/calcite-components/dist/calcite/calcite.css` and register custom elements via `import { setAssetPath } from "@esri/calcite-components/dist/components";`.'
    },
    react: {
      command: 'npm install @esri/calcite-components-react @esri/calcite-components',
      packages: ['@esri/calcite-components-react', '@esri/calcite-components'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    shell: {
      canonicalName: '<calcite-shell>',
      description: 'App shell container designed specifically to frame interactive map viewports with floating panels.',
      importExample: '<calcite-shell><calcite-shell-panel slot="panel-start"><calcite-panel heading="Map Layers"></calcite-panel></calcite-shell-panel><div id="viewDiv"></div></calcite-shell>',
      docSubUrl: 'components/shell/'
    },
    button: {
      canonicalName: '<calcite-button>',
      description: 'Calcite action button with appearance="solid" | "outline" | "transparent".',
      importExample: '<calcite-button appearance="solid" scale="m">Measure Distance</calcite-button>',
      docSubUrl: 'components/button/'
    }
  },
  aiInstructions: {
    principles: [
      'Use `<calcite-shell>` as the top-level layout wrapper for map-based interfaces.',
      'Use `<calcite-panel>`, `<calcite-action>`, and `<calcite-action-pad>` for map overlay toolbars.',
      'Support dark theme (`class="calcite-mode-dark"`) for night and satellite map views.'
    ],
    forbiddenSubstitutions: ['shadcn/ui', '@mui/material'],
    themingGuide: 'Use Calcite mode classes (`calcite-mode-dark`, `calcite-mode-light`).',
    iconUsage: 'Use `<calcite-icon icon="layers"></calcite-icon>`.',
    layoutConventions: 'Wrap in `<calcite-shell>` with `<calcite-shell-panel>` sidebars.'
  }
};
