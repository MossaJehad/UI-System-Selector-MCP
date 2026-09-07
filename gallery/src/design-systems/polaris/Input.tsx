import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-polaris" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-polaris">Default Input</label>
        <input
          type="text"
          className="ds-input-polaris"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-polaris">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-polaris">Filled State</label>
        <input
          type="text"
          className="ds-input-polaris"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-polaris">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-polaris">Error State</label>
        <input
          type="text"
          className="ds-input-polaris error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-polaris">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-polaris">Disabled Input</label>
        <input
          type="text"
          className="ds-input-polaris"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-polaris">System generated read-only field</span>
      </div>
    </div>
  );
};
