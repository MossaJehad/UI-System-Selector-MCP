import React, { useState, useEffect } from 'react';

export const Dialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <div className="ds-c64-css" style={{ padding: '8px 0' }}>
      <button
        type="button"
        className="ds-btn-c64-css ds-btn-c64-css-primary"
        onClick={() => setIsOpen(true)}
      >
        Open Confirmation Dialog
      </button>

      {isOpen && (
        <div className="ds-dialog-overlay-c64-css" onClick={() => setIsOpen(false)}>
          <div
            className="ds-dialog-box-c64-css"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="ds-dialog-header-c64-css">
              <span>Deprovision Resource Cluster</span>
              <button
                type="button"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', color: 'var(--fg-muted)' }}
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
            <div className="ds-dialog-body-c64-css">
              <p style={{ margin: 0 }}>
                Are you sure you want to delete this resource cluster? All associated containers, isolated subnets, and live DNS records will be permanently deprovisioned. This action cannot be undone.
              </p>
            </div>
            <div className="ds-dialog-footer-c64-css">
              <button
                type="button"
                className="ds-btn-c64-css ds-btn-c64-css-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ds-btn-c64-css ds-btn-c64-css-danger"
                onClick={() => setIsOpen(false)}
              >
                Delete Cluster
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
