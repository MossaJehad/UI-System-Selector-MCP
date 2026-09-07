import React from 'react';

export const Toast: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        Wikimedia Codex uses persistent inline Message boxes for critical notifications rather than auto-dismissing snackbars.
      </p>
      <a href="https://doc.wikimedia.org/codex/main/" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
