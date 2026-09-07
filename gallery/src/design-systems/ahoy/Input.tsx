import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-ahoy" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-ahoy">Default Input</label>
        <input
          type="text"
          className="ds-input-ahoy"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-ahoy">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-ahoy">Filled State</label>
        <input
          type="text"
          className="ds-input-ahoy"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-ahoy">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-ahoy">Error State</label>
        <input
          type="text"
          className="ds-input-ahoy error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-ahoy">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-ahoy">Disabled Input</label>
        <input
          type="text"
          className="ds-input-ahoy"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-ahoy">System generated read-only field</span>
      </div>
    </div>
  );
};
