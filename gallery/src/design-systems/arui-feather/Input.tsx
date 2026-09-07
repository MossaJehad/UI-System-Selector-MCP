import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-arui-feather" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-arui-feather">Default Input</label>
        <input
          type="text"
          className="ds-input-arui-feather"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-arui-feather">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-arui-feather">Filled State</label>
        <input
          type="text"
          className="ds-input-arui-feather"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-arui-feather">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-arui-feather">Error State</label>
        <input
          type="text"
          className="ds-input-arui-feather error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-arui-feather">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-arui-feather">Disabled Input</label>
        <input
          type="text"
          className="ds-input-arui-feather"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-arui-feather">System generated read-only field</span>
      </div>
    </div>
  );
};
