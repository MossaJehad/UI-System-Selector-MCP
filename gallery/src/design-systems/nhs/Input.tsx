import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-nhs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-nhs">Default Input</label>
        <input
          type="text"
          className="ds-input-nhs"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-nhs">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-nhs">Filled State</label>
        <input
          type="text"
          className="ds-input-nhs"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-nhs">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-nhs">Error State</label>
        <input
          type="text"
          className="ds-input-nhs error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-nhs">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-nhs">Disabled Input</label>
        <input
          type="text"
          className="ds-input-nhs"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-nhs">System generated read-only field</span>
      </div>
    </div>
  );
};
