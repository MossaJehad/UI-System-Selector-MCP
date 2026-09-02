import { UISystem } from '../../schemas/uiSystem.js';

export const downshift: UISystem = {
  id: 'downshift',
  name: 'Downshift',
  organization: 'Downshift Community',
  description: 'An open-source, headless React library by Kent C. Dodds and community for building accessible autocomplete, combobox, multiselect, and dropdown components with full WAI-ARIA 1.2 state machine logic and keyboard ergonomics.',
  category: 'headless',
  secondaryCategories: ['accessibility-focused', 'unstyled'],
  frameworks: ['react'],
  stylingApproach: 'unstyled',
  packageNames: ['downshift'],
  docsUrl: 'https://github.com/downshift-js/downshift',
  repositoryUrl: 'https://github.com/downshift-js/downshift',
  license: 'MIT',
  accessibility: {
    wcagLevel: 'AAA',
    keyboardNav: true,
    screenReaderTested: true,
    ariaCompliant: true,
    notes: 'Strict conformance to WAI-ARIA 1.2 Combobox and Select patterns with screen reader live region announcements.'
  },
  darkMode: true,
  rtlSupport: true,
  designTokens: {
    available: false,
    description: 'Headless hook and state machine; apply your own CSS or Tailwind classes.'
  },
  icons: {
    available: false
  },
  maturity: 'mature',
  opinionatedLevel: 'unstyled-headless',
  density: 'configurable',
  aesthetic: 'Completely unstyled autocomplete and combobox state machine: arrow key navigation, typeahead search, item selection, and ARIA prop getters.',
  noveltyLevel: 'established',
  bestFor: [
    'Custom accessible search bars, asynchronous autocomplete dropdowns, and comboboxes in React',
    'Multi-select tag pickers and filtering inputs needing WAI-ARIA compliance',
    'Design system teams building bespoke select components from scratch'
  ],
  avoidFor: [
    'Developers wanting full pre-built styled component suites'
  ],
  strengths: [
    'Pioneer of React prop-getter hooks (`useCombobox`, `useSelect`, `useMultipleSelection`)',
    'Unbeatable keyboard navigation and screen reader announcements for complex search inputs',
    'Zero CSS assumptions: complete styling freedom with Tailwind, CSS Modules, or CSS-in-JS'
  ],
  weaknesses: [
    'Specialized solely for autocomplete, combobox, and select primitives'
  ],
  tags: [
    'downshift',
    'autocomplete',
    'combobox',
    'select',
    'headless',
    'accessibility',
    'react',
    'established'
  ],
  aliases: ['Downshift', 'Downshift JS', 'useCombobox'],
  systemTypes: ['headless'],
  openSource: true,
  installation: {
    react: {
      command: 'npm install downshift',
      packages: ['downshift'],
      peerDependencies: ['react', 'react-dom']
    }
  },
  componentGuidance: {
    combobox: {
      canonicalName: 'useCombobox',
      description: 'Hook for accessible autocomplete and combobox dropdowns.',
      importExample: "import { useCombobox } from 'downshift';\n\nconst { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getItemProps } = useCombobox({ items, onInputValueChange: handleSearch });",
      docSubUrl: '#usecombobox'
    }
  },
  aiInstructions: {
    principles: [
      'Use `useCombobox` or `useSelect` for searchable dropdown interfaces.',
      'Always spread prop getters (`{...getInputProps()}`, `{...getMenuProps()}`, `{...getItemProps({ item, index })}`).',
      'Provide visual highlighting on `highlightedIndex`.'
    ],
    forbiddenSubstitutions: [],
    themingGuide: 'Apply custom Tailwind classes or CSS modules to combobox elements.',
    iconUsage: 'Use any icon library for chevron or search glyphs.',
    layoutConventions: 'Wrap dropdown menu in relative/absolute positioning.'
  }
};
