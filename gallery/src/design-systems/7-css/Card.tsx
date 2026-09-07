import React, { useState } from 'react';

export const Card: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [deployCount, setDeployCount] = useState(3);

  return (
    <div className="ds-7-css" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        className={`ds-card-7-css ds-card-interactive-7-css ${isSelected ? 'selected' : ''}`}
        onClick={() => setIsSelected(!isSelected)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsSelected(!isSelected);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="ds-card-header-7-css">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-7-css">Project Alpha</span>
            <span className="ds-badge-7-css ds-badge-7-css-primary">{isSelected ? 'Selected' : 'Active'}</span>
          </div>
          <span className="ds-card-subtitle-7-css">Last updated 2 hours ago</span>
        </div>
        <div className="ds-card-body-7-css">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Production cluster orchestrating 12 distributed services with automated health checks and blue-green deployments.
          </p>
        </div>
        <div className="ds-card-footer-7-css" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Click card or press Enter to toggle</span>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{isSelected ? '✓ In Sync' : '○ Standby'}</span>
        </div>
      </div>

      <div className="ds-card-7-css">
        <div className="ds-card-header-7-css">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-7-css">Continuous Delivery</span>
            <span style={{ fontSize: '12px', opacity: 0.7 }}>v2.4.1</span>
          </div>
          <span className="ds-card-subtitle-7-css">Automated release pipeline</span>
        </div>
        <div className="ds-card-body-7-css">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Trigger zero-downtime deployment across regional edge workers. Current active rollouts: <strong>{deployCount}</strong>.
          </p>
        </div>
        <div className="ds-card-footer-7-css">
          <button
            type="button"
            className="ds-btn-7-css ds-btn-7-css-primary"
            onClick={e => {
              e.stopPropagation();
              setDeployCount(c => c + 1);
            }}
          >
            Deploy Rollout ({deployCount})
          </button>
        </div>
      </div>
    </div>
  );
};
