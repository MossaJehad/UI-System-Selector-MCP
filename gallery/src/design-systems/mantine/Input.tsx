import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-mantine" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-mantine">Default Input</label>
        <input
          type="text"
          className="ds-input-mantine"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-mantine">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-mantine">Filled State</label>
        <input
          type="text"
          className="ds-input-mantine"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-mantine">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-mantine">Error State</label>
        <input
          type="text"
          className="ds-input-mantine error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-mantine">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-mantine">Disabled Input</label>
        <input
          type="text"
          className="ds-input-mantine"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-mantine">System generated read-only field</span>
      </div>
    </div>
  );
};
