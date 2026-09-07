import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-vitamin" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-vitamin">Default Input</label>
        <input
          type="text"
          className="ds-input-vitamin"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-vitamin">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-vitamin">Filled State</label>
        <input
          type="text"
          className="ds-input-vitamin"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-vitamin">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-vitamin">Error State</label>
        <input
          type="text"
          className="ds-input-vitamin error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-vitamin">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-vitamin">Disabled Input</label>
        <input
          type="text"
          className="ds-input-vitamin"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-vitamin">System generated read-only field</span>
      </div>
    </div>
  );
};
