import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-paste" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-paste">Default Input</label>
        <input
          type="text"
          className="ds-input-paste"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-paste">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-paste">Filled State</label>
        <input
          type="text"
          className="ds-input-paste"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-paste">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-paste">Error State</label>
        <input
          type="text"
          className="ds-input-paste error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-paste">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-paste">Disabled Input</label>
        <input
          type="text"
          className="ds-input-paste"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-paste">System generated read-only field</span>
      </div>
    </div>
  );
};
