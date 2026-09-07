import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-carbon" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-carbon">Default Input</label>
        <input
          type="text"
          className="ds-input-carbon"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-carbon">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-carbon">Filled State</label>
        <input
          type="text"
          className="ds-input-carbon"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-carbon">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-carbon">Error State</label>
        <input
          type="text"
          className="ds-input-carbon error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-carbon">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-carbon">Disabled Input</label>
        <input
          type="text"
          className="ds-input-carbon"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-carbon">System generated read-only field</span>
      </div>
    </div>
  );
};
