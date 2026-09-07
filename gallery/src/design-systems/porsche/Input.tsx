import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-porsche" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-porsche">Default Input</label>
        <input
          type="text"
          className="ds-input-porsche"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-porsche">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-porsche">Filled State</label>
        <input
          type="text"
          className="ds-input-porsche"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-porsche">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-porsche">Error State</label>
        <input
          type="text"
          className="ds-input-porsche error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-porsche">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-porsche">Disabled Input</label>
        <input
          type="text"
          className="ds-input-porsche"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-porsche">System generated read-only field</span>
      </div>
    </div>
  );
};
