import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header.tsx';
import { Sidebar } from './components/layout/Sidebar.tsx';
import { AllSystemsPage } from './pages/AllSystemsPage.tsx';
import { ComponentComparePage } from './pages/ComponentComparePage.tsx';
import { SystemDetailPage } from './pages/SystemDetailPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ALL_SYSTEM_ENTRIES, SYSTEM_LIST, DESIGN_SYSTEMS } from './registry/index.ts';
import { ComponentCategory } from './types.ts';
import './styles/gallery.css';
import './styles/design-systems.css';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ds-gallery-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Sync theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ds-gallery-theme', theme);
  }, [theme]);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Route matching
  const renderContent = () => {
    if (currentRoute.startsWith('/systems/')) {
      const systemId = currentRoute.replace('/systems/', '');
      return <SystemDetailPage systemId={systemId} entries={SYSTEM_LIST} />;
    }

    const validComponents: ComponentCategory[] = [
      'button',
      'input',
      'select',
      'radio',
      'checkbox',
      'switch',
      'textarea',
      'tabs',
      'dialog',
      'tooltip',
      'card',
      'dropdown-menu',
      'table',
      'alert',
      'toast',
      'badge',
      'accordion',
      'pagination',
      'breadcrumbs',
      'avatar',
    ];

    if (currentRoute.startsWith('/components/')) {
      const comp = currentRoute.replace('/components/', '') as ComponentCategory;
      if (validComponents.includes(comp)) {
        return (
          <ComponentComparePage
            componentType={comp}
            entries={SYSTEM_LIST}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
      }
    }

    if (currentRoute === '/about') {
      return <AboutPage />;
    }

    // Default: All Systems
    return (
      <AllSystemsPage
        entries={SYSTEM_LIST}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    );
  };

  return (
    <div className="app-container">
      <Header
        currentRoute={currentRoute}
        theme={theme}
        onToggleTheme={toggleTheme}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <div className="layout-body">
        <Sidebar
          systems={DESIGN_SYSTEMS}
          selectedCategory={selectedCategory}
          onSelectCategory={cat => {
            setSelectedCategory(cat);
            if (currentRoute.startsWith('/systems/')) {
              window.location.hash = '#/';
            }
          }}
          currentRoute={currentRoute}
          isMobileOpen={isMobileMenuOpen}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
        />

        <main className="app-main">{renderContent()}</main>
      </div>
    </div>
  );
};
