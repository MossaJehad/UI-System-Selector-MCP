import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-wise" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-wise">Default Input</label>
        <input
          type="text"
          className="ds-input-wise"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-wise">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-wise">Filled State</label>
        <input
          type="text"
          className="ds-input-wise"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-wise">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-wise">Error State</label>
        <input
          type="text"
          className="ds-input-wise error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-wise">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-wise">Disabled Input</label>
        <input
          type="text"
          className="ds-input-wise"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-wise">System generated read-only field</span>
      </div>
    </div>
  );
};
