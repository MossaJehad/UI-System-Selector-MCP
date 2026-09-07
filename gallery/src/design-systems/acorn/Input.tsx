import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-acorn" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-acorn">Default Input</label>
        <input
          type="text"
          className="ds-input-acorn"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-acorn">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-acorn">Filled State</label>
        <input
          type="text"
          className="ds-input-acorn"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-acorn">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-acorn">Error State</label>
        <input
          type="text"
          className="ds-input-acorn error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-acorn">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-acorn">Disabled Input</label>
        <input
          type="text"
          className="ds-input-acorn"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-acorn">System generated read-only field</span>
      </div>
    </div>
  );
};
