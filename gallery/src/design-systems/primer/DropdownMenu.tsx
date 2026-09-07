import React, { useState, useRef, useEffect } from 'react';

export const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (action: string) => {
    setSelectedAction(action);
    setIsOpen(false);
  };

  return (
    <div className="ds-primer" style={{ padding: '8px 0', minHeight: '140px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div className="ds-menu-wrapper-primer" ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button
            type="button"
            className="ds-btn-primer ds-btn-primer-primary ds-menu-trigger-primer"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Actions</span>
            <span style={{ fontSize: '10px' }}>{isOpen ? '▲' : '▾'}</span>
          </button>

          {isOpen && (
            <div
              className="ds-menu-popup-primer"
              role="menu"
              style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                left: 0,
                zIndex: 50,
                minWidth: '180px',
              }}
            >
              <button
                type="button"
                className="ds-menu-item-primer"
                role="menuitem"
                onClick={() => handleSelect('Edit Configuration')}
              >
                Edit Configuration
              </button>
              <button
                type="button"
                className="ds-menu-item-primer"
                role="menuitem"
                onClick={() => handleSelect('Duplicate Cluster')}
              >
                Duplicate Cluster
              </button>
              <button
                type="button"
                className="ds-menu-item-primer"
                role="menuitem"
                onClick={() => handleSelect('Archive Service')}
              >
                Archive Service
              </button>
              <div className="ds-menu-divider-primer" style={{ height: '1px', margin: '4px 0' }} />
              <button
                type="button"
                className="ds-menu-item-primer danger"
                role="menuitem"
                onClick={() => handleSelect('Delete Resource')}
              >
                Delete Resource
              </button>
            </div>
          )}
        </div>

        {selectedAction && (
          <span style={{ fontSize: '13px', color: 'var(--fg-default)' }}>
            Selected action: <strong>{selectedAction}</strong>
          </span>
        )}
      </div>
    </div>
  );
};
