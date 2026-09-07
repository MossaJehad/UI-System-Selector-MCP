import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-atlassian" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-atlassian">Default Input</label>
        <input
          type="text"
          className="ds-input-atlassian"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-atlassian">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-atlassian">Filled State</label>
        <input
          type="text"
          className="ds-input-atlassian"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-atlassian">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-atlassian">Error State</label>
        <input
          type="text"
          className="ds-input-atlassian error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-atlassian">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-atlassian">Disabled Input</label>
        <input
          type="text"
          className="ds-input-atlassian"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-atlassian">System generated read-only field</span>
      </div>
    </div>
  );
};
