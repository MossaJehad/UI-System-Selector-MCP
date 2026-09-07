import React, { useState } from 'react';

export const Select: React.FC = () => {
  const [selected, setSelected] = useState('us-east');

  return (
    <div className="ds-c64-css" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
      <div>
        <label className="ds-label-c64-css">Primary Select</label>
        <select
          className="ds-select-c64-css"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="us-east">US East (N. Virginia)</option>
          <option value="us-west">US West (Oregon)</option>
          <option value="eu-central">EU Central (Frankfurt)</option>
          <option value="ap-southeast">AP Southeast (Singapore)</option>
        </select>
        <span className="ds-helper-c64-css">Select an active compute zone</span>
      </div>

      <div>
        <label className="ds-label-c64-css">Disabled Select</label>
        <select className="ds-select-c64-css" disabled defaultValue="locked">
          <option value="locked">Region Locked (Compliance)</option>
        </select>
      </div>
    </div>
  );
};
