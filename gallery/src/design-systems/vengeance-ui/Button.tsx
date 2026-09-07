import React, { useState } from 'react';

export const Button: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="ds-vengeance-ui" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Interactive Counter &amp; Variants
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            className="ds-btn-vengeance-ui ds-btn-vengeance-ui-primary"
            onClick={() => setCount(c => c + 1)}
          >
            Clicked {count} {count === 1 ? 'time' : 'times'}
          </button>
          <button type="button" className="ds-btn-vengeance-ui ds-btn-vengeance-ui-primary">
            Primary Action
          </button>
          <button type="button" className="ds-btn-vengeance-ui ds-btn-vengeance-ui-secondary">
            Secondary Action
          </button>
          <button type="button" className="ds-btn-vengeance-ui ds-btn-vengeance-ui-tertiary">
            Ghost / Outline
          </button>
          <button type="button" className="ds-btn-vengeance-ui ds-btn-vengeance-ui-danger">
            Destructive
          </button>
          <button type="button" className="ds-btn-vengeance-ui ds-btn-vengeance-ui-primary" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  );
};
