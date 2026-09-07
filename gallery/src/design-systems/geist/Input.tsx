import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-geist" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-geist">Default Input</label>
        <input
          type="text"
          className="ds-input-geist"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-geist">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-geist">Filled State</label>
        <input
          type="text"
          className="ds-input-geist"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-geist">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-geist">Error State</label>
        <input
          type="text"
          className="ds-input-geist error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-geist">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-geist">Disabled Input</label>
        <input
          type="text"
          className="ds-input-geist"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-geist">System generated read-only field</span>
      </div>
    </div>
  );
};
