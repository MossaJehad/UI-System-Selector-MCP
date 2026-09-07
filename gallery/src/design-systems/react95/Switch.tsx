import React, { useState } from 'react';

export const Switch: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  return (
    <div className="ds-react95" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <label className="ds-label-react95">Service Settings</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            className={`ds-switch-track-react95 ${enabled ? 'checked' : ''}`}
            onClick={() => setEnabled(!enabled)}
          >
            <span className={`ds-switch-thumb-react95 ${enabled ? 'checked' : ''}`} />
          </button>
          <span style={{ fontSize: '14px' }}>
            Production traffic routing: <strong>{enabled ? 'Active' : 'Paused'}</strong>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            role="switch"
            aria-checked={maintenance}
            className={`ds-switch-track-react95 ${maintenance ? 'checked' : ''}`}
            onClick={() => setMaintenance(!maintenance)}
          >
            <span className={`ds-switch-thumb-react95 ${maintenance ? 'checked' : ''}`} />
          </button>
          <span style={{ fontSize: '14px' }}>
            Maintenance mode: <strong>{maintenance ? 'Enabled' : 'Disabled'}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
