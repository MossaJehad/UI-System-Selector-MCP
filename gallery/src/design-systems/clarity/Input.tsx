import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-clarity" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-clarity">Default Input</label>
        <input
          type="text"
          className="ds-input-clarity"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-clarity">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-clarity">Filled State</label>
        <input
          type="text"
          className="ds-input-clarity"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-clarity">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-clarity">Error State</label>
        <input
          type="text"
          className="ds-input-clarity error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-clarity">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-clarity">Disabled Input</label>
        <input
          type="text"
          className="ds-input-clarity"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-clarity">System generated read-only field</span>
      </div>
    </div>
  );
};
