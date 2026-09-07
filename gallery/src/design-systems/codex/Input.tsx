import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-codex" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-codex">Default Input</label>
        <input
          type="text"
          className="ds-input-codex"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-codex">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-codex">Filled State</label>
        <input
          type="text"
          className="ds-input-codex"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-codex">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-codex">Error State</label>
        <input
          type="text"
          className="ds-input-codex error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-codex">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-codex">Disabled Input</label>
        <input
          type="text"
          className="ds-input-codex"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-codex">System generated read-only field</span>
      </div>
    </div>
  );
};
