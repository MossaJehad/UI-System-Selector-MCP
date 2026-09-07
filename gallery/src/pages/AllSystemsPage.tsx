import React, { useState, useMemo } from 'react';
import { DesignSystemEntry, ComponentCategory } from '../types.ts';
import { SearchFilterBar } from '../components/common/SearchFilterBar.tsx';

interface AllSystemsPageProps {
  entries: DesignSystemEntry[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const PAGE_SIZE = 24;

export const AllSystemsPage: React.FC<AllSystemsPageProps> = ({
  entries,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const [activeComponentTab, setActiveComponentTab] = useState<ComponentCategory>('button');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLetter, setSelectedLetter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter systems
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

      // A-Z letter filter
      if (selectedLetter !== 'All') {
        const firstLetter = m.name.charAt(0).toUpperCase();
        if (firstLetter !== selectedLetter) {
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
        const matchesNotes = m.aestheticNotes.toLowerCase().includes(query);
        const matchesId = m.id.toLowerCase().includes(query);
        if (!matchesName && !matchesOrg && !matchesCat && !matchesDesc && !matchesNotes && !matchesId) {
          return false;
        }
      }

      return true;
    });
  }, [entries, selectedCategory, selectedStatus, selectedType, selectedLetter, searchQuery]);

  // Reset page when filters change
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

  return (
    <div>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', margin: 0 }}>
            Design Systems Directory
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
        <p style={{ color: 'var(--fg-muted)', fontSize: '15px', maxWidth: '880px', lineHeight: 1.6 }}>
          Explore <strong>{entries.length} real production design systems</strong> from global tech giants, cloud enterprise platforms, e-commerce suites, civic governments, and open-source frameworks. Compare 10 fundamental UI components with authentic brand geometry, color tokens, and accessibility standards.
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

      {/* Component Preview Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg-muted)' }}>
          Active Preview Component:
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {([
            { id: 'button', label: 'Buttons' },
            { id: 'input', label: 'Inputs' },
            { id: 'select', label: 'Selects' },
            { id: 'radio', label: 'Radios' },
            { id: 'checkbox', label: 'Checkboxes' },
            { id: 'switch', label: 'Switches' },
            { id: 'textarea', label: 'Textareas' },
            { id: 'tabs', label: 'Tabs' },
            { id: 'dialog', label: 'Dialogs' },
            { id: 'tooltip', label: 'Tooltips' },
          ] as const).map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveComponentTab(tab.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                border: '1px solid var(--border-color)',
                backgroundColor: activeComponentTab === tab.id ? 'var(--accent-primary)' : 'var(--bg-surface)',
                color: activeComponentTab === tab.id ? '#ffffff' : 'var(--fg-default)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Systems Grid / List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {paginatedEntries.map(entry => {
          const { meta, components } = entry;
          return (
            <div key={meta.id} className="component-card">
              <div className="card-header">
                <div className="card-header-left">
                  <a
                    href={`#/systems/${meta.id}`}
                    className="system-title"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span
                      className="color-swatch"
                      style={{ backgroundColor: meta.tokens.primaryColor }}
                    />
                    <span>{meta.name}</span>
                  </a>
                  <span className="org-tag">by {meta.organization}</span>
                  {meta.status === 'legacy' && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: '#fef3c7',
                        color: '#92400e',
                        border: '1px solid #fde68a',
                      }}
                    >
                      Legacy
                    </span>
                  )}
                  {meta.status === 'deprecated' && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: '#fee2e2',
                        color: '#991b1b',
                        border: '1px solid #fecaca',
                      }}
                    >
                      Deprecated
                    </span>
                  )}
                </div>

                <div className="spec-pills">
                  <span className="spec-badge">Radius: {meta.tokens.borderRadius}</span>
                  <span className="spec-badge">Height: {meta.tokens.controlHeight}</span>
                  <span className="spec-badge">{meta.categoryLabel}</span>
                  <a
                    href={meta.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                    style={{ marginLeft: '8px' }}
                  >
                    Docs ↗
                  </a>
                </div>
              </div>

              <div className="card-body">
                {activeComponentTab === 'button' && <components.Button />}
                {activeComponentTab === 'input' && <components.Input />}
                {activeComponentTab === 'select' && <components.Select />}
                {activeComponentTab === 'radio' && <components.Radio />}
                {activeComponentTab === 'checkbox' && <components.Checkbox />}
                {activeComponentTab === 'switch' && <components.Switch />}
                {activeComponentTab === 'textarea' && <components.Textarea />}
                {activeComponentTab === 'tabs' && <components.Tabs />}
                {activeComponentTab === 'dialog' && <components.Dialog />}
                {activeComponentTab === 'tooltip' && <components.Tooltip />}
              </div>

              <div className="card-footer">
                <span style={{ maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {meta.aestheticNotes}
                </span>
                <a
                  href={`#/systems/${meta.id}`}
                  style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 600,
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Full System Spec →
                </a>
              </div>
            </div>
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
              No systems match your current combination of search terms, domain, status, or type filters.
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

      {/* Pagination Controls */}
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
