import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-circuit-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-circuit-ui">Default Input</label>
        <input
          type="text"
          className="ds-input-circuit-ui"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-circuit-ui">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-circuit-ui">Filled State</label>
        <input
          type="text"
          className="ds-input-circuit-ui"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-circuit-ui">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-circuit-ui">Error State</label>
        <input
          type="text"
          className="ds-input-circuit-ui error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-circuit-ui">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-circuit-ui">Disabled Input</label>
        <input
          type="text"
          className="ds-input-circuit-ui"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-circuit-ui">System generated read-only field</span>
      </div>
    </div>
  );
};
