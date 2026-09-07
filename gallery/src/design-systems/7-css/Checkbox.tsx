import React, { useState } from 'react';

export const Checkbox: React.FC = () => {
  const [agree, setAgree] = useState(true);
  const [telemetry, setTelemetry] = useState(false);

  return (
    <div className="ds-7-css" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <label className="ds-label-7-css">Permissions &amp; Features</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-7-css"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
          <span>Enable automated rollback on healthcheck failure</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-7-css"
            checked={telemetry}
            onChange={e => setTelemetry(e.target.checked)}
          />
          <span>Export real-time audit logs to telemetry lake</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed', fontSize: '14px', opacity: 0.5 }}>
          <input
            type="checkbox"
            className="ds-checkbox-7-css"
            checked
            disabled
          />
          <span>Mandatory encryption at rest (AES-256)</span>
        </label>
      </div>
    </div>
  );
};
