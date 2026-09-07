import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-workday" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-workday">Default Input</label>
        <input
          type="text"
          className="ds-input-workday"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-workday">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-workday">Filled State</label>
        <input
          type="text"
          className="ds-input-workday"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-workday">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-workday">Error State</label>
        <input
          type="text"
          className="ds-input-workday error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-workday">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-workday">Disabled Input</label>
        <input
          type="text"
          className="ds-input-workday"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-workday">System generated read-only field</span>
      </div>
    </div>
  );
};
