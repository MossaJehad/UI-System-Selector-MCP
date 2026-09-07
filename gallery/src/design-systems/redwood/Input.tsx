import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-redwood" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-redwood">Default Input</label>
        <input
          type="text"
          className="ds-input-redwood"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-redwood">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-redwood">Filled State</label>
        <input
          type="text"
          className="ds-input-redwood"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-redwood">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-redwood">Error State</label>
        <input
          type="text"
          className="ds-input-redwood error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-redwood">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-redwood">Disabled Input</label>
        <input
          type="text"
          className="ds-input-redwood"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-redwood">System generated read-only field</span>
      </div>
    </div>
  );
};
