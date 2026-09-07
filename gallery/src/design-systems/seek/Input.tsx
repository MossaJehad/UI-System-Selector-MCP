import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-seek" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-seek">Default Input</label>
        <input
          type="text"
          className="ds-input-seek"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-seek">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-seek">Filled State</label>
        <input
          type="text"
          className="ds-input-seek"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-seek">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-seek">Error State</label>
        <input
          type="text"
          className="ds-input-seek error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-seek">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-seek">Disabled Input</label>
        <input
          type="text"
          className="ds-input-seek"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-seek">System generated read-only field</span>
      </div>
    </div>
  );
};
