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
    <div className="ds-priceline-one">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="ds-btn-priceline-one ds-btn-priceline-one-primary"
          onClick={() => setIsOpen(true)}
        >
          Open Modal Dialog
        </button>
        <span className="ds-helper-priceline-one" style={{ marginTop: 0 }}>
          Click to trigger fully interactive modal with backdrop and keyboard dismissal (Esc)
        </span>
      </div>

      {isOpen && (
        <div
          className="ds-dialog-overlay-priceline-one"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="ds-dialog-box-priceline-one"
            onClick={e => e.stopPropagation()}
          >
            <div className="ds-dialog-header-priceline-one">
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
            <div className="ds-dialog-body-priceline-one">
              <p style={{ margin: 0 }}>
                Are you sure you want to delete this resource cluster? All associated containers, isolated subnets, and live DNS records will be permanently deprovisioned. This action cannot be undone.
              </p>
            </div>
            <div className="ds-dialog-footer-priceline-one">
              <button
                type="button"
                className="ds-btn-priceline-one ds-btn-priceline-one-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="ds-btn-priceline-one ds-btn-priceline-one-danger"
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
