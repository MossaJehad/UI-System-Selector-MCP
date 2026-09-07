import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-line" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-line">Default Input</label>
        <input
          type="text"
          className="ds-input-line"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-line">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-line">Filled State</label>
        <input
          type="text"
          className="ds-input-line"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-line">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-line">Error State</label>
        <input
          type="text"
          className="ds-input-line error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-line">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-line">Disabled Input</label>
        <input
          type="text"
          className="ds-input-line"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-line">System generated read-only field</span>
      </div>
    </div>
  );
};
