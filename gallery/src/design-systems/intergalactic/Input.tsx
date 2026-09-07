import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-intergalactic" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-intergalactic">Default Input</label>
        <input
          type="text"
          className="ds-input-intergalactic"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-intergalactic">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-intergalactic">Filled State</label>
        <input
          type="text"
          className="ds-input-intergalactic"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-intergalactic">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-intergalactic">Error State</label>
        <input
          type="text"
          className="ds-input-intergalactic error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-intergalactic">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-intergalactic">Disabled Input</label>
        <input
          type="text"
          className="ds-input-intergalactic"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-intergalactic">System generated read-only field</span>
      </div>
    </div>
  );
};
