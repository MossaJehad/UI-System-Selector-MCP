import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        PlayStation 1 BIOS memory card screens do not utilize web breadcrumb trails.
      </p>
      <a href="https://github.com/AisVisual/PSone.css" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
