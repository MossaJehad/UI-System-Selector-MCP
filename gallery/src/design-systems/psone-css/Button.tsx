import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="ds-psone-css" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Interactive Counter &amp; Variants
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-psone-css ds-btn-psone-css-primary"
            onClick={() => setCount(c => c + 1)}
          >
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <button type="button" className="ds-btn-psone-css ds-btn-psone-css-primary">
            Primary Action
          </button>
          <button type="button" className="ds-btn-psone-css ds-btn-psone-css-secondary">
            Secondary Action
          </button>
          <button type="button" className="ds-btn-psone-css ds-btn-psone-css-tertiary">
            Ghost / Outline
          </button>
          <button type="button" className="ds-btn-psone-css ds-btn-psone-css-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-psone-css ds-btn-psone-css-primary" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
