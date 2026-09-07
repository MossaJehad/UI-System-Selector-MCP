import React, { useState } from 'react';
import { DesignSystemMeta } from '../../types.ts';

interface ComponentCardProps {
  meta: DesignSystemMeta;
  componentName: string;
  canonicalSnippet: string;
  children: React.ReactNode;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  meta,
  componentName,
  canonicalSnippet,
  children,
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="component-card">
      <div className="card-header">
        <div className="card-header-left">
          <a
            href={`#/systems/${meta.id}`}
            className="system-title"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span
              className="color-swatch"
              style={{ backgroundColor: meta.tokens.primaryColor }}
            />
            <span>{meta.name}</span>
          </a>
          <span className="org-tag">by {meta.organization}</span>
          {meta.status === 'legacy' && (
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '2px 6px',
                borderRadius: '4px',
                background: '#fef3c7',
                color: '#92400e',
                border: '1px solid #fde68a',
              }}
            >
              Legacy
            </span>
          )}
          {meta.status === 'deprecated' && (
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '2px 6px',
                borderRadius: '4px',
                background: '#fee2e2',
                color: '#991b1b',
                border: '1px solid #fecaca',
              }}
            >
              Deprecated
            </span>
          )}
        </div>

        <div className="spec-pills">
          <span className="spec-badge">Radius: {meta.tokens.borderRadius}</span>
          <span className="spec-badge">Height: {meta.tokens.controlHeight}</span>
          <span className="spec-badge">{meta.categoryLabel}</span>
          <a
            href={meta.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="doc-link"
            style={{ marginLeft: '8px' }}
          >
            Docs ↗
          </a>
        </div>
      </div>

      <div className="card-body">
        {children}

        {showCode && (
          <div className="code-box">
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '4px' }}>
              Canonical Code ({meta.name} - {componentName})
            </div>
            <code>{canonicalSnippet}</code>
          </div>
        )}
      </div>

      <div className="card-footer">
        <div style={{ maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <span>{meta.aestheticNotes}</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--fg-muted)',
              cursor: 'pointer',
              fontSize: '12px',
              textDecoration: 'underline',
            }}
          >
            {showCode ? 'Hide Code' : 'View Code'}
          </button>
          <a
            href={`#/systems/${meta.id}`}
            style={{
              color: 'var(--accent-primary)',
              fontWeight: 600,
              fontSize: '12px',
            }}
          >
            View All Components →
          </a>
        </div>
      </div>
    </div>
  );
};
