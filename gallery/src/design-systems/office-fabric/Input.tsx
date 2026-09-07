import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-office-fabric" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-office-fabric">Default Input</label>
        <input
          type="text"
          className="ds-input-office-fabric"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-office-fabric">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-office-fabric">Filled State</label>
        <input
          type="text"
          className="ds-input-office-fabric"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-office-fabric">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-office-fabric">Error State</label>
        <input
          type="text"
          className="ds-input-office-fabric error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-office-fabric">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-office-fabric">Disabled Input</label>
        <input
          type="text"
          className="ds-input-office-fabric"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-office-fabric">System generated read-only field</span>
      </div>
    </div>
  );
};
