import React, { useState } from 'react';

export const Switch: React.FC = () => {
  const [backupOn, setBackupOn] = useState(true);
  const [debugOn, setDebugOn] = useState(false);

  return (
    <div className="ds-morningstar" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Automated Daily Backups</div>
            <div className="ds-helper-morningstar" style={{ marginTop: '2px' }}>Snapshots taken nightly at 02:00 UTC</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={backupOn}
            className={`ds-switch-track-morningstar ${backupOn ? 'checked' : ''}`}
            onClick={() => setBackupOn(!backupOn)}
          >
            <span className={`ds-switch-thumb-morningstar ${backupOn ? 'checked' : ''}`} />
          </button>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '420px', cursor: 'pointer' }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Developer Debug Mode</div>
            <div className="ds-helper-morningstar" style={{ marginTop: '2px' }}>Streams detailed payload telemetry to client</div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={debugOn}
            className={`ds-switch-track-morningstar ${debugOn ? 'checked' : ''}`}
            onClick={() => setDebugOn(!debugOn)}
          >
            <span className={`ds-switch-thumb-morningstar ${debugOn ? 'checked' : ''}`} />
          </button>
        </label>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          States Overview
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-morningstar checked" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-morningstar checked" />
            </span>
            <span>On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span className="ds-switch-track-morningstar" style={{ cursor: 'default' }}>
              <span className="ds-switch-thumb-morningstar" />
            </span>
            <span>Off</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-morningstar checked disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-morningstar checked" />
            </span>
            <span>Disabled On</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', opacity: 0.5 }}>
            <span className="ds-switch-track-morningstar disabled" style={{ cursor: 'not-allowed' }}>
              <span className="ds-switch-thumb-morningstar" />
            </span>
            <span>Disabled Off</span>
          </div>
        </div>
      </div>
    </div>
  );
};
