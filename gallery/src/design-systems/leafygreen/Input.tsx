import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-leafygreen" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-leafygreen">Default Input</label>
        <input
          type="text"
          className="ds-input-leafygreen"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-leafygreen">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-leafygreen">Filled State</label>
        <input
          type="text"
          className="ds-input-leafygreen"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-leafygreen">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-leafygreen">Error State</label>
        <input
          type="text"
          className="ds-input-leafygreen error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-leafygreen">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-leafygreen">Disabled Input</label>
        <input
          type="text"
          className="ds-input-leafygreen"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-leafygreen">System generated read-only field</span>
      </div>
    </div>
  );
};
