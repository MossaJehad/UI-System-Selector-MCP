import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-yoga" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-yoga">Default Input</label>
        <input
          type="text"
          className="ds-input-yoga"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-yoga">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-yoga">Filled State</label>
        <input
          type="text"
          className="ds-input-yoga"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-yoga">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-yoga">Error State</label>
        <input
          type="text"
          className="ds-input-yoga error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-yoga">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-yoga">Disabled Input</label>
        <input
          type="text"
          className="ds-input-yoga"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-yoga">System generated read-only field</span>
      </div>
    </div>
  );
};
