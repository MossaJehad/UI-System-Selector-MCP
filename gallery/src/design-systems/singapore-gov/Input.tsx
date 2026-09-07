import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-singapore-gov" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-singapore-gov">Default Input</label>
        <input
          type="text"
          className="ds-input-singapore-gov"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-singapore-gov">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-singapore-gov">Filled State</label>
        <input
          type="text"
          className="ds-input-singapore-gov"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-singapore-gov">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-singapore-gov">Error State</label>
        <input
          type="text"
          className="ds-input-singapore-gov error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-singapore-gov">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-singapore-gov">Disabled Input</label>
        <input
          type="text"
          className="ds-input-singapore-gov"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-singapore-gov">System generated read-only field</span>
      </div>
    </div>
  );
};
