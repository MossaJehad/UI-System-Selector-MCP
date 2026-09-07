import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-warcraftcn-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-warcraftcn-ui">Standard Field</label>
        <input
          type="text"
          className="ds-input-warcraftcn-ui"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-warcraftcn-ui">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-warcraftcn-ui">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-warcraftcn-ui"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-warcraftcn-ui">Validation Error</label>
        <input
          type="text"
          className="ds-input-warcraftcn-ui error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-warcraftcn-ui">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-warcraftcn-ui">Disabled State</label>
        <input
          type="text"
          className="ds-input-warcraftcn-ui"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
