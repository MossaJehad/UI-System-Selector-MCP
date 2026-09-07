import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-fluent" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-fluent">Default Input</label>
        <input
          type="text"
          className="ds-input-fluent"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-fluent">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-fluent">Filled State</label>
        <input
          type="text"
          className="ds-input-fluent"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-fluent">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-fluent">Error State</label>
        <input
          type="text"
          className="ds-input-fluent error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-fluent">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-fluent">Disabled Input</label>
        <input
          type="text"
          className="ds-input-fluent"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-fluent">System generated read-only field</span>
      </div>
    </div>
  );
};
