import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-c64-css" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-c64-css">Standard Field</label>
        <input
          type="text"
          className="ds-input-c64-css"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-c64-css">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-c64-css">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-c64-css"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-c64-css">Validation Error</label>
        <input
          type="text"
          className="ds-input-c64-css error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-c64-css">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-c64-css">Disabled State</label>
        <input
          type="text"
          className="ds-input-c64-css"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
