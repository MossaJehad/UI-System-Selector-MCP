import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-backpack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-backpack">Default Input</label>
        <input
          type="text"
          className="ds-input-backpack"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-backpack">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-backpack">Filled State</label>
        <input
          type="text"
          className="ds-input-backpack"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-backpack">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-backpack">Error State</label>
        <input
          type="text"
          className="ds-input-backpack error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-backpack">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-backpack">Disabled Input</label>
        <input
          type="text"
          className="ds-input-backpack"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-backpack">System generated read-only field</span>
      </div>
    </div>
  );
};
