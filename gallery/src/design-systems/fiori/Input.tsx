import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-fiori" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-fiori">Default Input</label>
        <input
          type="text"
          className="ds-input-fiori"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-fiori">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-fiori">Filled State</label>
        <input
          type="text"
          className="ds-input-fiori"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-fiori">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-fiori">Error State</label>
        <input
          type="text"
          className="ds-input-fiori error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-fiori">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-fiori">Disabled Input</label>
        <input
          type="text"
          className="ds-input-fiori"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-fiori">System generated read-only field</span>
      </div>
    </div>
  );
};
