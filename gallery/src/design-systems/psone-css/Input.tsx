import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-psone-css" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-psone-css">Standard Field</label>
        <input
          type="text"
          className="ds-input-psone-css"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-psone-css">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-psone-css">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-psone-css"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-psone-css">Validation Error</label>
        <input
          type="text"
          className="ds-input-psone-css error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-psone-css">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-psone-css">Disabled State</label>
        <input
          type="text"
          className="ds-input-psone-css"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
