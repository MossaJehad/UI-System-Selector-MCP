import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-servicenow" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-servicenow">Default Input</label>
        <input
          type="text"
          className="ds-input-servicenow"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-servicenow">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-servicenow">Filled State</label>
        <input
          type="text"
          className="ds-input-servicenow"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-servicenow">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-servicenow">Error State</label>
        <input
          type="text"
          className="ds-input-servicenow error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-servicenow">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-servicenow">Disabled Input</label>
        <input
          type="text"
          className="ds-input-servicenow"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-servicenow">System generated read-only field</span>
      </div>
    </div>
  );
};
