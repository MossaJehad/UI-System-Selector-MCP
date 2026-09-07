import React, { useState, useMemo } from 'react';
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

const PAGE_SIZE = 24;

const TITLES: Record<ComponentCategory, { title: string; subtitle: string }> = {
  button: {
    title: 'Button Component Comparison',
    subtitle:
      'Compare Primary, Secondary, Tertiary/Ghost, Danger, and Disabled buttons across real design systems. Notice the distinct corner radii (from 0px rectangular in Carbon & Helsinki to 9999px pills in Material & Gestalt), hover elevations, and double-ring focus treatments.',
  },
  input: {
    title: 'Input Field Comparison',
    subtitle:
      'Compare text input fields across systems. Examine how systems treat labels, helper text, error validations, bottom-border underlines (Carbon, Fluent, PatternFly) vs. boxed borders, and focus highlight rings.',
  },
  select: {
    title: 'Select Dropdown Comparison',
    subtitle:
      'Compare interactive HTML select controls across real design systems. All selects are fully functional with native options, custom indicator chevrons, and system-specific heights and radii.',
  },
  radio: {
    title: 'Radio Button Comparison',
    subtitle:
      'Compare radio button controls and interactive radio groups. Observe differences in circle sizes, brand accent colors, inset pips, and keyboard focus states.',
  },
  checkbox: {
    title: 'Checkbox Component Comparison',
    subtitle:
      'Compare checkbox controls across real design systems. Inspect single consent selections, multi-select groups, indeterminate states, and system-specific corner radii and brand accents.',
  },
  switch: {
    title: 'Switch / Toggle Comparison',
    subtitle:
      'Compare binary toggle switches across design systems. Test live toggling for automated backups and debug flags, noting pill vs. square track contours, thumb transitions, and authentic notices for government systems that intentionally omit switches for accessibility.',
  },
  textarea: {
    title: 'Textarea Field Comparison',
    subtitle:
      'Compare multiline text inputs across systems. Evaluate dynamic character count trackers, placeholder styling, error states, and system-specific bottom border vs boxed border styling.',
  },
  tabs: {
    title: 'Tabs Navigation Comparison',
    subtitle:
      'Compare tab navigation components across real design systems. Experience accessible keyboard navigation (Left/Right arrow keys), segmented pills, 3D bevels, and active underline indicators.',
  },
  dialog: {
    title: 'Dialog / Modal Comparison',
    subtitle:
      'Compare interactive modal dialogs across systems. Trigger full-screen backdrops, keyboard dismissal (Esc), close buttons, and system-specific surface radiuses (from 28px in Material 3 to beveled 3D windows in Win98).',
  },
  tooltip: {
    title: 'Tooltip Component Comparison',
    subtitle:
      'Compare contextual tooltip overlays. Test hover and keyboard focus triggers, directional indicator pointers, and authentic accessibility notices for civic systems that omit floating tooltips.',
  },
  card: {
    title: 'Card Component Comparison',
    subtitle:
      'Compare card containers across real design systems. Observe distinct borders, elevations, selected states, and interactive actions across enterprise consoles, tech giants, and retro libraries.',
  },
  'dropdown-menu': {
    title: 'Dropdown Menu / Action Menu Comparison',
    subtitle:
      'Compare interactive action dropdown menus across design systems. Test live opening, item selection, outside-click dismissal, keyboard navigation (Esc), and destructive action styling.',
  },
  table: {
    title: 'Table / Data Table Comparison',
    subtitle:
      'Compare data table components across design systems. Test live column sorting (Name A–Z / Z–A), individual row checkboxes, select-all controls, and horizontal scroll responsiveness.',
  },
  alert: {
    title: 'Alert / Notice / Banner Comparison',
    subtitle:
      'Compare persistent alert banners across design systems. Inspect Info, Success, and Error severity states with smooth dismissibility and accessible notification semantics.',
  },
  toast: {
    title: 'Toast / Snackbar Comparison',
    subtitle:
      'Compare temporary feedback toast notifications across design systems. Trigger live auto-dismissing toasts (4s) with dismiss buttons and authentic notices for government guidelines that omit transient alerts.',
  },
  badge: {
    title: 'Badge / Tag / Chip Comparison',
    subtitle:
      'Compare status badges, numerical counters, removable tags, and selectable filter chips across design systems. Test real interactive removal and active chip toggling.',
  },
  accordion: {
    title: 'Accordion / Disclosure Comparison',
    subtitle:
      'Compare expandable accordion panels across design systems. Test smooth multi-section disclosure toggles, rotating chevrons, and keyboard accessibility.',
  },
  pagination: {
    title: 'Pagination Navigation Comparison',
    subtitle:
      'Compare pagination controls across real design systems. Click through pages 1 to 5, test active page highlighting, and verify disabled previous/next boundaries.',
  },
  breadcrumbs: {
    title: 'Breadcrumbs Navigation Comparison',
    subtitle:
      'Compare hierarchical breadcrumb trails across design systems. Inspect semantic ordered lists, system-specific separators (/, ›, •), and current-page styling.',
  },
  avatar: {
    title: 'Avatar & User Identity Comparison',
    subtitle:
      'Compare user avatar components with initials, online/busy presence status indicators, size variants (Small, Medium, Large), and overlapping collaborator groups without relying on generated images.',
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
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return entries.filter(entry => {
      const m = entry.meta;

      // Category filter
      if (selectedCategory !== 'all' && m.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus === 'active' && m.status !== 'active') {
        return false;
      }
      if (selectedStatus === 'legacy' && m.status !== 'legacy' && m.status !== 'deprecated') {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && m.type !== selectedType) {
        return false;
      }

      // Letter filter
      if (selectedLetter !== 'All') {
        if (m.name.charAt(0).toUpperCase() !== selectedLetter) {
          return false;
        }
      }

      // Search query
      const query = searchQuery.toLowerCase().trim();
      if (query !== '') {
        const matchesName = m.name.toLowerCase().includes(query);
        const matchesOrg = m.organization.toLowerCase().includes(query);
        const matchesCat = m.categoryLabel.toLowerCase().includes(query);
        const matchesDesc = m.description.toLowerCase().includes(query);
        const matchesId = m.id.toLowerCase().includes(query);
        if (!matchesName && !matchesOrg && !matchesCat && !matchesDesc && !matchesId) {
          return false;
        }
      }

      return true;
    });
  }, [entries, selectedCategory, selectedStatus, selectedType, selectedLetter, searchQuery]);

  const handleCategoryChange = (cat: string) => {
    onCategoryChange(cat);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    onSearchChange(query);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  const paginatedEntries = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  const renderComponent = (entry: DesignSystemEntry) => {
    const { components } = entry;
    switch (componentType) {
      case 'button':
        return <components.Button />;
      case 'input':
        return <components.Input />;
      case 'select':
        return <components.Select />;
      case 'radio':
        return <components.Radio />;
      case 'checkbox':
        return <components.Checkbox />;
      case 'switch':
        return <components.Switch />;
      case 'textarea':
        return <components.Textarea />;
      case 'tabs':
        return <components.Tabs />;
      case 'dialog':
        return <components.Dialog />;
      case 'tooltip':
        return <components.Tooltip />;
      case 'card':
        return <components.Card />;
      case 'dropdown-menu':
        return <components.DropdownMenu />;
      case 'table':
        return <components.Table />;
      case 'alert':
        return <components.Alert />;
      case 'toast':
        return <components.Toast />;
      case 'badge':
        return <components.Badge />;
      case 'accordion':
        return <components.Accordion />;
      case 'pagination':
        return <components.Pagination />;
      case 'breadcrumbs':
        return <components.Breadcrumbs />;
      case 'avatar':
        return <components.Avatar />;
      default:
        return <components.Button />;
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', margin: 0 }}>
            {info.title}
          </h1>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-subtle, rgba(37, 99, 235, 0.1))',
              color: 'var(--accent-primary)',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            {entries.length} Systems
          </span>
        </div>
        <p style={{ color: 'var(--fg-muted)', fontSize: '15px', maxWidth: '900px', lineHeight: 1.6 }}>
          {info.subtitle}
        </p>
      </div>

      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedStatus={selectedStatus}
        onStatusChange={handleStatusChange}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        selectedLetter={selectedLetter}
        onLetterChange={handleLetterChange}
        totalCount={entries.length}
        filteredCount={filtered.length}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
        {paginatedEntries.map(entry => {
          const { meta } = entry;
          return (
            <ComponentCard
              key={meta.id}
              meta={meta}
              componentName={componentType}
              canonicalSnippet={meta.canonicalCode[componentType] || ''}
            >
              {renderComponent(entry)}
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
              No design systems found
            </h3>
            <p style={{ color: 'var(--fg-muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto 16px' }}>
              Try searching with different terms or selecting &ldquo;All Domains&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                handleSearchChange('');
                handleCategoryChange('all');
                handleStatusChange('all');
                handleTypeChange('all');
                handleLetterChange('All');
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                backgroundColor: 'var(--accent-primary)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '28px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
            Showing {((currentPage - 1) * PAGE_SIZE) + 1}–{Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} systems
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-surface)',
                color: currentPage === 1 ? 'var(--fg-muted)' : 'var(--fg-default)',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.5 : 1,
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: currentPage === page ? 'var(--accent-primary)' : 'var(--border-color)',
                  background: currentPage === page ? 'var(--accent-primary)' : 'var(--bg-surface)',
                  color: currentPage === page ? '#ffffff' : 'var(--fg-default)',
                  cursor: 'pointer',
                  fontWeight: currentPage === page ? 700 : 500,
                  fontSize: '13px',
                }}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-surface)',
                color: currentPage === totalPages ? 'var(--fg-muted)' : 'var(--fg-default)',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.5 : 1,
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
