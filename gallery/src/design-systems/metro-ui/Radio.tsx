import React, { useState } from 'react';

export const Radio: React.FC = () => {
  const [tier, setTier] = useState('pro');

  return (
    <div className="ds-metro-ui" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <label className="ds-label-metro-ui">Deployment Tier</label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="radio"
            name="tier-metro-ui"
            className="ds-radio-metro-ui"
            checked={tier === 'starter'}
            onChange={() => setTier('starter')}
          />
          <span>Starter (Single node)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px' }}>
          <input
            type="radio"
            name="tier-metro-ui"
            className="ds-radio-metro-ui"
            checked={tier === 'pro'}
            onChange={() => setTier('pro')}
          />
          <span>Professional (High availability cluster)</span>
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'not-allowed', fontSize: '14px', opacity: 0.6 }}>
          <input
            type="radio"
            name="tier-metro-ui"
            className="ds-radio-metro-ui"
            disabled
          />
          <span>Enterprise Dedicated (Requires contact)</span>
        </label>
      </div>
    </div>
  );
};
