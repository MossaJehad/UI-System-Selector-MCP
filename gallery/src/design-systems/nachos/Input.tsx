import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-nachos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-nachos">Default Input</label>
        <input
          type="text"
          className="ds-input-nachos"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-nachos">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-nachos">Filled State</label>
        <input
          type="text"
          className="ds-input-nachos"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-nachos">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-nachos">Error State</label>
        <input
          type="text"
          className="ds-input-nachos error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-nachos">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-nachos">Disabled Input</label>
        <input
          type="text"
          className="ds-input-nachos"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-nachos">System generated read-only field</span>
      </div>
    </div>
  );
};
