import React, { useState, useEffect } from 'react';

export const Dialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="ds-pajamas">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="ds-btn-pajamas ds-btn-pajamas-primary"
          onClick={() => setIsOpen(true)}
        >
          Open Modal Dialog
        </button>
        <span className="ds-helper-pajamas" style={{ marginTop: 0 }}>
          Click to trigger fully interactive modal with backdrop and keyboard dismissal (Esc)
        </span>
      </div>

      {isOpen && (
        <div
          className="ds-dialog-overlay-pajamas"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="ds-dialog-box-pajamas"
            onClick={e => e.stopPropagation()}
          >
            <div className="ds-dialog-header-pajamas">
              <span>Delete Deployment Environment?</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '16px',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  color: 'inherit',
                  borderRadius: '4px',
                }}
                title="Close"
              >
                ✕
              </button>
            </div>
            <div className="ds-dialog-body-pajamas">
              <p style={{ margin: 0 }}>
                Are you sure you want to delete this resource cluster? All associated containers, isolated subnets, and live DNS records will be permanently deprovisioned. This action cannot be undone.
              </p>
            </div>
            <div className="ds-dialog-footer-pajamas">
              <button
                type="button"
                className="ds-btn-pajamas ds-btn-pajamas-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ds-btn-pajamas ds-btn-pajamas-danger"
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
