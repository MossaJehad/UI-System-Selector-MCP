import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-vtex" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-vtex">Default Input</label>
        <input
          type="text"
          className="ds-input-vtex"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-vtex">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-vtex">Filled State</label>
        <input
          type="text"
          className="ds-input-vtex"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-vtex">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-vtex">Error State</label>
        <input
          type="text"
          className="ds-input-vtex error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-vtex">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-vtex">Disabled Input</label>
        <input
          type="text"
          className="ds-input-vtex"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-vtex">System generated read-only field</span>
      </div>
    </div>
  );
};
