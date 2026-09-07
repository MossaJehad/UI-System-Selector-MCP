import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-patternfly" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-patternfly">Default Input</label>
        <input
          type="text"
          className="ds-input-patternfly"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-patternfly">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-patternfly">Filled State</label>
        <input
          type="text"
          className="ds-input-patternfly"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-patternfly">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-patternfly">Error State</label>
        <input
          type="text"
          className="ds-input-patternfly error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-patternfly">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-patternfly">Disabled Input</label>
        <input
          type="text"
          className="ds-input-patternfly"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-patternfly">System generated read-only field</span>
      </div>
    </div>
  );
};
