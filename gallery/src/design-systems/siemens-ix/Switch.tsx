import React, { useState } from 'react';

export const Switch: React.FC = () => {
  const [backupOn, setBackupOn] = useState(true);
  const [debugOn, setDebugOn] = useState(false);

  return (
    <div className="ds-siemens-ix" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Automated Daily Backups</div>
            <div className="ds-helper-siemens-ix" style={{ marginTop: '2px' }}>Snapshots taken nightly at 02:00 UTC</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={backupOn}
            className={`ds-switch-track-siemens-ix ${backupOn ? 'checked' : ''}`}
            onClick={() => setBackupOn(!backupOn)}
          >
            <span className={`ds-switch-thumb-siemens-ix ${backupOn ? 'checked' : ''}`} />
          </button>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Developer Debug Mode</div>
            <div className="ds-helper-siemens-ix" style={{ marginTop: '2px' }}>Streams detailed payload telemetry to client</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={debugOn}
            className={`ds-switch-track-siemens-ix ${debugOn ? 'checked' : ''}`}
            onClick={() => setDebugOn(!debugOn)}
          >
            <span className={`ds-switch-thumb-siemens-ix ${debugOn ? 'checked' : ''}`} />
          </button>
        </label>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          States Overview
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-siemens-ix checked" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-siemens-ix checked" />
            </span>
            <span>On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-siemens-ix" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-siemens-ix" />
            </span>
            <span>Off</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-siemens-ix checked disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-siemens-ix checked" />
            </span>
            <span>Disabled On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-siemens-ix disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-siemens-ix" />
            </span>
            <span>Disabled Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};
