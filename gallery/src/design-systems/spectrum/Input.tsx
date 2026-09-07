import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-spectrum" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-spectrum">Default Input</label>
        <input
          type="text"
          className="ds-input-spectrum"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-spectrum">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-spectrum">Filled State</label>
        <input
          type="text"
          className="ds-input-spectrum"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-spectrum">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-spectrum">Error State</label>
        <input
          type="text"
          className="ds-input-spectrum error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-spectrum">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-spectrum">Disabled Input</label>
        <input
          type="text"
          className="ds-input-spectrum"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-spectrum">System generated read-only field</span>
      </div>
    </div>
  );
};
