import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        The Australian Government design system avoids user profile avatars in civic portals to maintain public accessibility and identity verification neutrality.
      </p>
      <a href="https://gold.designsystemau.org" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
