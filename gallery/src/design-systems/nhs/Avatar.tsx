import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        NHS UK guidelines intentionally avoid user avatars in patient health records and clinical portals to maintain medical privacy and universal clarity.
      </p>
      <a href="https://service-manual.nhs.uk/design-system" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
