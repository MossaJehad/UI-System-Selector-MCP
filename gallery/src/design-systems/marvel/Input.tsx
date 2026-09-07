import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-marvel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-marvel">Default Input</label>
        <input
          type="text"
          className="ds-input-marvel"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-marvel">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-marvel">Filled State</label>
        <input
          type="text"
          className="ds-input-marvel"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-marvel">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-marvel">Error State</label>
        <input
          type="text"
          className="ds-input-marvel error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-marvel">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-marvel">Disabled Input</label>
        <input
          type="text"
          className="ds-input-marvel"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-marvel">System generated read-only field</span>
      </div>
    </div>
  );
};
