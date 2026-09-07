import React from 'react';

export const Switch: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        This design system intentionally omits the Switch / Toggle component in its official specification, recommending standard radio buttons or checkboxes for clearer accessibility and cognitive clarity.
      </p>
      <a href="https://boltdesignsystem.com" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
