import React, { useState } from 'react';

export const Badge: React.FC = () => {
  const [tags, setTags] = useState(['Frontend', 'React 19', 'TypeScript', 'WCAG AA']);
  const [selectedChip, setSelectedChip] = useState('All');

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const chips = ['All', 'Compute', 'Storage', 'Network'];

  return (
    <div className="ds-polaris" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Status &amp; Count Badges
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="ds-badge-polaris ds-badge-polaris-primary">Active</span>
          <span className="ds-badge-polaris ds-badge-polaris-success">Healthy</span>
          <span className="ds-badge-polaris ds-badge-polaris-warning">Pending</span>
          <span className="ds-badge-polaris ds-badge-polaris-error">High Priority</span>
          <span className="ds-badge-polaris ds-badge-polaris-neutral">v2.4.0</span>
          <span className="ds-badge-count-polaris">14</span>
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
              className={`ds-chip-polaris ${selectedChip === chip ? 'active' : ''}`}
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
            <span key={tag} className="ds-tag-polaris">
              <span>{tag}</span>
              <button
                type="button"
                className="ds-tag-remove-polaris"
                onClick={() => removeTag(tag)}
                aria-label={`Remove ${tag} tag`}
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
