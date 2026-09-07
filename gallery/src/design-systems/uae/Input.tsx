import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-uae" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-uae">Default Input</label>
        <input
          type="text"
          className="ds-input-uae"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-uae">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-uae">Filled State</label>
        <input
          type="text"
          className="ds-input-uae"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-uae">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-uae">Error State</label>
        <input
          type="text"
          className="ds-input-uae error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-uae">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-uae">Disabled Input</label>
        <input
          type="text"
          className="ds-input-uae"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-uae">System generated read-only field</span>
      </div>
    </div>
  );
};
