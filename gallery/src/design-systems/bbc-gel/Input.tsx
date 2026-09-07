import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-bbc-gel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-bbc-gel">Default Input</label>
        <input
          type="text"
          className="ds-input-bbc-gel"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-bbc-gel">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-bbc-gel">Filled State</label>
        <input
          type="text"
          className="ds-input-bbc-gel"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-bbc-gel">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-bbc-gel">Error State</label>
        <input
          type="text"
          className="ds-input-bbc-gel error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-bbc-gel">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-bbc-gel">Disabled Input</label>
        <input
          type="text"
          className="ds-input-bbc-gel"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-bbc-gel">System generated read-only field</span>
      </div>
    </div>
  );
};
