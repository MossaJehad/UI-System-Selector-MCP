import React, { useState } from 'react';

export const Alert: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const allDismissed = !showInfo && !showSuccess && !showError;

  return (
    <div className="ds-codex" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {showInfo && (
        <div className="ds-alert-codex ds-alert-codex-info" role="status">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-codex">System Maintenance Notice</div>
            <div className="ds-alert-desc-codex">Scheduled database index optimization in 48 hours. Zero downtime anticipated.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-codex"
            onClick={() => setShowInfo(false)}
            aria-label="Dismiss notice"
          >
            ✕
          </button>
        </div>
      )}

      {showSuccess && (
        <div className="ds-alert-codex ds-alert-codex-success" role="alert">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-codex">Deployment Successful</div>
            <div className="ds-alert-desc-codex">Cluster alpha-01 updated to v2.4.1. All 16 containers healthy.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-codex"
            onClick={() => setShowSuccess(false)}
            aria-label="Dismiss success alert"
          >
            ✕
          </button>
        </div>
      )}

      {showError && (
        <div className="ds-alert-codex ds-alert-codex-error" role="alert">
          <div style={{ flex: 1 }}>
            <div className="ds-alert-title-codex">Provisioning Failed</div>
            <div className="ds-alert-desc-codex">Subnet cidr block conflict: 10.0.4.0/24 overlaps with VPC peering bridge.</div>
          </div>
          <button
            type="button"
            className="ds-alert-close-codex"
            onClick={() => setShowError(false)}
            aria-label="Dismiss error alert"
          >
            ✕
          </button>
        </div>
      )}

      {allDismissed && (
        <div style={{ textAlign: 'center', padding: '12px', fontSize: '13px', color: 'var(--fg-muted)' }}>
          All alerts dismissed.{' '}
          <button
            type="button"
            onClick={() => {
              setShowInfo(true);
              setShowSuccess(true);
              setShowError(true);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent-primary)',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Reset Alerts
          </button>
        </div>
      )}
    </div>
  );
};
