import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-hana-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-hana-ui">Standard Field</label>
        <input
          type="text"
          className="ds-input-hana-ui"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-hana-ui">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-hana-ui">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-hana-ui"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-hana-ui">Validation Error</label>
        <input
          type="text"
          className="ds-input-hana-ui error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-hana-ui">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-hana-ui">Disabled State</label>
        <input
          type="text"
          className="ds-input-hana-ui"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
