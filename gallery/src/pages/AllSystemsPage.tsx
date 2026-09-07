import React, { useState } from 'react';
import { DesignSystemEntry } from '../types.ts';
import { SearchFilterBar } from '../components/common/SearchFilterBar.tsx';

interface AllSystemsPageProps {
  entries: DesignSystemEntry[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const AllSystemsPage: React.FC<AllSystemsPageProps> = ({
  entries,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const [activeComponentTab, setActiveComponentTab] = useState<
    'button' | 'input' | 'select' | 'radio'
  >('button');

  // Filter systems
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
          Design Systems Directory
        </h1>
        <p style={{ color: 'var(--fg-muted)', fontSize: '15px', maxWidth: '850px' }}>
          Explore <strong>44 real production design systems</strong> from tech giants, enterprise clouds, e-commerce leaders, and civic governments. Compare Button, Input, Select, and Radio Button implementations with authentic visual fidelities.
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

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg-muted)' }}>
          Preview Component:
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {(['button', 'input', 'select', 'radio'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveComponentTab(tab)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                border: '1px solid var(--border-color)',
                backgroundColor: activeComponentTab === tab ? 'var(--accent-primary)' : 'var(--bg-surface)',
                color: activeComponentTab === tab ? '#ffffff' : 'var(--fg-default)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {tab === 'button' && 'Buttons'}
              {tab === 'input' && 'Inputs'}
              {tab === 'select' && 'Selects'}
              {tab === 'radio' && 'Radio Buttons'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filtered.map(entry => {
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
            <p style={{ color: 'var(--fg-muted)', fontSize: '14px' }}>
              Try searching with different terms or selecting &ldquo;All Categories&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
