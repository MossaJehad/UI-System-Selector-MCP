import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-anvil" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-anvil">Default Input</label>
        <input
          type="text"
          className="ds-input-anvil"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-anvil">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-anvil">Filled State</label>
        <input
          type="text"
          className="ds-input-anvil"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-anvil">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-anvil">Error State</label>
        <input
          type="text"
          className="ds-input-anvil error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-anvil">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-anvil">Disabled Input</label>
        <input
          type="text"
          className="ds-input-anvil"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-anvil">System generated read-only field</span>
      </div>
    </div>
  );
};
