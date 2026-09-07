import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-one-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-one-ui">Default Input</label>
        <input
          type="text"
          className="ds-input-one-ui"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-one-ui">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-one-ui">Filled State</label>
        <input
          type="text"
          className="ds-input-one-ui"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-one-ui">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-one-ui">Error State</label>
        <input
          type="text"
          className="ds-input-one-ui error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-one-ui">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-one-ui">Disabled Input</label>
        <input
          type="text"
          className="ds-input-one-ui"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-one-ui">System generated read-only field</span>
      </div>
    </div>
  );
};
