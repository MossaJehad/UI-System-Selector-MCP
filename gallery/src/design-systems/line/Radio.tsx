import React, { useState } from 'react';

export const Radio: React.FC = () => {
  const [plan, setPlan] = useState('pro');

  return (
    <div className="ds-line" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label className="ds-label-line">Interactive Radio Group</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-line"
              className="ds-radio-line"
              checked={plan === 'starter'}
              onChange={() => setPlan('starter')}
            />
            <span>Starter Plan (1 Node, 4GB RAM)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-line"
              className="ds-radio-line"
              checked={plan === 'pro'}
              onChange={() => setPlan('pro')}
            />
            <span>Pro Plan (3 Nodes, High Availability)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="radio"
              name="plan-line"
              className="ds-radio-line"
              checked={plan === 'enterprise'}
              onChange={() => setPlan('enterprise')}
            />
            <span>Enterprise Dedicated Cluster (Multi-Region)</span>
          </label>
        </div>
        <span className="ds-helper-line">Active selection: <strong>{plan.toUpperCase()}</strong></span>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          Radio States
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="radio" className="ds-radio-line" defaultChecked name="state-demo-line" />
            <span>Selected</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="radio" className="ds-radio-line" name="state-demo-line" />
            <span>Unselected</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.6 }}>
            <input type="radio" className="ds-radio-line" disabled />
            <span>Disabled Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.6 }}>
            <input type="radio" className="ds-radio-line" checked readOnly disabled />
            <span>Disabled Checked</span>
          </label>
        </div>
      </div>
    </div>
  );
};
