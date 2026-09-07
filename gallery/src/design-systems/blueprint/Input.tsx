import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-blueprint" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-blueprint">Default Input</label>
        <input
          type="text"
          className="ds-input-blueprint"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-blueprint">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-blueprint">Filled State</label>
        <input
          type="text"
          className="ds-input-blueprint"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-blueprint">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-blueprint">Error State</label>
        <input
          type="text"
          className="ds-input-blueprint error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-blueprint">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-blueprint">Disabled Input</label>
        <input
          type="text"
          className="ds-input-blueprint"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-blueprint">System generated read-only field</span>
      </div>
    </div>
  );
};
