import React from 'react';
import { ComponentCategory, DesignSystemEntry } from '../types.ts';
import { ComponentCard } from '../components/common/ComponentCard.tsx';
import { SearchFilterBar } from '../components/common/SearchFilterBar.tsx';

interface ComponentComparePageProps {
  componentType: ComponentCategory;
  entries: DesignSystemEntry[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const TITLES: Record<ComponentCategory, { title: string; subtitle: string }> = {
  button: {
    title: 'Button Component Comparison',
    subtitle:
      'Compare Primary, Secondary, Tertiary/Ghost, Danger, and Disabled buttons across 44 design systems. Notice the distinct corner radii (from 0px rectangular in Carbon to 9999px pills in Material), hover elevations, and double-ring focus treatments.',
  },
  input: {
    title: 'Input Field Comparison',
    subtitle:
      'Compare text input fields across systems. Examine how systems treat labels, helper text, error validations, bottom-border underlines (Carbon, Fluent, PatternFly) vs. boxed borders, and focus highlight rings.',
  },
  select: {
    title: 'Select Dropdown Comparison',
    subtitle:
      'Compare interactive HTML select controls across 44 design systems. All selects are fully functional with native options, custom indicator chevrons, and system-specific heights and radii.',
  },
  radio: {
    title: 'Radio Button Comparison',
    subtitle:
      'Compare radio button controls and interactive radio groups. Observe differences in circle sizes, brand accent colors, inset pips, and keyboard focus states.',
  },
  checkbox: {
    title: 'Checkbox Component Comparison',
    subtitle:
      'Compare checkbox controls across 44 design systems. Inspect single consent selections, multi-select groups, indeterminate states, and system-specific corner radii and brand accents.',
  },
  switch: {
    title: 'Switch / Toggle Comparison',
    subtitle:
      'Compare binary toggle switches across design systems. Test live toggling for automated backups and debug flags, noting pill vs. square track contours, thumb transitions, and focus outlines.',
  },
  textarea: {
    title: 'Textarea Field Comparison',
    subtitle:
      'Compare multiline text inputs across systems. Evaluate dynamic character count trackers, placeholder styling, error states, and system-specific bottom border vs boxed border styling.',
  },
  tabs: {
    title: 'Tabs Navigation Comparison',
    subtitle:
      'Compare tab navigation components across 44 design systems. Experience accessible keyboard navigation (Left/Right arrow keys), segmented pills, 3D bevels, and active underline indicators.',
  },
  dialog: {
    title: 'Dialog / Modal Comparison',
    subtitle:
      'Compare interactive modal dialogs across systems. Trigger full-screen backdrops, keyboard dismissal (Esc), close buttons, and system-specific surface radiuses (from 28px in Material 3 to beveled 3D windows in Win98).',
  },
  tooltip: {
    title: 'Tooltip Component Comparison',
    subtitle:
      'Compare contextual tooltip overlays. Test hover and keyboard focus triggers, directional indicator pointers, and authentic brand styling across enterprise, developer, and civic systems.',
  },
};

export const ComponentComparePage: React.FC<ComponentComparePageProps> = ({
  componentType,
  entries,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const info = TITLES[componentType];

  const filtered = entries.filter(entry => {
    const m = entry.meta;
    const matchesCategory =
      selectedCategory === 'all' || m.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      m.name.toLowerCase().includes(query) ||
      m.organization.toLowerCase().includes(query) ||
      m.categoryLabel.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
          {info.title}
        </h1>
        <p style={{ color: 'var(--fg-muted)', fontSize: '15px', maxWidth: '900px', lineHeight: 1.6 }}>
          {info.subtitle}
        </p>
      </div>

      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        totalCount={entries.length}
        filteredCount={filtered.length}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filtered.map(entry => {
          const { meta, components } = entry;
          let compNode: React.ReactNode = null;
          let snippet = '';

          if (componentType === 'button') {
            compNode = <components.Button />;
            snippet = meta.canonicalCode.button;
          } else if (componentType === 'input') {
            compNode = <components.Input />;
            snippet = meta.canonicalCode.input;
          } else if (componentType === 'select') {
            compNode = <components.Select />;
            snippet = meta.canonicalCode.select;
          } else if (componentType === 'radio') {
            compNode = <components.Radio />;
            snippet = meta.canonicalCode.radio;
          } else if (componentType === 'checkbox') {
            compNode = <components.Checkbox />;
            snippet = meta.canonicalCode.checkbox;
          } else if (componentType === 'switch') {
            compNode = <components.Switch />;
            snippet = meta.canonicalCode.switch;
          } else if (componentType === 'textarea') {
            compNode = <components.Textarea />;
            snippet = meta.canonicalCode.textarea;
          } else if (componentType === 'tabs') {
            compNode = <components.Tabs />;
            snippet = meta.canonicalCode.tabs;
          } else if (componentType === 'dialog') {
            compNode = <components.Dialog />;
            snippet = meta.canonicalCode.dialog;
          } else if (componentType === 'tooltip') {
            compNode = <components.Tooltip />;
            snippet = meta.canonicalCode.tooltip;
          }

          return (
            <ComponentCard
              key={meta.id}
              meta={meta}
              componentName={componentType}
              canonicalSnippet={snippet}
            >
              {compNode}
            </ComponentCard>
          );
        })}

        {filtered.length === 0 && (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🔍</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '6px' }}>
              No matching design systems
            </h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: '14px' }}>
              Try searching with different keywords or selecting &ldquo;All&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
