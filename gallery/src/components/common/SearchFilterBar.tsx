import React from 'react';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalCount: number;
  filteredCount: number;
}

const CATEGORY_PILLS = [
  { id: 'all', label: 'All' },
  { id: 'tech-giant', label: 'Tech Giants' },
  { id: 'enterprise', label: 'Enterprise & Cloud' },
  { id: 'developer-tools', label: 'Developer Tools' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'modern-react', label: 'Modern React' },
  { id: 'government', label: 'Government & Civic' },
  { id: 'automotive', label: 'Automotive & Luxury' },
  { id: 'specialty-retro', label: 'Specialty & Retro' },
];

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="search-filter-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="main-search-input"
          placeholder="Search by system name (e.g. Carbon, Material, Fluent), organization (IBM, Apple), category..."
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>

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
    </div>
  );
};
