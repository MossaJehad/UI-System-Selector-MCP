import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-nys" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-nys">Default Input</label>
        <input
          type="text"
          className="ds-input-nys"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-nys">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-nys">Filled State</label>
        <input
          type="text"
          className="ds-input-nys"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-nys">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-nys">Error State</label>
        <input
          type="text"
          className="ds-input-nys error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-nys">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-nys">Disabled Input</label>
        <input
          type="text"
          className="ds-input-nys"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-nys">System generated read-only field</span>
      </div>
    </div>
  );
};
