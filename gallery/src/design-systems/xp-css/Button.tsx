import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="ds-xp-css" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Interactive Counter &amp; Variants
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-xp-css ds-btn-xp-css-primary"
            onClick={() => setCount(c => c + 1)}
          >
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <button type="button" className="ds-btn-xp-css ds-btn-xp-css-primary">
            Primary Action
          </button>
          <button type="button" className="ds-btn-xp-css ds-btn-xp-css-secondary">
            Secondary Action
          </button>
          <button type="button" className="ds-btn-xp-css ds-btn-xp-css-tertiary">
            Ghost / Outline
          </button>
          <button type="button" className="ds-btn-xp-css ds-btn-xp-css-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-xp-css ds-btn-xp-css-primary" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
