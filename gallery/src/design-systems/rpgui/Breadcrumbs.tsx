import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        Classic 16-bit RPG video game interfaces do not include hierarchical web breadcrumbs.
      </p>
      <a href="https://ronenness.github.io/rpgui/" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
