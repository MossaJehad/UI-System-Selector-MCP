import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-photon" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-photon">Default Input</label>
        <input
          type="text"
          className="ds-input-photon"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-photon">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-photon">Filled State</label>
        <input
          type="text"
          className="ds-input-photon"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-photon">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-photon">Error State</label>
        <input
          type="text"
          className="ds-input-photon error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-photon">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-photon">Disabled Input</label>
        <input
          type="text"
          className="ds-input-photon"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-photon">System generated read-only field</span>
      </div>
    </div>
  );
};
