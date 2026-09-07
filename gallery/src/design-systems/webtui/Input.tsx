import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-webtui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-webtui">Standard Field</label>
        <input
          type="text"
          className="ds-input-webtui"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-webtui">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-webtui">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-webtui"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-webtui">Validation Error</label>
        <input
          type="text"
          className="ds-input-webtui error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-webtui">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-webtui">Disabled State</label>
        <input
          type="text"
          className="ds-input-webtui"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
