import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-thumbprint" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-thumbprint">Default Input</label>
        <input
          type="text"
          className="ds-input-thumbprint"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-thumbprint">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-thumbprint">Filled State</label>
        <input
          type="text"
          className="ds-input-thumbprint"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-thumbprint">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-thumbprint">Error State</label>
        <input
          type="text"
          className="ds-input-thumbprint error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-thumbprint">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-thumbprint">Disabled Input</label>
        <input
          type="text"
          className="ds-input-thumbprint"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-thumbprint">System generated read-only field</span>
      </div>
    </div>
  );
};
