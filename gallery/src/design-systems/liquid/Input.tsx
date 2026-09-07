import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-liquid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-liquid">Default Input</label>
        <input
          type="text"
          className="ds-input-liquid"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-liquid">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-liquid">Filled State</label>
        <input
          type="text"
          className="ds-input-liquid"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-liquid">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-liquid">Error State</label>
        <input
          type="text"
          className="ds-input-liquid error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-liquid">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-liquid">Disabled Input</label>
        <input
          type="text"
          className="ds-input-liquid"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-liquid">System generated read-only field</span>
      </div>
    </div>
  );
};
