import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-ontario" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-ontario">Default Input</label>
        <input
          type="text"
          className="ds-input-ontario"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-ontario">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-ontario">Filled State</label>
        <input
          type="text"
          className="ds-input-ontario"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-ontario">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-ontario">Error State</label>
        <input
          type="text"
          className="ds-input-ontario error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-ontario">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-ontario">Disabled Input</label>
        <input
          type="text"
          className="ds-input-ontario"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-ontario">System generated read-only field</span>
      </div>
    </div>
  );
};
