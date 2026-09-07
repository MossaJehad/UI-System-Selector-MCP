import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-calcite" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-calcite">Default Input</label>
        <input
          type="text"
          className="ds-input-calcite"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-calcite">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-calcite">Filled State</label>
        <input
          type="text"
          className="ds-input-calcite"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-calcite">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-calcite">Error State</label>
        <input
          type="text"
          className="ds-input-calcite error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-calcite">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-calcite">Disabled Input</label>
        <input
          type="text"
          className="ds-input-calcite"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-calcite">System generated read-only field</span>
      </div>
    </div>
  );
};
