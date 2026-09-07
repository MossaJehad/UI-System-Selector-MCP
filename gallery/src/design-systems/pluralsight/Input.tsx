import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-pluralsight" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-pluralsight">Default Input</label>
        <input
          type="text"
          className="ds-input-pluralsight"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-pluralsight">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-pluralsight">Filled State</label>
        <input
          type="text"
          className="ds-input-pluralsight"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-pluralsight">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-pluralsight">Error State</label>
        <input
          type="text"
          className="ds-input-pluralsight error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-pluralsight">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-pluralsight">Disabled Input</label>
        <input
          type="text"
          className="ds-input-pluralsight"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-pluralsight">System generated read-only field</span>
      </div>
    </div>
  );
};
