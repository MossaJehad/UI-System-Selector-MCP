import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-stacks" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-stacks">Default Input</label>
        <input
          type="text"
          className="ds-input-stacks"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-stacks">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-stacks">Filled State</label>
        <input
          type="text"
          className="ds-input-stacks"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-stacks">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-stacks">Error State</label>
        <input
          type="text"
          className="ds-input-stacks error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-stacks">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-stacks">Disabled Input</label>
        <input
          type="text"
          className="ds-input-stacks"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-stacks">System generated read-only field</span>
      </div>
    </div>
  );
};
