import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-uswds" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-uswds">Default Input</label>
        <input
          type="text"
          className="ds-input-uswds"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-uswds">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-uswds">Filled State</label>
        <input
          type="text"
          className="ds-input-uswds"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-uswds">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-uswds">Error State</label>
        <input
          type="text"
          className="ds-input-uswds error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-uswds">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-uswds">Disabled Input</label>
        <input
          type="text"
          className="ds-input-uswds"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-uswds">System generated read-only field</span>
      </div>
    </div>
  );
};
