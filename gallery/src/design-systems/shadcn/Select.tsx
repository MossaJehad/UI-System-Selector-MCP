import React, { useState } from 'react';

export const Select: React.FC = () => {
  const [selected, setSelected] = useState('us-east');

  return (
    <div className="ds-shadcn" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-shadcn">Select Region (Interactive)</label>
        <select
          className="ds-select-shadcn"
          value={selected}
          onChange={e => setSelected(e.target.value)}
        >
          <option value="us-east">US East (N. Virginia)</option>
          <option value="us-west">US West (Oregon)</option>
          <option value="eu-central">EU Central (Frankfurt)</option>
          <option value="ap-east">AP East (Tokyo)</option>
          <option value="sa-east">South America (São Paulo)</option>
        </select>
        <span className="ds-helper-shadcn">Active choice: <strong>{selected}</strong></span>
      </div>

      <div>
        <label className="ds-label-shadcn">Selected Tier</label>
        <select className="ds-select-shadcn" defaultValue="enterprise">
          <option value="developer">Developer Plan ($0/mo)</option>
          <option value="team">Team Plan ($49/mo)</option>
          <option value="enterprise">Enterprise Tier ($499/mo)</option>
        </select>
        <span className="ds-helper-shadcn">Includes 24/7 SLA & priority routing</span>
      </div>

      <div>
        <label className="ds-label-shadcn">Error State</label>
        <select className="ds-select-shadcn error" defaultValue="">
          <option value="" disabled>-- Please select a VPC --</option>
          <option value="vpc-1">vpc-prod-primary</option>
          <option value="vpc-2">vpc-dev-sandbox</option>
        </select>
        <span className="ds-error-text-shadcn">You must select an isolated VPC</span>
      </div>

      <div>
        <label className="ds-label-shadcn">Disabled Select</label>
        <select className="ds-select-shadcn" defaultValue="locked" disabled>
          <option value="locked">Production Environment (Locked)</option>
          <option value="staging">Staging</option>
        </select>
        <span className="ds-helper-shadcn">Locked by compliance policy</span>
      </div>
    </div>
  );
};
