import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-kaizen" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-kaizen">Default Input</label>
        <input
          type="text"
          className="ds-input-kaizen"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-kaizen">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-kaizen">Filled State</label>
        <input
          type="text"
          className="ds-input-kaizen"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-kaizen">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-kaizen">Error State</label>
        <input
          type="text"
          className="ds-input-kaizen error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-kaizen">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-kaizen">Disabled Input</label>
        <input
          type="text"
          className="ds-input-kaizen"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-kaizen">System generated read-only field</span>
      </div>
    </div>
  );
};
