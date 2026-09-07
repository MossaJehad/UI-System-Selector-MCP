import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-priceline-one" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-priceline-one">Default Input</label>
        <input
          type="text"
          className="ds-input-priceline-one"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-priceline-one">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-priceline-one">Filled State</label>
        <input
          type="text"
          className="ds-input-priceline-one"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-priceline-one">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-priceline-one">Error State</label>
        <input
          type="text"
          className="ds-input-priceline-one error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-priceline-one">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-priceline-one">Disabled Input</label>
        <input
          type="text"
          className="ds-input-priceline-one"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-priceline-one">System generated read-only field</span>
      </div>
    </div>
  );
};
