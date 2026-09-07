import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="ds-salesforce" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Variants
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-salesforce ds-btn-salesforce-primary"
            onClick={() => setClickCount(c => c + 1)}
          >
            Brand {clickCount > 0 ? `(${clickCount})` : ''}
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-secondary">
            Neutral
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-tertiary">
            Outline-Brand
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-primary" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Interactive States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-primary" title="Default state">
            Default
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-primary" style={{ filter: 'brightness(0.92)' }} title="Hover simulated">
            Hover State
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-primary" style={{ filter: 'brightness(0.85)', transform: 'translateY(1px)' }} title="Active / Pressed">
            Active / Pressed
          </button>
          <button type="button" className="ds-btn-salesforce ds-btn-salesforce-secondary" disabled>
            Secondary Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
