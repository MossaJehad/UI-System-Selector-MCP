import React from 'react';

export const Accordion: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        Classic C64 screen modes do not support expandable interactive accordion disclosure widgets.
      </p>
      <a href="https://github.com/c64-css/c64-css" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
