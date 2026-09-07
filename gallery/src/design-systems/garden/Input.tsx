import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-garden" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-garden">Default Input</label>
        <input
          type="text"
          className="ds-input-garden"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-garden">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-garden">Filled State</label>
        <input
          type="text"
          className="ds-input-garden"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-garden">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-garden">Error State</label>
        <input
          type="text"
          className="ds-input-garden error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-garden">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-garden">Disabled Input</label>
        <input
          type="text"
          className="ds-input-garden"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-garden">System generated read-only field</span>
      </div>
    </div>
  );
};
