import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-beeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-beeline">Default Input</label>
        <input
          type="text"
          className="ds-input-beeline"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-beeline">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-beeline">Filled State</label>
        <input
          type="text"
          className="ds-input-beeline"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-beeline">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-beeline">Error State</label>
        <input
          type="text"
          className="ds-input-beeline error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-beeline">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-beeline">Disabled Input</label>
        <input
          type="text"
          className="ds-input-beeline"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-beeline">System generated read-only field</span>
      </div>
    </div>
  );
};
