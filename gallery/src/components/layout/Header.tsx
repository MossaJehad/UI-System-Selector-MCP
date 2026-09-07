import React, { useState, useRef, useEffect } from 'react';
import { ComponentCategory } from '../../types.ts';

import { DESIGN_SYSTEMS } from '../../registry/data.ts';

interface HeaderProps {
  currentRoute: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onToggleMobileMenu: () => void;
}

const ALL_COMPONENTS: { id: ComponentCategory; label: string }[] = [
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
  { id: 'dropdown-menu', label: 'Dropdown Menus' },
  { id: 'table', label: 'Tables' },
  { id: 'alert', label: 'Alerts' },
  { id: 'toast', label: 'Toasts' },
  { id: 'badge', label: 'Badges' },
  { id: 'accordion', label: 'Accordions' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'breadcrumbs', label: 'Breadcrumbs' },
  { id: 'avatar', label: 'Avatars' },
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  theme,
  onToggleTheme,
  onToggleMobileMenu,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeComp = ALL_COMPONENTS.find(c => currentRoute === `/components/${c.id}`);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="app-header">
      <div className="brand-section">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onToggleMobileMenu}
          title="Toggle Navigation Menu"
        >
          ☰
        </button>
        <a href="#/" className="brand-title">
          <span>Design Systems Gallery</span>
        </a>
        <span className="brand-badge">{DESIGN_SYSTEMS.length} Systems</span>
      </div>

      <nav className="header-nav">
        <a
          href="#/"
          className={`nav-link ${currentRoute === '' || currentRoute === '/' || currentRoute.startsWith('/systems') ? 'active' : ''}`}
        >
          Systems
        </a>

        {/* Dropdown for All 10 Components */}
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button
            type="button"
            className={`nav-link ${currentRoute.startsWith('/components/') ? 'active' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>{activeComp ? `Component: ${activeComp.label}` : 'Components'}</span>
            <span style={{ fontSize: '10px' }}>{dropdownOpen ? '▲' : '▼'}</span>
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                padding: '8px',
                zIndex: 1000,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 150px)',
                maxHeight: '440px',
                overflowY: 'auto',
                gap: '4px',
              }}
            >
              {ALL_COMPONENTS.map(c => {
                const isActive = currentRoute === `/components/${c.id}`;
                return (
                  <a
                    key={c.id}
                    href={`#/components/${c.id}`}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: 'block',
                      padding: '8px 12px',
                      fontSize: '13px',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--accent-primary)' : 'var(--fg-default)',
                      backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                      borderRadius: 'var(--radius-sm)',
                      textDecoration: 'none',
                      transition: 'background-color 0.15s ease',
                    }}
                  >
                    {c.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <a
          href="#/about"
          className={`nav-link ${currentRoute === '/about' ? 'active' : ''}`}
        >
          About
        </a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
};
