import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-nord" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-nord">Default Input</label>
        <input
          type="text"
          className="ds-input-nord"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-nord">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-nord">Filled State</label>
        <input
          type="text"
          className="ds-input-nord"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-nord">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-nord">Error State</label>
        <input
          type="text"
          className="ds-input-nord error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-nord">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-nord">Disabled Input</label>
        <input
          type="text"
          className="ds-input-nord"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-nord">System generated read-only field</span>
      </div>
    </div>
  );
};
