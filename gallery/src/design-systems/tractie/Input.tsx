import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-tractie" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-tractie">Default Input</label>
        <input
          type="text"
          className="ds-input-tractie"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-tractie">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-tractie">Filled State</label>
        <input
          type="text"
          className="ds-input-tractie"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-tractie">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-tractie">Error State</label>
        <input
          type="text"
          className="ds-input-tractie error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-tractie">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-tractie">Disabled Input</label>
        <input
          type="text"
          className="ds-input-tractie"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-tractie">System generated read-only field</span>
      </div>
    </div>
  );
};
