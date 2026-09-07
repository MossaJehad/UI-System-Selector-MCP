import React, { useState } from 'react';

export const Input: React.FC = () => {
  const [val, setVal] = useState('Production Cluster 01');
  const [defaultVal, setDefaultVal] = useState('');

  return (
    <div className="ds-mailchimp" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
      <div>
        <label className="ds-label-mailchimp">Default Input</label>
        <input
          type="text"
          className="ds-input-mailchimp"
          value={defaultVal}
          onChange={e => setDefaultVal(e.target.value)}
          placeholder="Type something..."
        />
        <span className="ds-helper-mailchimp">Standard single-line text entry</span>
      </div>

      <div>
        <label className="ds-label-mailchimp">Filled State</label>
        <input
          type="text"
          className="ds-input-mailchimp"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <span className="ds-helper-mailchimp">Configured cluster identifier</span>
      </div>

      <div>
        <label className="ds-label-mailchimp">Error State</label>
        <input
          type="text"
          className="ds-input-mailchimp error"
          defaultValue="invalid-cluster-id#!"
        />
        <span className="ds-error-text-mailchimp">Cluster name contains forbidden characters</span>
      </div>

      <div>
        <label className="ds-label-mailchimp">Disabled Input</label>
        <input
          type="text"
          className="ds-input-mailchimp"
          defaultValue="read-only-resource-v1"
          disabled
        />
        <span className="ds-helper-mailchimp">System generated read-only field</span>
      </div>
    </div>
  );
};
