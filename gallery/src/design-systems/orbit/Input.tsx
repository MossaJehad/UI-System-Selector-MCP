import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-orbit" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-orbit">Default Input</label>
        <input
          type="text"
          className="ds-input-orbit"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-orbit">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-orbit">Filled State</label>
        <input
          type="text"
          className="ds-input-orbit"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-orbit">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-orbit">Error State</label>
        <input
          type="text"
          className="ds-input-orbit error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-orbit">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-orbit">Disabled Input</label>
        <input
          type="text"
          className="ds-input-orbit"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-orbit">System generated read-only field</span>
      </div>
    </div>
  );
};
