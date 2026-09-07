import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-audi" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-audi">Default Input</label>
        <input
          type="text"
          className="ds-input-audi"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-audi">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-audi">Filled State</label>
        <input
          type="text"
          className="ds-input-audi"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-audi">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-audi">Error State</label>
        <input
          type="text"
          className="ds-input-audi error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-audi">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-audi">Disabled Input</label>
        <input
          type="text"
          className="ds-input-audi"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-audi">System generated read-only field</span>
      </div>
    </div>
  );
};
