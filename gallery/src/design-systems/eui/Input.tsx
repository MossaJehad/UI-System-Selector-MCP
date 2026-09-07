import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-eui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-eui">Default Input</label>
        <input
          type="text"
          className="ds-input-eui"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-eui">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-eui">Filled State</label>
        <input
          type="text"
          className="ds-input-eui"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-eui">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-eui">Error State</label>
        <input
          type="text"
          className="ds-input-eui error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-eui">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-eui">Disabled Input</label>
        <input
          type="text"
          className="ds-input-eui"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-eui">System generated read-only field</span>
      </div>
    </div>
  );
};
