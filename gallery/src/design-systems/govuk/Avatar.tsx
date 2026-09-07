import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        The GOV.UK Design System deliberately omits personal user avatars to protect citizen privacy, maintain identity neutrality, and avoid decorative graphics in public service transactions.
      </p>
      <a href="https://design-system.service.gov.uk" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
