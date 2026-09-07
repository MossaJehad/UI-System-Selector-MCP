import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-helios" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-helios">Default Input</label>
        <input
          type="text"
          className="ds-input-helios"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-helios">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-helios">Filled State</label>
        <input
          type="text"
          className="ds-input-helios"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-helios">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-helios">Error State</label>
        <input
          type="text"
          className="ds-input-helios error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-helios">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-helios">Disabled Input</label>
        <input
          type="text"
          className="ds-input-helios"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-helios">System generated read-only field</span>
      </div>
    </div>
  );
};
