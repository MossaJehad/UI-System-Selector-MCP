import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-det-faelles" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-det-faelles">Default Input</label>
        <input
          type="text"
          className="ds-input-det-faelles"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-det-faelles">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-det-faelles">Filled State</label>
        <input
          type="text"
          className="ds-input-det-faelles"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-det-faelles">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-det-faelles">Error State</label>
        <input
          type="text"
          className="ds-input-det-faelles error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-det-faelles">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-det-faelles">Disabled Input</label>
        <input
          type="text"
          className="ds-input-det-faelles"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-det-faelles">System generated read-only field</span>
      </div>
    </div>
  );
};
