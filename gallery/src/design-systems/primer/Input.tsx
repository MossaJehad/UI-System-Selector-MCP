import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-primer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-primer">Default Input</label>
        <input
          type="text"
          className="ds-input-primer"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-primer">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-primer">Filled State</label>
        <input
          type="text"
          className="ds-input-primer"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-primer">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-primer">Error State</label>
        <input
          type="text"
          className="ds-input-primer error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-primer">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-primer">Disabled Input</label>
        <input
          type="text"
          className="ds-input-primer"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-primer">System generated read-only field</span>
      </div>
    </div>
  );
};
