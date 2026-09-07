import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="ds-radix" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Variants
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-radix ds-btn-radix-primary"
            onClick={() => setClickCount(c => c + 1)}
          >
            Solid {clickCount > 0 ? `(${clickCount})` : ''}
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-secondary">
            Soft
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-tertiary">
            Surface
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-danger">
            Outline
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-primary" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Interactive States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button type="button" className="ds-btn-radix ds-btn-radix-primary" title="Default state">
            Default
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-primary" style={{ filter: 'brightness(0.92)' }} title="Hover simulated">
            Hover State
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-primary" style={{ filter: 'brightness(0.85)', transform: 'translateY(1px)' }} title="Active / Pressed">
            Active / Pressed
          </button>
          <button type="button" className="ds-btn-radix ds-btn-radix-secondary" disabled>
            Secondary Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
