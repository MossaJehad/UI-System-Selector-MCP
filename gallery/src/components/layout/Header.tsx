import React from 'react';
import { ComponentCategory } from '../../types.ts';

interface HeaderProps {
  currentRoute: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  theme,
  onToggleTheme,
  onToggleMobileMenu,
}) => {
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
        <span className="brand-badge">44 Systems</span>
      </div>

      <nav className="header-nav">
        <a
          href="#/"
          className={`nav-link ${currentRoute === '' || currentRoute === '/' || currentRoute.startsWith('/systems') ? 'active' : ''}`}
        >
          Systems
        </a>
        <a
          href="#/components/button"
          className={`nav-link ${currentRoute === '/components/button' ? 'active' : ''}`}
        >
          Buttons
        </a>
        <a
          href="#/components/input"
          className={`nav-link ${currentRoute === '/components/input' ? 'active' : ''}`}
        >
          Inputs
        </a>
        <a
          href="#/components/select"
          className={`nav-link ${currentRoute === '/components/select' ? 'active' : ''}`}
        >
          Selects
        </a>
        <a
          href="#/components/radio"
          className={`nav-link ${currentRoute === '/components/radio' ? 'active' : ''}`}
        >
          Radio Buttons
        </a>
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
