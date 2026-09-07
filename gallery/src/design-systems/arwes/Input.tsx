import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-arwes" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-arwes">Standard Field</label>
        <input
          type="text"
          className="ds-input-arwes"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-arwes">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-arwes">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-arwes"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-arwes">Validation Error</label>
        <input
          type="text"
          className="ds-input-arwes error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-arwes">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-arwes">Disabled State</label>
        <input
          type="text"
          className="ds-input-arwes"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
