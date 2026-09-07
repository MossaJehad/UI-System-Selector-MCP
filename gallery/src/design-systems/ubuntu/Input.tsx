import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-ubuntu" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-ubuntu">Default Input</label>
        <input
          type="text"
          className="ds-input-ubuntu"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-ubuntu">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-ubuntu">Filled State</label>
        <input
          type="text"
          className="ds-input-ubuntu"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-ubuntu">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-ubuntu">Error State</label>
        <input
          type="text"
          className="ds-input-ubuntu error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-ubuntu">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-ubuntu">Disabled Input</label>
        <input
          type="text"
          className="ds-input-ubuntu"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-ubuntu">System generated read-only field</span>
      </div>
    </div>
  );
};
