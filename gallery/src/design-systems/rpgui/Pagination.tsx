import React from 'react';

export const Pagination: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        RPGUI game inventories use slot grids and scroll panels rather than document pagination controls.
      </p>
      <a href="https://ronenness.github.io/rpgui/" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
