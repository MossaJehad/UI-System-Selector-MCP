import React from 'react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus?: string;
  onStatusChange?: (status: string) => void;
  selectedType?: string;
  onTypeChange?: (type: string) => void;
  selectedLetter?: string;
  onLetterChange?: (letter: string) => void;
  totalCount: number;
  filteredCount: number;
}

const CATEGORY_PILLS = [
  { id: 'all', label: 'All Domains' },
  { id: 'tech-giant', label: 'Tech Giants' },
  { id: 'enterprise', label: 'Enterprise & Cloud' },
  { id: 'developer-tools', label: 'Developer Tools' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'modern-react', label: 'Modern React' },
  { id: 'government', label: 'Government & Civic' },
  { id: 'automotive', label: 'Automotive & Luxury' },
  { id: 'specialty-retro', label: 'Specialty & Retro' },
];

const STATUS_OPTIONS = [
  { id: 'all', label: 'All Statuses' },
  { id: 'active', label: 'Active Only' },
  { id: 'legacy', label: 'Legacy / Deprecated' },
];

const TYPE_OPTIONS = [
  { id: 'all', label: 'All Types' },
  { id: 'design-system', label: 'Design Systems' },
  { id: 'ui-library', label: 'UI Libraries' },
  { id: 'platform-guidelines', label: 'Platform Guidelines' },
  { id: 'government-design-system', label: 'Government Systems' },
  { id: 'legacy-ui', label: 'Legacy Retro UI' },
];

const ALPHABET = [
  'All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'
];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus = 'all',
  onStatusChange,
  selectedType = 'all',
  onTypeChange,
  selectedLetter = 'All',
  onLetterChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="search-filter-container" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Search Input */}
      <div className="search-input-wrapper" style={{ position: 'relative' }}>
        <input
          type="text"
          className="main-search-input"
          placeholder="Search by system name (e.g. Carbon, Material, Cloudscape), organization (IBM, Google, Apple), category, token..."
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: 'var(--fg-muted)',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Domain Category Pills */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div className="pill-group">
          {CATEGORY_PILLS.map(pill => (
            <button
              key={pill.id}
              type="button"
              className={`filter-pill ${selectedCategory === pill.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(pill.id)}
            >
              {pill.label}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '13px', color: 'var(--fg-muted)', fontWeight: 500 }}>
          Showing <strong>{filteredCount}</strong> of <strong>{totalCount}</strong> systems
        </div>
      </div>

      {/* Status & Type Selectors + Reset */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
        {onStatusChange && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)' }}>Status:</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {STATUS_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onStatusChange(opt.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm, 4px)',
                    fontSize: '12px',
                    fontWeight: 500,
                    border: '1px solid var(--border-color)',
                    background: selectedStatus === opt.id ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: selectedStatus === opt.id ? '#ffffff' : 'var(--fg-default)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {onTypeChange && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)' }}>Type:</span>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {TYPE_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onTypeChange(opt.id)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm, 4px)',
                    fontSize: '12px',
                    fontWeight: 500,
                    border: '1px solid var(--border-color)',
                    background: selectedType === opt.id ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: selectedType === opt.id ? '#ffffff' : 'var(--fg-default)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {(selectedCategory !== 'all' || selectedStatus !== 'all' || selectedType !== 'all' || selectedLetter !== 'All' || searchQuery !== '') && (
          <button
            type="button"
            onClick={() => {
              onSearchChange('');
              onCategoryChange('all');
              if (onStatusChange) onStatusChange('all');
              if (onTypeChange) onTypeChange('all');
              if (onLetterChange) onLetterChange('All');
            }}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              color: 'var(--accent-primary)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
              marginLeft: 'auto',
            }}
          >
            Reset all filters
          </button>
        )}
      </div>

      {/* A-Z Letter Jump Bar */}
      {onLetterChange && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginRight: '4px' }}>A-Z:</span>
          {ALPHABET.map(letter => (
            <button
              key={letter}
              type="button"
              onClick={() => onLetterChange(letter)}
              style={{
                minWidth: '24px',
                height: '24px',
                padding: '0 4px',
                borderRadius: '3px',
                fontSize: '12px',
                fontWeight: selectedLetter === letter ? 700 : 500,
                border: '1px solid',
                borderColor: selectedLetter === letter ? 'var(--accent-primary)' : 'transparent',
                background: selectedLetter === letter ? 'var(--accent-primary)' : 'transparent',
                color: selectedLetter === letter ? '#ffffff' : 'var(--fg-default)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.1s ease',
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
