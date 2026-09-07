import React from 'react';

export const Tooltip: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        This design system avoids floating tooltip hover overlays in favor of always-visible inline helper text and accessible disclosure panels, ensuring full touch and screen-reader parity.
      </p>
      <a href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
