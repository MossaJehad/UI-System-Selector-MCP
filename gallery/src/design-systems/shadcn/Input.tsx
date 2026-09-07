import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-shadcn" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-shadcn">Default Input</label>
        <input
          type="text"
          className="ds-input-shadcn"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-shadcn">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-shadcn">Filled State</label>
        <input
          type="text"
          className="ds-input-shadcn"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-shadcn">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-shadcn">Error State</label>
        <input
          type="text"
          className="ds-input-shadcn error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-shadcn">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-shadcn">Disabled Input</label>
        <input
          type="text"
          className="ds-input-shadcn"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-shadcn">System generated read-only field</span>
      </div>
    </div>
  );
};
