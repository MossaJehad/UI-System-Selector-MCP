import React from 'react';
import { DesignSystemMeta, SystemCategory } from '../../types.ts';

interface SidebarProps {
  systems: DesignSystemMeta[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  currentRoute: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'tech-giant', label: 'Tech Giants' },
  { id: 'enterprise', label: 'Enterprise & Cloud' },
  { id: 'developer-tools', label: 'Developer Tools' },
  { id: 'e-commerce', label: 'E-Commerce' },
  { id: 'modern-react', label: 'Modern React' },
  { id: 'government', label: 'Government & Civic' },
  { id: 'automotive', label: 'Automotive & Luxury' },
  { id: 'specialty-retro', label: 'Specialty & Retro' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  systems,
  selectedCategory,
  onSelectCategory,
  currentRoute,
  isMobileOpen,
  onCloseMobile,
}) => {
  const filteredSystems =
    selectedCategory === 'all'
      ? systems
      : systems.filter(s => s.category === selectedCategory);

  return (
    <aside className={`app-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div>
        <div className="sidebar-heading">Filter by Domain</div>
        <div className="category-filter-list">
          {CATEGORIES.map(cat => {
            const count =
              cat.id === 'all'
                ? systems.length
                : systems.filter(s => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  onSelectCategory(cat.id);
                  if (isMobileOpen) onCloseMobile();
                }}
              >
                <span>{cat.label}</span>
                <span style={{ fontSize: '11px', opacity: 0.7 }}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className="sidebar-heading">
          Systems ({filteredSystems.length})
        </div>
        <div className="system-nav-list">
          {filteredSystems.map(sys => {
            const isActive = currentRoute === `/systems/${sys.id}`;
            return (
              <a
                key={sys.id}
                href={`#/systems/${sys.id}`}
                className={`system-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  if (isMobileOpen) onCloseMobile();
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: sys.tokens.primaryColor,
                      display: 'inline-block',
                    }}
                  />
                  <span>{sys.name}</span>
                </span>
                <span style={{ fontSize: '11px', opacity: 0.6 }}>{sys.organization}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
