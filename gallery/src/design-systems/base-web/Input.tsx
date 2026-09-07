import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-base-web" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-base-web">Default Input</label>
        <input
          type="text"
          className="ds-input-base-web"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-base-web">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-base-web">Filled State</label>
        <input
          type="text"
          className="ds-input-base-web"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-base-web">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-base-web">Error State</label>
        <input
          type="text"
          className="ds-input-base-web error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-base-web">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-base-web">Disabled Input</label>
        <input
          type="text"
          className="ds-input-base-web"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-base-web">System generated read-only field</span>
      </div>
    </div>
  );
};
