import React, { useState } from 'react';

export const Tooltip: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="ds-bbc-gel" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', padding: '16px 0' }}>
      <div className="ds-tooltip-wrapper-bbc-gel">
        <button
          type="button"
          className="ds-btn-bbc-gel ds-btn-bbc-gel-secondary"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onFocus={() => setVisible(true)}
          onBlur={() => setVisible(false)}
        >
          Hover or Focus Me
        </button>

        <div className={`ds-tooltip-bubble-bbc-gel ${visible ? 'visible' : ''}`} role="tooltip">
          Security verified: SOC2 AA &amp; ISO 27001
          <span className="ds-tooltip-arrow-bbc-gel" />
        </div>
      </div>

      <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
        Supports mouse hover and keyboard focus states with system-specific tooltip styling.
      </div>
    </div>
  );
};
