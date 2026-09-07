import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-auro" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-auro">Default Input</label>
        <input
          type="text"
          className="ds-input-auro"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-auro">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-auro">Filled State</label>
        <input
          type="text"
          className="ds-input-auro"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-auro">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-auro">Error State</label>
        <input
          type="text"
          className="ds-input-auro error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-auro">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-auro">Disabled Input</label>
        <input
          type="text"
          className="ds-input-auro"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-auro">System generated read-only field</span>
      </div>
    </div>
  );
};
