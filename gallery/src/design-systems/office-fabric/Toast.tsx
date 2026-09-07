import React, { useState, useEffect } from 'react';

export const Toast: React.FC = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (!toastOpen) return;
    const timer = setTimeout(() => {
      setToastOpen(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toastOpen, counter]);

  const triggerToast = () => {
    setCounter(c => c + 1);
    setToastOpen(true);
  };

  return (
    <div className="ds-office-fabric" style={{ padding: '8px 0', minHeight: '80px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <button
          type="button"
          className="ds-btn-office-fabric ds-btn-office-fabric-primary"
          onClick={triggerToast}
        >
          Save Changes ({counter})
        </button>
        <span style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
          Click to trigger an auto-dismissing toast notification (4s)
        </span>
      </div>

      {toastOpen && (
        <div
          className="ds-toast-office-fabric"
          role="status"
          aria-live="polite"
          style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <span className="ds-toast-content-office-fabric">
            ✓ Settings saved successfully. Node #{counter} configuration synchronized.
          </span>
          <button
            type="button"
            className="ds-toast-close-office-fabric"
            onClick={() => setToastOpen(false)}
            aria-label="Dismiss toast"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
