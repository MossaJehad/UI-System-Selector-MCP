import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="ds-leafygreen" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Variants
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-leafygreen ds-btn-leafygreen-primary"
            onClick={() => setClickCount(c => c + 1)}
          >
            Primary Green {clickCount > 0 ? `(${clickCount})` : ''}
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-secondary">
            Dark Slate
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-tertiary">
            Default Outline
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-danger">
            Danger
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-primary" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Interactive States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-primary" title="Default state">
            Default
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-primary" style={{ filter: 'brightness(0.92)' }} title="Hover simulated">
            Hover State
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-primary" style={{ filter: 'brightness(0.85)', transform: 'translateY(1px)' }} title="Active / Pressed">
            Active / Pressed
          </button>
          <button type="button" className="ds-btn-leafygreen ds-btn-leafygreen-secondary" disabled>
            Secondary Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
