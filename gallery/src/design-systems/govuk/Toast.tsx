import React from 'react';

export const Toast: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        GOV.UK explicitly discourages transient toasts/snackbars because auto-dismissing content violates WCAG 2.2 accessibility standards for screen readers and users with cognitive impairments. Persistent notification banners or error summaries must be used instead.
      </p>
      <a href="https://design-system.service.gov.uk" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
