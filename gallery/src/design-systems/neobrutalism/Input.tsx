import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className="ds-neobrutalism" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-neobrutalism">Standard Field</label>
        <input
          type="text"
          className="ds-input-neobrutalism"
          placeholder="Placeholder text..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <span className="ds-helper-neobrutalism">Helper instructions</span>
      </div>

      <div>
        <label className="ds-label-neobrutalism">Pre-filled Input</label>
        <input
          type="text"
          className="ds-input-neobrutalism"
          defaultValue="production-cluster-01"
        />
      </div>

      <div>
        <label className="ds-label-neobrutalism">Validation Error</label>
        <input
          type="text"
          className="ds-input-neobrutalism error"
          defaultValue="invalid_cluster_name#"
        />
        <span className="ds-error-text-neobrutalism">Name may only contain alphanumeric characters</span>
      </div>

      <div>
        <label className="ds-label-neobrutalism">Disabled State</label>
        <input
          type="text"
          className="ds-input-neobrutalism"
          value="System provisioned value"
          disabled
        />
      </div>
    </div>
  );
};
