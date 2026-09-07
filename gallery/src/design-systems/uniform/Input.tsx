import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-uniform" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-uniform">Default Input</label>
        <input
          type="text"
          className="ds-input-uniform"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-uniform">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-uniform">Filled State</label>
        <input
          type="text"
          className="ds-input-uniform"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-uniform">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-uniform">Error State</label>
        <input
          type="text"
          className="ds-input-uniform error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-uniform">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-uniform">Disabled Input</label>
        <input
          type="text"
          className="ds-input-uniform"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-uniform">System generated read-only field</span>
      </div>
    </div>
  );
};
