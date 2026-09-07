import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-axa" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-axa">Default Input</label>
        <input
          type="text"
          className="ds-input-axa"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-axa">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-axa">Filled State</label>
        <input
          type="text"
          className="ds-input-axa"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-axa">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-axa">Error State</label>
        <input
          type="text"
          className="ds-input-axa error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-axa">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-axa">Disabled Input</label>
        <input
          type="text"
          className="ds-input-axa"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-axa">System generated read-only field</span>
      </div>
    </div>
  );
};
