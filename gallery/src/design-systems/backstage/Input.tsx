import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-backstage" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-backstage">Default Input</label>
        <input
          type="text"
          className="ds-input-backstage"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-backstage">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-backstage">Filled State</label>
        <input
          type="text"
          className="ds-input-backstage"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-backstage">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-backstage">Error State</label>
        <input
          type="text"
          className="ds-input-backstage error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-backstage">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-backstage">Disabled Input</label>
        <input
          type="text"
          className="ds-input-backstage"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-backstage">System generated read-only field</span>
      </div>
    </div>
  );
};
