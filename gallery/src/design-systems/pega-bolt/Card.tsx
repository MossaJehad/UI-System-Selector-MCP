import React, { useState } from 'react';

export const Card: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [deployCount, setDeployCount] = useState(3);

  return (
    <div className="ds-pega-bolt" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div
        tabIndex={0}
        role="button"
        aria-pressed={isSelected}
        className={`ds-card-pega-bolt ds-card-interactive-pega-bolt ${isSelected ? 'selected' : ''}`}
        onClick={() => setIsSelected(!isSelected)}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsSelected(!isSelected);
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="ds-card-header-pega-bolt">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-pega-bolt">Project Alpha</span>
            <span className="ds-badge-pega-bolt ds-badge-pega-bolt-primary">{isSelected ? 'Selected' : 'Active'}</span>
          </div>
          <span className="ds-card-subtitle-pega-bolt">Last updated 2 hours ago</span>
        </div>
        <div className="ds-card-body-pega-bolt">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Production cluster orchestrating 12 distributed services with automated health checks and blue-green deployments.
          </p>
        </div>
        <div className="ds-card-footer-pega-bolt" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Click card or press Enter to toggle</span>
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{isSelected ? '✓ In Sync' : '○ Standby'}</span>
        </div>
      </div>

      <div className="ds-card-pega-bolt">
        <div className="ds-card-header-pega-bolt">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="ds-card-title-pega-bolt">Continuous Delivery</span>
            <span style={{ fontSize: '12px', opacity: 0.7 }}>v2.4.1</span>
          </div>
          <span className="ds-card-subtitle-pega-bolt">Automated release pipeline</span>
        </div>
        <div className="ds-card-body-pega-bolt">
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5 }}>
            Trigger zero-downtime deployment across regional edge workers. Current active rollouts: <strong>{deployCount}</strong>.
          </p>
        </div>
        <div className="ds-card-footer-pega-bolt">
          <button
            type="button"
            className="ds-btn-pega-bolt ds-btn-pega-bolt-primary"
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
