import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-salesforce" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-salesforce">Default Input</label>
        <input
          type="text"
          className="ds-input-salesforce"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-salesforce">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-salesforce">Filled State</label>
        <input
          type="text"
          className="ds-input-salesforce"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-salesforce">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-salesforce">Error State</label>
        <input
          type="text"
          className="ds-input-salesforce error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-salesforce">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-salesforce">Disabled Input</label>
        <input
          type="text"
          className="ds-input-salesforce"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-salesforce">System generated read-only field</span>
      </div>
    </div>
  );
};
