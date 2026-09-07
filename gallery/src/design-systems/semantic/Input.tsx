import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-semantic" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-semantic">Default Input</label>
        <input
          type="text"
          className="ds-input-semantic"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-semantic">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-semantic">Filled State</label>
        <input
          type="text"
          className="ds-input-semantic"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-semantic">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-semantic">Error State</label>
        <input
          type="text"
          className="ds-input-semantic error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-semantic">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-semantic">Disabled Input</label>
        <input
          type="text"
          className="ds-input-semantic"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-semantic">System generated read-only field</span>
      </div>
    </div>
  );
};
