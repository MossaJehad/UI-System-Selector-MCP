import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-mozilla" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-mozilla">Default Input</label>
        <input
          type="text"
          className="ds-input-mozilla"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-mozilla">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-mozilla">Filled State</label>
        <input
          type="text"
          className="ds-input-mozilla"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-mozilla">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-mozilla">Error State</label>
        <input
          type="text"
          className="ds-input-mozilla error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-mozilla">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-mozilla">Disabled Input</label>
        <input
          type="text"
          className="ds-input-mozilla"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-mozilla">System generated read-only field</span>
      </div>
    </div>
  );
};
