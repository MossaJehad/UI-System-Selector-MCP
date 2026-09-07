import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-nasa-jpl" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-nasa-jpl">Default Input</label>
        <input
          type="text"
          className="ds-input-nasa-jpl"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-nasa-jpl">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-nasa-jpl">Filled State</label>
        <input
          type="text"
          className="ds-input-nasa-jpl"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-nasa-jpl">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-nasa-jpl">Error State</label>
        <input
          type="text"
          className="ds-input-nasa-jpl error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-nasa-jpl">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-nasa-jpl">Disabled Input</label>
        <input
          type="text"
          className="ds-input-nasa-jpl"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-nasa-jpl">System generated read-only field</span>
      </div>
    </div>
  );
};
