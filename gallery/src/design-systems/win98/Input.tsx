import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-win98" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-win98">Default Input</label>
        <input
          type="text"
          className="ds-input-win98"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-win98">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-win98">Filled State</label>
        <input
          type="text"
          className="ds-input-win98"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-win98">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-win98">Error State</label>
        <input
          type="text"
          className="ds-input-win98 error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-win98">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-win98">Disabled Input</label>
        <input
          type="text"
          className="ds-input-win98"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-win98">System generated read-only field</span>
      </div>
    </div>
  );
};
