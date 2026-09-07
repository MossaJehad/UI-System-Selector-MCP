import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-vengeance-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-vengeance-ui">Standard Field</label>
        <input
          type="text"
          className="ds-input-vengeance-ui"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-vengeance-ui">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-vengeance-ui">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-vengeance-ui"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-vengeance-ui">Validation Error</label>
        <input
          type="text"
          className="ds-input-vengeance-ui error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-vengeance-ui">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-vengeance-ui">Disabled State</label>
        <input
          type="text"
          className="ds-input-vengeance-ui"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
