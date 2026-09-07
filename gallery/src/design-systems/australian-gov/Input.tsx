import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-australian-gov" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-australian-gov">Default Input</label>
        <input
          type="text"
          className="ds-input-australian-gov"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-australian-gov">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-australian-gov">Filled State</label>
        <input
          type="text"
          className="ds-input-australian-gov"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-australian-gov">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-australian-gov">Error State</label>
        <input
          type="text"
          className="ds-input-australian-gov error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-australian-gov">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-australian-gov">Disabled Input</label>
        <input
          type="text"
          className="ds-input-australian-gov"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-australian-gov">System generated read-only field</span>
      </div>
    </div>
  );
};
