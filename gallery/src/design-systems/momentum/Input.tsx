import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-momentum" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-momentum">Default Input</label>
        <input
          type="text"
          className="ds-input-momentum"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-momentum">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-momentum">Filled State</label>
        <input
          type="text"
          className="ds-input-momentum"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-momentum">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-momentum">Error State</label>
        <input
          type="text"
          className="ds-input-momentum error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-momentum">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-momentum">Disabled Input</label>
        <input
          type="text"
          className="ds-input-momentum"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-momentum">System generated read-only field</span>
      </div>
    </div>
  );
};
