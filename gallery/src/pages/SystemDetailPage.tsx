import React, { useState } from 'react';
import { DesignSystemEntry, ComponentCategory } from '../types.ts';

interface SystemDetailPageProps {
  systemId: string;
  entries: DesignSystemEntry[];
}

export const SystemDetailPage: React.FC<SystemDetailPageProps> = ({
  systemId,
  entries,
}) => {
  const currentIndex = entries.findIndex(e => e.meta.id === systemId);
  const entry = entries[currentIndex] || entries[0];
  const { meta, components } = entry;

  const prevEntry =
    currentIndex > 0 ? entries[currentIndex - 1] : entries[entries.length - 1];
  const nextEntry =
    currentIndex < entries.length - 1 ? entries[currentIndex + 1] : entries[0];

  const [activeCodeTab, setActiveCodeTab] = useState<ComponentCategory>('button');

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <a
          href="#/"
          style={{
            fontSize: '13px',
            color: 'var(--fg-muted)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ← Back to All Systems
        </a>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={`#/systems/${prevEntry.meta.id}`}
            style={{
              fontSize: '13px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              color: 'var(--fg-muted)',
            }}
          >
            ← {prevEntry.meta.name}
          </a>
          <a
            href={`#/systems/${nextEntry.meta.id}`}
            style={{
              fontSize: '13px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              color: 'var(--fg-muted)',
            }}
          >
            {nextEntry.meta.name} →
          </a>
        </div>
      </div>

      <div className="system-detail-header">
        <div className="detail-title-row">
          <div>
            <h1 className="detail-system-name" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                className="color-swatch"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  backgroundColor: meta.tokens.primaryColor,
                }}
              />
              <span>{meta.name}</span>
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span className="brand-badge">{meta.categoryLabel}</span>
            <a
              href={meta.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle-btn"
              style={{ textDecoration: 'none' }}
            >
              Official Docs ↗
            </a>
            {meta.repoUrl && (
              <a
                href={meta.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-toggle-btn"
                style={{ textDecoration: 'none' }}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <div className="detail-meta-row">
          <span>Organization: <strong>{meta.organization}</strong></span>
          <span>•</span>
          <span>Category: <strong>{meta.categoryLabel}</strong></span>
        </div>

        <p className="detail-description">{meta.description}</p>
        <div style={{ fontStyle: 'italic', color: 'var(--fg-muted)', marginBottom: '16px', fontSize: '14px' }}>
          <strong>Aesthetic Guidelines:</strong> {meta.aestheticNotes}
        </div>

        <div className="tokens-bar">
          <div className="token-item">
            <span className="token-label">Primary Brand</span>
            <span className="token-value">
              <span
                className="color-swatch"
                style={{ backgroundColor: meta.tokens.primaryColor }}
              />
              {meta.tokens.primaryColor}
            </span>
          </div>

          <div className="token-item">
            <span className="token-label">Corner Radius</span>
            <span className="token-value">{meta.tokens.borderRadius}</span>
          </div>

          <div className="token-item">
            <span className="token-label">Standard Height</span>
            <span className="token-value">{meta.tokens.controlHeight}</span>
          </div>

          <div className="token-item">
            <span className="token-label">Font Family</span>
            <span className="token-value" style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {meta.tokens.fontFamily}
            </span>
          </div>

          <div className="token-item">
            <span className="token-label">Focus Treatment</span>
            <span className="token-value" style={{ fontSize: '11px' }}>{meta.tokens.focusStyle}</span>
          </div>
        </div>
      </div>

      {/* Component Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Buttons */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>1. Button Components</h2>
              <span className="org-tag">Variants: {meta.variants.buttons.join(', ')}</span>
            </div>
          </div>
          <div className="card-body">
            <components.Button />
          </div>
        </section>

        {/* Inputs */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>2. Input Fields</h2>
              <span className="org-tag">Default, Filled, Error & Disabled States</span>
            </div>
          </div>
          <div className="card-body">
            <components.Input />
          </div>
        </section>

        {/* Selects */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>3. Select Dropdowns</h2>
              <span className="org-tag">Interactive HTML Select & Validation</span>
            </div>
          </div>
          <div className="card-body">
            <components.Select />
          </div>
        </section>

        {/* Radio */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>4. Radio Buttons</h2>
              <span className="org-tag">Radio Group & Checked/Disabled States</span>
            </div>
          </div>
          <div className="card-body">
            <components.Radio />
          </div>
        </section>

        {/* Checkbox */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>5. Checkbox Components</h2>
              <span className="org-tag">Single Consent, Group Select, Indeterminate & Disabled</span>
            </div>
          </div>
          <div className="card-body">
            <components.Checkbox />
          </div>
        </section>

        {/* Switch / Toggle */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>6. Switch / Toggle Switches</h2>
              <span className="org-tag">Interactive Toggle Switches with Sliding Thumb Transitions</span>
            </div>
          </div>
          <div className="card-body">
            <components.Switch />
          </div>
        </section>

        {/* Textarea */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>7. Textarea Multiline Input</h2>
              <span className="org-tag">Interactive Character Counter, Placeholder, Error & Disabled</span>
            </div>
          </div>
          <div className="card-body">
            <components.Textarea />
          </div>
        </section>

        {/* Tabs */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>8. Tabs Navigation</h2>
              <span className="org-tag">Accessible Tab Panels & Arrow Navigation</span>
            </div>
          </div>
          <div className="card-body">
            <components.Tabs />
          </div>
        </section>

        {/* Dialog / Modal */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>9. Dialog / Modal Windows</h2>
              <span className="org-tag">Interactive Surface with Backdrop & Keyboard Dismissal (Esc)</span>
            </div>
          </div>
          <div className="card-body">
            <components.Dialog />
          </div>
        </section>

        {/* Tooltip */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>10. Tooltip Overlays</h2>
              <span className="org-tag">Mouse Hover & Keyboard Focus Bubble with Pointer</span>
            </div>
          </div>
          <div className="card-body">
            <components.Tooltip />
          </div>
        </section>

        {/* Canonical Code */}
        <section className="component-card">
          <div className="card-header">
            <div className="card-header-left">
              <h2 style={{ fontSize: '16px', fontWeight: 700 }}>Canonical Component API</h2>
              <span className="org-tag">Official implementation code for {meta.name}</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {([
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
              ] as const).map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveCodeTab(tab)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: '1px solid var(--border-color)',
                    backgroundColor: activeCodeTab === tab ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    color: activeCodeTab === tab ? '#ffffff' : 'var(--fg-default)',
                    cursor: 'pointer',
                  }}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="card-body">
            <div className="code-box" style={{ marginTop: 0 }}>
              <code>
                {meta.canonicalCode[activeCodeTab]}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
