import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-instructure" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-instructure">Default Input</label>
        <input
          type="text"
          className="ds-input-instructure"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-instructure">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-instructure">Filled State</label>
        <input
          type="text"
          className="ds-input-instructure"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-instructure">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-instructure">Error State</label>
        <input
          type="text"
          className="ds-input-instructure error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-instructure">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-instructure">Disabled Input</label>
        <input
          type="text"
          className="ds-input-instructure"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-instructure">System generated read-only field</span>
      </div>
    </div>
  );
};
