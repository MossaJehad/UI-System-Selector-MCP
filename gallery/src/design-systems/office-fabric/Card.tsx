import React, { useState } from 'react';

export const Card: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [deployCount, setDeployCount] = useState(3);

  return (
    <div className="ds-office-fabric" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        className={`ds-card-office-fabric ds-card-interactive-office-fabric ${isSelected ? 'selected' : ''}`}
        onClick={() => setIsSelected(!isSelected)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsSelected(!isSelected);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="ds-card-header-office-fabric">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-office-fabric">Project Alpha</span>
            <span className="ds-badge-office-fabric ds-badge-office-fabric-primary">{isSelected ? 'Selected' : 'Active'}</span>
          </div>
          <span className="ds-card-subtitle-office-fabric">Last updated 2 hours ago</span>
        </div>
        <div className="ds-card-body-office-fabric">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Production cluster orchestrating 12 distributed services with automated health checks and blue-green deployments.
          </p>
        </div>
        <div className="ds-card-footer-office-fabric" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Click card or press Enter to toggle</span>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{isSelected ? '✓ In Sync' : '○ Standby'}</span>
        </div>
      </div>

      <div className="ds-card-office-fabric">
        <div className="ds-card-header-office-fabric">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-office-fabric">Continuous Delivery</span>
            <span style={{ fontSize: '12px', opacity: 0.7 }}>v2.4.1</span>
          </div>
          <span className="ds-card-subtitle-office-fabric">Automated release pipeline</span>
        </div>
        <div className="ds-card-body-office-fabric">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Trigger zero-downtime deployment across regional edge workers. Current active rollouts: <strong>{deployCount}</strong>.
          </p>
        </div>
        <div className="ds-card-footer-office-fabric">
          <button
            type="button"
            className="ds-btn-office-fabric ds-btn-office-fabric-primary"
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
