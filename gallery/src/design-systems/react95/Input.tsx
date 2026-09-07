import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-react95" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-react95">Standard Field</label>
        <input
          type="text"
          className="ds-input-react95"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-react95">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-react95">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-react95"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-react95">Validation Error</label>
        <input
          type="text"
          className="ds-input-react95 error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-react95">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-react95">Disabled State</label>
        <input
          type="text"
          className="ds-input-react95"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
