import React from 'react';

export const Toast: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        NHS digital service standards require all health alerts, confirmations, and warnings to remain persistently visible on screen.
      </p>
      <a href="https://service-manual.nhs.uk/design-system" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
