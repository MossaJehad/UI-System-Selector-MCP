import React, { useState, useMemo } from 'react';
import { DesignSystemMeta } from '../../types.ts';

interface SidebarProps {
  systems: DesignSystemMeta[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  currentRoute: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

const CATEGORIES: { id: string; label: string }[] = [
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

const COMPONENTS = [
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
  { id: 'card', label: 'Cards' },
  { id: 'dropdown-menu', label: 'Dropdowns' },
  { id: 'table', label: 'Tables' },
  { id: 'alert', label: 'Alerts' },
  { id: 'toast', label: 'Toasts' },
  { id: 'badge', label: 'Badges' },
  { id: 'accordion', label: 'Accordions' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'breadcrumbs', label: 'Breadcrumbs' },
  { id: 'avatar', label: 'Avatars' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  systems,
  selectedCategory,
  onSelectCategory,
  currentRoute,
  isMobileOpen,
  onCloseMobile,
}) => {
  const [sidebarFilter, setSidebarFilter] = useState('');

  const filteredSystems = useMemo(() => {
    let list = selectedCategory === 'all'
      ? systems
      : systems.filter(s => s.category === selectedCategory);

    if (sidebarFilter.trim()) {
      const q = sidebarFilter.toLowerCase().trim();
      list = list.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.organization.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q)
      );
    }
    return list;
  }, [systems, selectedCategory, sidebarFilter]);

  return (
    <aside className={`app-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
      <div>
        <div className="sidebar-heading">Components (20)</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginBottom: '16px' }}>
          {COMPONENTS.map(c => {
            const isActive = currentRoute === `/components/${c.id}`;
            return (
              <a
                key={c.id}
                href={`#/components/${c.id}`}
                className={`category-item ${isActive ? 'active' : ''}`}
                style={{ padding: '5px 8px', fontSize: '12px', textAlign: 'left', textDecoration: 'none' }}
                onClick={() => {
                  if (isMobileOpen) onCloseMobile();
                }}
              >
                <span>{c.label}</span>
              </a>
            );
          })}
        </div>
      </div>

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

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div className="sidebar-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Systems ({filteredSystems.length})</span>
          <span style={{ fontSize: '10px', textTransform: 'none', color: 'var(--fg-muted)' }}>
            Total: {systems.length}
          </span>
        </div>

        {/* Quick search inside sidebar */}
        <div style={{ marginBottom: '8px' }}>
          <input
            type="text"
            placeholder="Filter systems..."
            value={sidebarFilter}
            onChange={e => setSidebarFilter(e.target.value)}
            style={{
              width: '100%',
              padding: '5px 8px',
              fontSize: '12px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-surface)',
              color: 'var(--fg-default)',
            }}
          />
        </div>

        <div className="system-nav-list" style={{ flex: 1 }}>
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
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      minWidth: '8px',
                      borderRadius: '50%',
                      backgroundColor: sys.tokens.primaryColor,
                      display: 'inline-block',
                    }}
                  />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sys.name}
                  </span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {sys.status === 'legacy' && (
                    <span style={{ fontSize: '9px', padding: '1px 3px', borderRadius: '3px', background: '#fef3c7', color: '#92400e' }}>
                      Legacy
                    </span>
                  )}
                  <span style={{ fontSize: '11px', opacity: 0.6, whiteSpace: 'nowrap' }}>{sys.organization}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
