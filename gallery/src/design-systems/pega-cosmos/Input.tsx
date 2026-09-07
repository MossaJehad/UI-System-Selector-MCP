import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-pega-cosmos" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-pega-cosmos">Default Input</label>
        <input
          type="text"
          className="ds-input-pega-cosmos"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-pega-cosmos">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-pega-cosmos">Filled State</label>
        <input
          type="text"
          className="ds-input-pega-cosmos"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-pega-cosmos">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-pega-cosmos">Error State</label>
        <input
          type="text"
          className="ds-input-pega-cosmos error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-pega-cosmos">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-pega-cosmos">Disabled Input</label>
        <input
          type="text"
          className="ds-input-pega-cosmos"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-pega-cosmos">System generated read-only field</span>
      </div>
    </div>
  );
};
