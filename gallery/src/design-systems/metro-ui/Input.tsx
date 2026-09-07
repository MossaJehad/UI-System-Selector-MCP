import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-metro-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-metro-ui">Standard Field</label>
        <input
          type="text"
          className="ds-input-metro-ui"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-metro-ui">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-metro-ui">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-metro-ui"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-metro-ui">Validation Error</label>
        <input
          type="text"
          className="ds-input-metro-ui error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-metro-ui">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-metro-ui">Disabled State</label>
        <input
          type="text"
          className="ds-input-metro-ui"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
