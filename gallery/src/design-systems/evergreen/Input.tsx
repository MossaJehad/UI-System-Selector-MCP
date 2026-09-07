import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-evergreen" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-evergreen">Default Input</label>
        <input
          type="text"
          className="ds-input-evergreen"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-evergreen">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-evergreen">Filled State</label>
        <input
          type="text"
          className="ds-input-evergreen"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-evergreen">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-evergreen">Error State</label>
        <input
          type="text"
          className="ds-input-evergreen error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-evergreen">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-evergreen">Disabled Input</label>
        <input
          type="text"
          className="ds-input-evergreen"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-evergreen">System generated read-only field</span>
      </div>
    </div>
  );
};
