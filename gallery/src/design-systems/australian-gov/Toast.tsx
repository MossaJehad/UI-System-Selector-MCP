import React from 'react';

export const Toast: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        Transient alerts and auto-dismissing toasts are prohibited under Australian Government accessibility guidelines in favor of persistent inline notices.
      </p>
      <a href="https://gold.designsystemau.org" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
