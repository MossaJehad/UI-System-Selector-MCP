import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-wanda" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-wanda">Default Input</label>
        <input
          type="text"
          className="ds-input-wanda"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-wanda">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-wanda">Filled State</label>
        <input
          type="text"
          className="ds-input-wanda"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-wanda">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-wanda">Error State</label>
        <input
          type="text"
          className="ds-input-wanda error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-wanda">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-wanda">Disabled Input</label>
        <input
          type="text"
          className="ds-input-wanda"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-wanda">System generated read-only field</span>
      </div>
    </div>
  );
};
