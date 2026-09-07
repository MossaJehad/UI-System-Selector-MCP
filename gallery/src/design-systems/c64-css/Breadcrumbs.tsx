import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        The Commodore 64 8-bit command prompt operates in a single flat memory model without hierarchical breadcrumb navigation.
      </p>
      <a href="https://github.com/c64-css/c64-css" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
