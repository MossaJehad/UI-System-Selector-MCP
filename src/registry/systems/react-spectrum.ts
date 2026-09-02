import { UISystem } from '../../schemas/uiSystem.js';

export const reactSpectrum: UISystem = {
  id: 'react-spectrum',
  name: 'Adobe React Spectrum',
  organization: 'Adobe',
  description: 'Adobe’s official implementation of the Spectrum design system for React, engineered with world-class accessibility (WCAG AA/AAA), internationalization, touch-responsiveness, and cross-platform desktop UI consistency.',
  category: 'company-design-system',
  secondaryCategories: ['creative-tool', 'accessibility-focused', 'enterprise'],
  frameworks: ['react'],
  stylingApproach: 'design-tokens-css',
  packageNames: ['@adobe/react-spectrum', '@react-spectrum/theme-default'],
  docsUrl: 'https://react-spectrum.adobe.com',
  repositoryUrl: 'https://github.com/adobe/react-spectrum',
  license: 'Apache-2.0',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'The industry gold standard for React accessibility, powered by React Aria under the hood.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: true,
    format: 'Spectrum Design Tokens',
    packageName: '@adobe/spectrum-tokens'
  },
  icons: {
    available: true,
    packageName: '@spectrum-icons/workflow',
    name: 'Spectrum Workflow Icons'
  },
  maturity: 'mature',
  opinionatedLevel: 'moderately-opinionated',
  density: 'configurable',
  aesthetic: 'Precision creative tooling, refined Adobe desktop app feel (Photoshop / Lightroom web style).',
  noveltyLevel: 'established',
  bestFor: [
    'Creative tools, editors, and canvas web applications',
    'Enterprise applications requiring AAA accessibility and full keyboard/screen reader compliance',
    'Complex form interactions, color pickers, sliders, and combo boxes',
    'Globalized applications supporting dozens of locales and RTL layouts'
  ],
  avoidFor: [
    'Quick hackathon throwaway prototypes',
    'Casual meme or retro sites'
  ],
  strengths: [
    'Unsurpassed accessibility and keyboard navigation',
    '30+ locale support with automatic RTL switching and calendar localization',
    'Configurable scale (medium for desktop, large for touch screens)',
    'Full theme support (light, dark, darkest, light-wireframe)'
  ],
  weaknesses: [
    'Heavier runtime compared to unstyled primitives',
    'Overriding core CSS classes can be complex due to strict design token encapsulation'
  ],
  tags: [
    'adobe',
    'creative-tool',
    'high-accessibility',
    'wcag-aaa',
    'internationalization',
    'touch-friendly',
    'dark-mode',
    'rtl'
  ],
  installation: {
    react: {
      command: 'npm install @adobe/react-spectrum @spectrum-icons/workflow',
      packages: ['@adobe/react-spectrum', '@spectrum-icons/workflow'],
      peerDependencies: ['react', 'react-dom'],
      setupInstructions: 'Wrap your app in `<Provider theme={defaultTheme} colorScheme="dark">`.'
    }
  },
  componentGuidance: {
    button: {
      canonicalName: 'Button',
      description: 'Spectrum action button with accent, primary, secondary, negative, and staticColor variants.',
      importExample: "import { Button } from '@adobe/react-spectrum';\n\n<Button variant=\"accent\">Export Project</Button>",
      docSubUrl: 'Button.html'
    },
    dialog: {
      canonicalName: 'Dialog',
      description: 'Modal or popover dialog with Header, Content, ButtonGroup, and full focus trapping.',
      importExample: "import { DialogTrigger, Dialog, Heading, Divider, Content, ButtonGroup, Button } from '@adobe/react-spectrum';\n\n<DialogTrigger type=\"modal\">\n  <Button variant=\"primary\">Open Settings</Button>\n  {(close) => (\n    <Dialog>\n      <Heading>Settings</Heading>\n      <Divider />\n      <Content>Preferences content</Content>\n      <ButtonGroup>\n        <Button variant=\"secondary\" onPress={close}>Cancel</Button>\n        <Button variant=\"accent\" onPress={close}>Save</Button>\n      </ButtonGroup>\n    </Dialog>\n  )}\n</DialogTrigger>",
      docSubUrl: 'Dialog.html'
    },
    table: {
      canonicalName: 'TableView',
      description: 'High-performance virtualized table with column resizing, multi-selection, and sorting.',
      importExample: "import { TableView, TableHeader, Column, TableBody, Row, Cell } from '@adobe/react-spectrum';\n\n<TableView aria-label=\"Files\" selectionMode=\"multiple\">\n  <TableHeader>\n    <Column key=\"name\">Name</Column>\n    <Column key=\"size\">Size</Column>\n  </TableHeader>\n  <TableBody items={items}>\n    {(item) => <Row key={item.id}>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}\n  </TableBody>\n</TableView>",
      docSubUrl: 'TableView.html'
    }
  },
  aiInstructions: {
    principles: [
      'Always wrap the application root with `<Provider theme={defaultTheme}>`.',
      'Use `<Flex>`, `<Grid>`, and `<View>` for responsive layout composition.',
      'Use `@spectrum-icons/workflow` for icons.',
      'Use event handlers like `onPress` instead of `onClick` for multi-device touch/pointer compatibility.'
    ],
    forbiddenSubstitutions: [
      'shadcn/ui',
      '@mui/material',
      'lucide-react (use @spectrum-icons/workflow)'
    ],
    themingGuide: 'Configure theme via `<Provider theme={defaultTheme} colorScheme="light" | "dark" | "darkest" scale="medium" | "large">`.',
    iconUsage: 'Import icons from @spectrum-icons/workflow (e.g. Add, Settings, Edit, Delete).',
    layoutConventions: 'Use Flex and Grid layout components with Spectrum dimension tokens (e.g. size-100, size-200).'
  }
};
