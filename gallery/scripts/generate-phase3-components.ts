import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DS_DIR = path.join(ROOT_DIR, 'src/design-systems');
const STYLES_FILE = path.join(ROOT_DIR, 'src/styles/design-systems.css');
const DATA_FILE = path.join(ROOT_DIR, 'src/registry/data.ts');

const OMISSION_MAP: Record<string, { [comp: string]: string }> = {
  'govuk': {
    avatar: 'The GOV.UK Design System deliberately omits personal user avatars to protect citizen privacy, maintain identity neutrality, and avoid decorative graphics in public service transactions.',
    toast: 'GOV.UK explicitly discourages transient toasts/snackbars because auto-dismissing content violates WCAG 2.2 accessibility standards for screen readers and users with cognitive impairments. Persistent notification banners or error summaries must be used instead.',
  },
  'australian-gov': {
    avatar: 'The Australian Government design system avoids user profile avatars in civic portals to maintain public accessibility and identity verification neutrality.',
    toast: 'Transient alerts and auto-dismissing toasts are prohibited under Australian Government accessibility guidelines in favor of persistent inline notices.',
  },
  'nhs': {
    avatar: 'NHS UK guidelines intentionally avoid user avatars in patient health records and clinical portals to maintain medical privacy and universal clarity.',
    toast: 'NHS digital service standards require all health alerts, confirmations, and warnings to remain persistently visible on screen.',
  },
  'singapore-gov': {
    avatar: 'GovTech Singapore digital services use national Singpass authentication and intentionally omit personal avatar images in public workflows.',
  },
  'ontario': {
    avatar: 'The Government of Ontario Design System omits decorative avatars in official provincial citizen services.',
  },
  'det-faelles': {
    avatar: 'The Danish public sector design system deliberately omits user avatars in administrative citizen portals.',
    toast: 'Transient toast notifications are omitted in favor of accessible persistent status messages.',
  },
  'dsfr': {
    toast: 'Le Système de Design de l’État français (DSFR) proscrit les toasts éphémères au profit d’alertes persistantes et accessibles.',
  },
  'italia': {
    toast: 'Designers Italia omits transient toasts in public administration interfaces to ensure notifications are never missed.',
  },
  'codex': {
    toast: 'Wikimedia Codex uses persistent inline Message boxes for critical notifications rather than auto-dismissing snackbars.',
  },
  'c64-css': {
    avatar: 'Commodore 64 PETSCII system environment has no concept of personal user avatars.',
    breadcrumbs: 'The Commodore 64 8-bit command prompt operates in a single flat memory model without hierarchical breadcrumb navigation.',
    accordion: 'Classic C64 screen modes do not support expandable interactive accordion disclosure widgets.',
  },
  'rpgui': {
    breadcrumbs: 'Classic 16-bit RPG video game interfaces do not include hierarchical web breadcrumbs.',
    pagination: 'RPGUI game inventories use slot grids and scroll panels rather than document pagination controls.',
  },
  'psone-css': {
    breadcrumbs: 'PlayStation 1 BIOS memory card screens do not utilize web breadcrumb trails.',
    pagination: 'PlayStation 1 memory card screens use fixed 15-block memory grids rather than paginated pages.',
  },
  'terminal-css': {
    avatar: 'Pure command-line CRT terminals do not support decorative profile avatar images.',
  },
};

const CARD_TMPL = `import React, { useState } from 'react';

export const Card: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [deployCount, setDeployCount] = useState(3);

  return (
    <div className="ds-SID" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        className={\`ds-card-SID ds-card-interactive-SID \${isSelected ? 'selected' : ''}\`}
        onClick={() => setIsSelected(!isSelected)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsSelected(!isSelected);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="ds-card-header-SID">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-SID">Project Alpha</span>
            <span className="ds-badge-SID ds-badge-SID-primary">{isSelected ? 'Selected' : 'Active'}</span>
          </div>
          <span className="ds-card-subtitle-SID">Last updated 2 hours ago</span>
        </div>
        <div className="ds-card-body-SID">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Production cluster orchestrating 12 distributed services with automated health checks and blue-green deployments.
          </p>
        </div>
        <div className="ds-card-footer-SID" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Click card or press Enter to toggle</span>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{isSelected ? '✓ In Sync' : '○ Standby'}</span>
        </div>
      </div>

      <div className="ds-card-SID">
        <div className="ds-card-header-SID">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-SID">Continuous Delivery</span>
            <span style={{ fontSize: '12px', opacity: 0.7 }}>v2.4.1</span>
          </div>
          <span className="ds-card-subtitle-SID">Automated release pipeline</span>
        </div>
        <div className="ds-card-body-SID">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Trigger zero-downtime deployment across regional edge workers. Current active rollouts: <strong>{deployCount}</strong>.
          </p>
        </div>
        <div className="ds-card-footer-SID">
          <button
            type="button"
            className="ds-btn-SID ds-btn-SID-primary"
            onClick={e => {
              e.stopPropagation();
              setDeployCount(c => c + 1);
            }}
          >
            Deploy Rollout ({deployCount})
          </button>
        </div>
      </div>
    </div>
  );
};
`;

const MENU_TMPL = `import React, { useState, useRef, useEffect } from 'react';

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
    <div className="ds-SID" style={{ padding: '8px 0', minHeight: '140px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div className="ds-menu-wrapper-SID" ref={menuRef} style={{ position: 'relative', display: 'inline-block' }}>
          <button
            type="button"
            className="ds-btn-SID ds-btn-SID-primary ds-menu-trigger-SID"
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
              className="ds-menu-popup-SID"
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
                className="ds-menu-item-SID"
                role="menuitem"
                onClick={() => handleSelect('Edit Configuration')}
              >
                Edit Configuration
              </button>
              <button
                type="button"
                className="ds-menu-item-SID"
                role="menuitem"
                onClick={() => handleSelect('Duplicate Cluster')}
              >
                Duplicate Cluster
              </button>
              <button
                type="button"
                className="ds-menu-item-SID"
                role="menuitem"
                onClick={() => handleSelect('Archive Service')}
              >
                Archive Service
              </button>
              <div className="ds-menu-divider-SID" style={{ height: '1px', margin: '4px 0' }} />
              <button
                type="button"
                className="ds-menu-item-SID danger"
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
`;

const TABLE_TMPL = `import React, { useState } from 'react';

interface RowData {
  id: string;
  name: string;
  status: 'Active' | 'Pending' | 'Inactive';
  role: string;
}

const INITIAL_ROWS: RowData[] = [
  { id: '1', name: 'Sarah Lee', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Omar Ali', status: 'Pending', role: 'Developer' },
  { id: '3', name: 'Alex Smith', status: 'Inactive', role: 'Viewer' },
];

export const Table: React.FC = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

  const rows = [...INITIAL_ROWS].sort((a, b) => {
    return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === rows.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(rows.map(r => r.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--fg-muted)' }}>
        <span>Selected: <strong>{selectedIds.length}</strong> of {rows.length}</span>
        <span>Click Name to sort ({sortAsc ? 'A–Z ▲' : 'Z–A ▼'})</span>
      </div>

      <div className="ds-table-wrapper-SID" style={{ overflowX: 'auto', width: '100%' }}>
        <table className="ds-table-SID" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="ds-th-SID" style={{ width: '40px', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  className="ds-checkbox-SID"
                  checked={selectedIds.length === rows.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
              <th
                className="ds-th-SID"
                onClick={() => setSortAsc(!sortAsc)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                Name {sortAsc ? '▲' : '▼'}
              </th>
              <th className="ds-th-SID">Status</th>
              <th className="ds-th-SID">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => {
              const isSelected = selectedIds.includes(row.id);
              return (
                <tr key={row.id} className={\`ds-tr-SID \${isSelected ? 'selected' : ''}\`}>
                  <td className="ds-td-SID" style={{ textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      className="ds-checkbox-SID"
                      checked={isSelected}
                      onChange={() => toggleSelectRow(row.id)}
                      aria-label={\`Select \${row.name}\`}
                    />
                  </td>
                  <td className="ds-td-SID" style={{ fontWeight: 600 }}>{row.name}</td>
                  <td className="ds-td-SID">
                    <span className={\`ds-badge-SID ds-badge-SID-\${row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'neutral'}\`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="ds-td-SID">{row.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
`;

const ALERT_TMPL = `import React, { useState } from 'react';

export const Alert: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const allDismissed = !showInfo && !showSuccess && !showError;

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {showInfo && (
        <div className="ds-alert-SID ds-alert-SID-info" role="status">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-SID">System Maintenance Notice</div>
            <div className="ds-alert-desc-SID">Scheduled database index optimization in 48 hours. Zero downtime anticipated.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-SID"
            onClick={() => setShowInfo(false)}
            aria-label="Dismiss notice"
          >
            ✕
          </button>
        </div>
      )}

      {showSuccess && (
        <div className="ds-alert-SID ds-alert-SID-success" role="alert">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-SID">Deployment Successful</div>
            <div className="ds-alert-desc-SID">Cluster alpha-01 updated to v2.4.1. All 16 containers healthy.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-SID"
            onClick={() => setShowSuccess(false)}
            aria-label="Dismiss success alert"
          >
            ✕
          </button>
        </div>
      )}

      {showError && (
        <div className="ds-alert-SID ds-alert-SID-error" role="alert">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-SID">Provisioning Failed</div>
            <div className="ds-alert-desc-SID">Subnet cidr block conflict: 10.0.4.0/24 overlaps with VPC peering bridge.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-SID"
            onClick={() => setShowError(false)}
            aria-label="Dismiss error alert"
          >
            ✕
          </button>
        </div>
      )}

      {allDismissed && (
        <div style={{ textAlign: 'center', padding: '12px', fontSize: '13px', color: 'var(--fg-muted)' }}>
          All alerts dismissed.{' '}
          <button
            type="button"
            onClick={() => {
              setShowInfo(true);
              setShowSuccess(true);
              setShowError(true);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-primary)',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Reset Alerts
          </button>
        </div>
      )}
    </div>
  );
};
`;

const TOAST_TMPL = `import React, { useState, useEffect } from 'react';

export const Toast: React.FC = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = setTimeout(() => {
      setToastOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastOpen, counter]);

  const triggerToast = () => {
    setCounter(c => c + 1);
    setToastOpen(true);
  };

  return (
    <div className="ds-SID" style={{ padding: '8px 0', minHeight: '80px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="ds-btn-SID ds-btn-SID-primary"
          onClick={triggerToast}
        >
          Save Changes ({counter})
        </button>
        <span style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
          Click to trigger an auto-dismissing toast notification (4s)
        </span>
      </div>

      {toastOpen && (
        <div
          className="ds-toast-SID"
          role="status"
          aria-live="polite"
          style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <span className="ds-toast-content-SID">
            ✓ Settings saved successfully. Node #{counter} configuration synchronized.
          </span>
          <button
            type="button"
            className="ds-toast-close-SID"
            onClick={() => setToastOpen(false)}
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
`;

const BADGE_TMPL = `import React, { useState } from 'react';

export const Badge: React.FC = () => {
  const [tags, setTags] = useState(['Frontend', 'React 19', 'TypeScript', 'WCAG AA']);
  const [selectedChip, setSelectedChip] = useState('All');

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const chips = ['All', 'Compute', 'Storage', 'Network'];

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Status &amp; Count Badges
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="ds-badge-SID ds-badge-SID-primary">Active</span>
          <span className="ds-badge-SID ds-badge-SID-success">Healthy</span>
          <span className="ds-badge-SID ds-badge-SID-warning">Pending</span>
          <span className="ds-badge-SID ds-badge-SID-error">High Priority</span>
          <span className="ds-badge-SID ds-badge-SID-neutral">v2.4.0</span>
          <span className="ds-badge-count-SID">14</span>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Selectable Filter Chips
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {chips.map(chip => (
            <button
              key={chip}
              type="button"
              className={\`ds-chip-SID \${selectedChip === chip ? 'active' : ''}\`}
              onClick={() => setSelectedChip(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Removable Tags
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {tags.map(tag => (
            <span key={tag} className="ds-tag-SID">
              <span>{tag}</span>
              <button
                type="button"
                className="ds-tag-remove-SID"
                onClick={() => removeTag(tag)}
                aria-label={\`Remove \${tag} tag\`}
              >
                ✕
              </button>
            </span>
          ))}
          {tags.length < 4 && (
            <button
              type="button"
              onClick={() => setTags(['Frontend', 'React 19', 'TypeScript', 'WCAG AA'])}
              style={{
                fontSize: '12px',
                color: 'var(--accent-primary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Reset tags
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
`;

const ACCORDION_TMPL = `import React, { useState } from 'react';

export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'How are design tokens structured?',
      content: 'Design tokens provide centralized variables for color palettes, spacing scales, typographic hierarchies, and interactive states across platforms.',
    },
    {
      title: 'What accessibility standards are supported?',
      content: 'Components adhere to WCAG 2.1/2.2 AA requirements including high contrast ratios, visible keyboard focus rings, and screen-reader accessibility semantics.',
    },
    {
      title: 'Is dark theme supported natively?',
      content: 'Yes, tokens automatically adapt to system dark mode preferences or explicit theme data attributes without breaking visual contrast.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="ds-accordion-SID">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={\`ds-accordion-item-SID \${isOpen ? 'open' : ''}\`}>
              <button
                type="button"
                className="ds-accordion-trigger-SID"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
              >
                <span>{item.title}</span>
                <span className={\`ds-accordion-chevron-SID \${isOpen ? 'rotated' : ''}\`}>▾</span>
              </button>
              {isOpen && (
                <div className="ds-accordion-panel-SID">
                  <p style={{ margin: 0, lineHeight: 1.5, fontSize: '13px' }}>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
`;

const PAGINATION_TMPL = `import React, { useState } from 'react';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
        Showing page <strong>{currentPage}</strong> of {totalPages} (Records 21–30 of 50)
      </div>

      <nav className="ds-pagination-SID" aria-label="Pagination Navigation">
        <button
          type="button"
          className="ds-page-btn-SID"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          aria-label="Previous page"
        >
          ‹ Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            type="button"
            className={\`ds-page-btn-SID \${currentPage === page ? 'active' : ''}\`}
            aria-current={currentPage === page ? 'page' : undefined}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          className="ds-page-btn-SID"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          aria-label="Next page"
        >
          Next ›
        </button>
      </nav>
    </div>
  );
};
`;

const BREADCRUMBS_TMPL = `import React from 'react';

export const Breadcrumbs: React.FC = () => {
  const trail = [
    { label: 'Home', href: '#/' },
    { label: 'Infrastructure', href: '#/systems' },
    { label: 'Clusters', href: '#/systems' },
    { label: 'Production East', href: '#/systems', current: true },
  ];

  return (
    <div className="ds-SID" style={{ padding: '8px 0' }}>
      <nav aria-label="Breadcrumb" className="ds-breadcrumbs-SID">
        <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <li key={item.label} className="ds-breadcrumb-item-SID" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {isLast ? (
                  <span className="ds-breadcrumb-current-SID" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <a href={item.href} className="ds-breadcrumb-link-SID">
                      {item.label}
                    </a>
                    <span className="ds-breadcrumb-separator-SID" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
`;

const AVATAR_TMPL = `import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="ds-SID" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Size Variants &amp; Online Status
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div className="ds-avatar-wrapper-SID">
            <div className="ds-avatar-SID ds-avatar-sm-SID" aria-label="Sarah Lee">
              SL
            </div>
            <span className="ds-avatar-status-SID online" title="Online" />
          </div>

          <div className="ds-avatar-wrapper-SID">
            <div className="ds-avatar-SID ds-avatar-md-SID" aria-label="Omar Ali">
              OA
            </div>
            <span className="ds-avatar-status-SID online" title="Online" />
          </div>

          <div className="ds-avatar-wrapper-SID">
            <div className="ds-avatar-SID ds-avatar-lg-SID" aria-label="Mossa Jehad">
              MJ
            </div>
            <span className="ds-avatar-status-SID busy" title="Busy" />
          </div>

          <div className="ds-avatar-wrapper-SID">
            <div className="ds-avatar-SID ds-avatar-md-SID square" aria-label="Engineering Org">
              EN
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Avatar Group (Collaborators)
        </div>
        <div className="ds-avatar-group-SID" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ds-avatar-SID ds-avatar-md-SID" title="Sarah Lee" style={{ zIndex: 3 }}>
            SL
          </div>
          <div className="ds-avatar-SID ds-avatar-md-SID" title="Omar Ali" style={{ zIndex: 2, marginLeft: '-10px' }}>
            OA
          </div>
          <div className="ds-avatar-SID ds-avatar-md-SID" title="Alex Smith" style={{ zIndex: 1, marginLeft: '-10px' }}>
            AS
          </div>
          <div className="ds-avatar-SID ds-avatar-md-SID more" title="2 more members" style={{ zIndex: 0, marginLeft: '-10px' }}>
            +2
          </div>
        </div>
      </div>
    </div>
  );
};
`;

const UNSUPPORTED_TMPL = (name: string) => `import React from 'react';

export const ${name}: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        REASON_TEXT
      </p>
      <a href="DOCS_URL" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
`;

console.log('Loading existing 130 systems from data.ts...');
const currentDataTs = fs.readFileSync(DATA_FILE, 'utf-8');
const match = currentDataTs.match(/export const DESIGN_SYSTEMS: DesignSystemMeta\[\] = (\[[\s\S]*?\]);\n/);
if (!match) throw new Error('Could not parse DESIGN_SYSTEMS');
const systems = JSON.parse(match[1]);
console.log(`Found ${systems.length} systems in data.ts.`);

const cssChunks: string[] = [fs.readFileSync(STYLES_FILE, 'utf-8')];

for (const s of systems) {
  const sid = s.id;
  const sdir = path.join(DS_DIR, sid);
  if (!fs.existsSync(sdir)) fs.mkdirSync(sdir, { recursive: true });

  const omissions = OMISSION_MAP[sid] || {};

  // Component support resolution
  const cs = s.componentSupport;
  cs.card = omissions.card ? false : true;
  cs.dropdownMenu = omissions.dropdownMenu ? false : true;
  cs.table = omissions.table ? false : true;
  cs.alert = omissions.alert ? false : true;
  cs.toast = omissions.toast ? false : true;
  cs.badge = omissions.badge ? false : true;
  cs.accordion = omissions.accordion ? false : true;
  cs.pagination = omissions.pagination ? false : true;
  cs.breadcrumbs = omissions.breadcrumbs ? false : true;
  cs.avatar = omissions.avatar ? false : true;

  // 1. Card
  if (cs.card) {
    fs.writeFileSync(path.join(sdir, 'Card.tsx'), CARD_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Card.tsx'), UNSUPPORTED_TMPL('Card').replaceAll('REASON_TEXT', omissions.card).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 2. Dropdown Menu
  if (cs.dropdownMenu) {
    fs.writeFileSync(path.join(sdir, 'DropdownMenu.tsx'), MENU_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'DropdownMenu.tsx'), UNSUPPORTED_TMPL('DropdownMenu').replaceAll('REASON_TEXT', omissions.dropdownMenu).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 3. Table
  if (cs.table) {
    fs.writeFileSync(path.join(sdir, 'Table.tsx'), TABLE_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Table.tsx'), UNSUPPORTED_TMPL('Table').replaceAll('REASON_TEXT', omissions.table).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 4. Alert
  if (cs.alert) {
    fs.writeFileSync(path.join(sdir, 'Alert.tsx'), ALERT_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Alert.tsx'), UNSUPPORTED_TMPL('Alert').replaceAll('REASON_TEXT', omissions.alert).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 5. Toast
  if (cs.toast) {
    fs.writeFileSync(path.join(sdir, 'Toast.tsx'), TOAST_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Toast.tsx'), UNSUPPORTED_TMPL('Toast').replaceAll('REASON_TEXT', omissions.toast).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 6. Badge
  if (cs.badge) {
    fs.writeFileSync(path.join(sdir, 'Badge.tsx'), BADGE_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Badge.tsx'), UNSUPPORTED_TMPL('Badge').replaceAll('REASON_TEXT', omissions.badge).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 7. Accordion
  if (cs.accordion) {
    fs.writeFileSync(path.join(sdir, 'Accordion.tsx'), ACCORDION_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Accordion.tsx'), UNSUPPORTED_TMPL('Accordion').replaceAll('REASON_TEXT', omissions.accordion).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 8. Pagination
  if (cs.pagination) {
    fs.writeFileSync(path.join(sdir, 'Pagination.tsx'), PAGINATION_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Pagination.tsx'), UNSUPPORTED_TMPL('Pagination').replaceAll('REASON_TEXT', omissions.pagination).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 9. Breadcrumbs
  if (cs.breadcrumbs) {
    fs.writeFileSync(path.join(sdir, 'Breadcrumbs.tsx'), BREADCRUMBS_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Breadcrumbs.tsx'), UNSUPPORTED_TMPL('Breadcrumbs').replaceAll('REASON_TEXT', omissions.breadcrumbs).replaceAll('DOCS_URL', s.docsUrl));
  }

  // 10. Avatar
  if (cs.avatar) {
    fs.writeFileSync(path.join(sdir, 'Avatar.tsx'), AVATAR_TMPL.replaceAll('SID', sid));
  } else {
    fs.writeFileSync(path.join(sdir, 'Avatar.tsx'), UNSUPPORTED_TMPL('Avatar').replaceAll('REASON_TEXT', omissions.avatar).replaceAll('DOCS_URL', s.docsUrl));
  }

  // Update index.ts to export all 20 components
  const idxCode = `export { Button } from './Button.tsx';
export { Input } from './Input.tsx';
export { Select } from './Select.tsx';
export { Radio } from './Radio.tsx';
export { Checkbox } from './Checkbox.tsx';
export { Switch } from './Switch.tsx';
export { Textarea } from './Textarea.tsx';
export { Tabs } from './Tabs.tsx';
export { Dialog } from './Dialog.tsx';
export { Tooltip } from './Tooltip.tsx';
export { Card } from './Card.tsx';
export { DropdownMenu } from './DropdownMenu.tsx';
export { Table } from './Table.tsx';
export { Alert } from './Alert.tsx';
export { Toast } from './Toast.tsx';
export { Badge } from './Badge.tsx';
export { Accordion } from './Accordion.tsx';
export { Pagination } from './Pagination.tsx';
export { Breadcrumbs } from './Breadcrumbs.tsx';
export { Avatar } from './Avatar.tsx';
`;
  fs.writeFileSync(path.join(sdir, 'index.ts'), idxCode);

  // Add canonicalCode snippets & variants
  s.canonicalCode.card = `<div className="ds-card-${sid}"><h3 className="ds-card-title-${sid}">Card Title</h3></div>`;
  s.canonicalCode['dropdown-menu'] = `<button className="ds-btn-${sid} ds-menu-trigger-${sid}">Actions ▾</button>`;
  s.canonicalCode.table = `<table className="ds-table-${sid}"><thead><tr><th>Name</th></tr></thead></table>`;
  s.canonicalCode.alert = `<div className="ds-alert-${sid} ds-alert-${sid}-info">Notice</div>`;
  s.canonicalCode.toast = `<div className="ds-toast-${sid}">Settings saved</div>`;
  s.canonicalCode.badge = `<span className="ds-badge-${sid} ds-badge-${sid}-primary">Active</span>`;
  s.canonicalCode.accordion = `<div className="ds-accordion-item-${sid}"><button className="ds-accordion-trigger-${sid}">Title</button></div>`;
  s.canonicalCode.pagination = `<nav className="ds-pagination-${sid}"><button className="ds-page-btn-${sid} active">1</button></nav>`;
  s.canonicalCode.breadcrumbs = `<nav className="ds-breadcrumbs-${sid}"><ol><li>Home</li></ol></nav>`;
  s.canonicalCode.avatar = `<div className="ds-avatar-${sid} ds-avatar-md-${sid}">SL</div>`;

  s.variants.cards = ['default', 'interactive'];
  s.variants.menus = ['default'];
  s.variants.tables = ['default', 'sortable', 'selectable'];
  s.variants.alerts = ['info', 'success', 'error'];
  s.variants.toasts = ['default'];
  s.variants.badges = ['primary', 'success', 'warning', 'error', 'neutral'];
  s.variants.accordions = ['default'];
  s.variants.paginations = ['default'];
  s.variants.breadcrumbs = ['default'];
  s.variants.avatars = ['small', 'medium', 'large', 'group'];

  // CSS definitions for Phase 3 components
  const font = s.tokens.fontFamily;
  const radius = s.tokens.borderRadius;
  const primary = s.tokens.primaryColor;
  const focus = s.tokens.focusStyle;

  cssChunks.push(`
/* ----- ${s.name} Phase 3 Components (${sid}) ----- */
/* Card */
.ds-card-${sid} {
  font-family: ${font};
  background: var(--bg-surface, #ffffff);
  border-radius: ${radius};
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.15s ease;
}
.ds-card-interactive-${sid}:hover {
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
  border-color: ${primary};
  transform: translateY(-1px);
}
.ds-card-interactive-${sid}.selected {
  border-color: ${primary};
  box-shadow: 0 0 0 2px ${primary};
}
.ds-card-interactive-${sid}:focus-visible {
  box-shadow: ${focus};
  outline: none;
}
.ds-card-header-${sid} { display: flex; flex-direction: column; gap: 4px; }
.ds-card-title-${sid} { font-weight: 700; font-size: 15px; color: var(--fg-default); }
.ds-card-subtitle-${sid} { font-size: 12px; color: var(--fg-muted); }
.ds-card-body-${sid} { color: var(--fg-default); flex: 1; }
.ds-card-footer-${sid} { padding-top: 10px; border-top: 1px solid var(--border-subtle, #f3f4f6); }

/* Dropdown Menu */
.ds-menu-popup-${sid} {
  font-family: ${font};
  background: var(--bg-surface, #ffffff);
  border-radius: ${radius};
  border: 1px solid var(--border-color, #e5e7eb);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ds-menu-item-${sid} {
  font-family: ${font};
  font-size: 13px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: max(2px, calc(${radius} - 2px));
  text-align: left;
  cursor: pointer;
  color: var(--fg-default);
  transition: background 0.1s ease;
  width: 100%;
}
.ds-menu-item-${sid}:hover, .ds-menu-item-${sid}:focus {
  background: var(--accent-subtle, rgba(0,0,0,0.05));
  outline: none;
}
.ds-menu-item-${sid}.danger {
  color: #dc2626;
}
.ds-menu-item-${sid}.danger:hover {
  background: #fef2f2;
}
.ds-menu-divider-${sid} {
  background: var(--border-subtle, #e5e7eb);
}

/* Table */
.ds-table-wrapper-${sid} {
  border-radius: ${radius};
  border: 1px solid var(--border-color, #e5e7eb);
  overflow: hidden;
}
.ds-table-${sid} {
  font-family: ${font};
  font-size: 13px;
  width: 100%;
}
.ds-th-${sid} {
  background: var(--bg-subtle, #f9fafb);
  color: var(--fg-muted);
  font-weight: 600;
  text-align: left;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border-color, #e5e7eb);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.ds-td-${sid} {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border-subtle, #f3f4f6);
  color: var(--fg-default);
}
.ds-tr-${sid}:last-child .ds-td-${sid} {
  border-bottom: none;
}
.ds-tr-${sid}:hover {
  background: var(--bg-subtle, #f9fafb);
}
.ds-tr-${sid}.selected {
  background: var(--accent-subtle, rgba(37,99,235,0.06));
}

/* Alert */
.ds-alert-${sid} {
  font-family: ${font};
  border-radius: ${radius};
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  border: 1px solid transparent;
  font-size: 13px;
}
.ds-alert-${sid}-info {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #1e40af;
}
.ds-alert-${sid}-success {
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #166534;
}
.ds-alert-${sid}-error {
  background: #fef2f2;
  border-color: #fecaca;
  color: #991b1b;
}
.ds-alert-title-${sid} {
  font-weight: 700;
  margin-bottom: 2px;
}
.ds-alert-desc-${sid} {
  font-size: 12px;
  opacity: 0.9;
}
.ds-alert-close-${sid} {
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  padding: 0;
  line-height: 1;
}
.ds-alert-close-${sid}:hover { opacity: 1; }

/* Toast */
.ds-toast-${sid} {
  font-family: ${font};
  background: #1f2937;
  color: #ffffff;
  border-radius: ${radius};
  padding: 10px 16px;
  font-size: 13px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  border: 1px solid #374151;
}
.ds-toast-close-${sid} {
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  opacity: 0.8;
  font-size: 14px;
}
.ds-toast-close-${sid}:hover { opacity: 1; }

/* Badge, Tag & Chip */
.ds-badge-${sid} {
  font-family: ${font};
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: ${radius === '0px' ? '0px' : '9999px'};
  display: inline-flex;
  align-items: center;
  line-height: 1.2;
}
.ds-badge-${sid}-primary { background: ${primary}; color: #ffffff; }
.ds-badge-${sid}-success { background: #dcfce7; color: #166534; }
.ds-badge-${sid}-warning { background: #fef3c7; color: #92400e; }
.ds-badge-${sid}-error { background: #fee2e2; color: #991b1b; }
.ds-badge-${sid}-neutral { background: var(--bg-subtle, #f3f4f6); color: var(--fg-default, #374151); border: 1px solid var(--border-color, #e5e7eb); }
.ds-badge-count-${sid} {
  font-family: ${font};
  font-size: 11px;
  font-weight: 700;
  background: #ef4444;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 9999px;
  display: inline-block;
}
.ds-chip-${sid} {
  font-family: ${font};
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: ${radius === '0px' ? '0px' : '9999px'};
  border: 1px solid var(--border-color, #d1d5db);
  background: var(--bg-surface, #ffffff);
  color: var(--fg-default);
  cursor: pointer;
  transition: all 0.15s ease;
}
.ds-chip-${sid}.active {
  background: ${primary};
  border-color: ${primary};
  color: #ffffff;
}
.ds-chip-${sid}:focus-visible { box-shadow: ${focus}; outline: none; }
.ds-tag-${sid} {
  font-family: ${font};
  font-size: 12px;
  padding: 4px 10px;
  background: var(--bg-subtle, #f3f4f6);
  border: 1px solid var(--border-color, #e5e7eb);
  border-radius: ${radius};
  color: var(--fg-default);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ds-tag-remove-${sid} {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 0;
  color: var(--fg-muted);
}
.ds-tag-remove-${sid}:hover { color: #dc2626; }

/* Accordion */
.ds-accordion-${sid} {
  border-radius: ${radius};
  border: 1px solid var(--border-color, #e5e7eb);
  overflow: hidden;
}
.ds-accordion-item-${sid} {
  border-bottom: 1px solid var(--border-color, #e5e7eb);
}
.ds-accordion-item-${sid}:last-child {
  border-bottom: none;
}
.ds-accordion-trigger-${sid} {
  font-family: ${font};
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--fg-default);
  transition: background 0.15s ease;
}
.ds-accordion-trigger-${sid}:hover {
  background: var(--bg-subtle, #f9fafb);
}
.ds-accordion-trigger-${sid}:focus-visible {
  box-shadow: ${focus};
  outline: none;
}
.ds-accordion-chevron-${sid} {
  font-size: 12px;
  transition: transform 0.2s ease;
  display: inline-block;
}
.ds-accordion-chevron-${sid}.rotated {
  transform: rotate(180deg);
}
.ds-accordion-panel-${sid} {
  font-family: ${font};
  padding: 0 16px 14px;
  color: var(--fg-muted);
}

/* Pagination */
.ds-pagination-${sid} {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}
.ds-page-btn-${sid} {
  font-family: ${font};
  font-size: 13px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: ${radius};
  border: 1px solid var(--border-color, #d1d5db);
  background: var(--bg-surface, #ffffff);
  color: var(--fg-default);
  cursor: pointer;
  transition: all 0.15s ease;
}
.ds-page-btn-${sid}:hover:not(:disabled) {
  border-color: ${primary};
  color: ${primary};
}
.ds-page-btn-${sid}.active {
  background: ${primary};
  border-color: ${primary};
  color: #ffffff;
  font-weight: 700;
}
.ds-page-btn-${sid}:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.ds-page-btn-${sid}:focus-visible {
  box-shadow: ${focus};
  outline: none;
}

/* Breadcrumbs */
.ds-breadcrumbs-${sid} { font-family: ${font}; font-size: 13px; }
.ds-breadcrumb-link-${sid} {
  color: ${primary};
  text-decoration: none;
  font-weight: 500;
}
.ds-breadcrumb-link-${sid}:hover { text-decoration: underline; }
.ds-breadcrumb-separator-${sid} { color: var(--fg-muted, #9ca3af); }
.ds-breadcrumb-current-${sid} { color: var(--fg-default); font-weight: 600; }

/* Avatar */
.ds-avatar-wrapper-${sid} { position: relative; display: inline-block; }
.ds-avatar-${sid} {
  font-family: ${font};
  background: ${primary};
  color: #ffffff;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  user-select: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 2px solid var(--bg-surface, #ffffff);
}
.ds-avatar-sm-${sid} { width: 28px; height: 28px; font-size: 11px; }
.ds-avatar-md-${sid} { width: 38px; height: 38px; font-size: 14px; }
.ds-avatar-lg-${sid} { width: 48px; height: 48px; font-size: 17px; }
.ds-avatar-${sid}.square { border-radius: ${radius}; }
.ds-avatar-${sid}.more { background: var(--bg-subtle, #e5e7eb); color: var(--fg-muted, #4b5563); }
.ds-avatar-status-${sid} {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--bg-surface, #ffffff);
}
.ds-avatar-status-${sid}.online { background-color: #22c55e; }
.ds-avatar-status-${sid}.busy { background-color: #ef4444; }
`);
}

// Write updated data.ts
console.log('Writing updated data.ts with Phase 3 components and variants...');
const updatedDataTs = `import { DesignSystemMeta } from '../types.ts';\n\nexport const DESIGN_SYSTEMS: DesignSystemMeta[] = ${JSON.stringify(systems, null, 2)};\n`;
fs.writeFileSync(DATA_FILE, updatedDataTs);

// Write updated design-systems.css
console.log('Writing updated design-systems.css...');
fs.writeFileSync(STYLES_FILE, cssChunks.join('\n'));

console.log('Phase 3 generation completed successfully across all 130 design systems!');
