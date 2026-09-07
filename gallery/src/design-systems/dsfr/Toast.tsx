import React from 'react';

export const Toast: React.FC = () => {
  return (
    <div className="ds-unsupported-card">
      <div className="ds-unsupported-card-title">
        Component Not Documented / Omitted by Design
      </div>
      <p className="ds-unsupported-card-desc">
        Le Système de Design de l’État français (DSFR) proscrit les toasts éphémères au profit d’alertes persistantes et accessibles.
      </p>
      <a href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noopener noreferrer" className="ds-unsupported-card-link">
        Consult Official Documentation →
      </a>
    </div>
  );
};
