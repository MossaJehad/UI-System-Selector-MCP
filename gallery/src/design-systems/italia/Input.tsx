import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-italia" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-italia">Default Input</label>
        <input
          type="text"
          className="ds-input-italia"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-italia">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-italia">Filled State</label>
        <input
          type="text"
          className="ds-input-italia"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-italia">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-italia">Error State</label>
        <input
          type="text"
          className="ds-input-italia error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-italia">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-italia">Disabled Input</label>
        <input
          type="text"
          className="ds-input-italia"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-italia">System generated read-only field</span>
      </div>
    </div>
  );
};
