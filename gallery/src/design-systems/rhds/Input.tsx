import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-rhds" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-rhds">Default Input</label>
        <input
          type="text"
          className="ds-input-rhds"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-rhds">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-rhds">Filled State</label>
        <input
          type="text"
          className="ds-input-rhds"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-rhds">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-rhds">Error State</label>
        <input
          type="text"
          className="ds-input-rhds error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-rhds">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-rhds">Disabled Input</label>
        <input
          type="text"
          className="ds-input-rhds"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-rhds">System generated read-only field</span>
      </div>
    </div>
  );
};
