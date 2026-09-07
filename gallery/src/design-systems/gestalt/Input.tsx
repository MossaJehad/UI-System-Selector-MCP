import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-gestalt" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-gestalt">Default Input</label>
        <input
          type="text"
          className="ds-input-gestalt"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-gestalt">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-gestalt">Filled State</label>
        <input
          type="text"
          className="ds-input-gestalt"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-gestalt">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-gestalt">Error State</label>
        <input
          type="text"
          className="ds-input-gestalt error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-gestalt">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-gestalt">Disabled Input</label>
        <input
          type="text"
          className="ds-input-gestalt"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-gestalt">System generated read-only field</span>
      </div>
    </div>
  );
};
