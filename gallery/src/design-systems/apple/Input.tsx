import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-apple" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-apple">Default Input</label>
        <input
          type="text"
          className="ds-input-apple"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-apple">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-apple">Filled State</label>
        <input
          type="text"
          className="ds-input-apple"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-apple">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-apple">Error State</label>
        <input
          type="text"
          className="ds-input-apple error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-apple">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-apple">Disabled Input</label>
        <input
          type="text"
          className="ds-input-apple"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-apple">System generated read-only field</span>
      </div>
    </div>
  );
};
