import React, { useState } from 'react';

export const Textarea: React.FC = () => {
  const [notes, setNotes] = useState('Production deployment cluster with automated failover and regional DNS routing.');

  return (
    <div className="ds-ontario" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <label className="ds-label-ontario">Service Description (Interactive)</label>
          <span style={{ fontSize: '11px', color: 'var(--muted-fg)' }}>{notes.length} / 250</span>
        </div>
        <textarea
          className="ds-textarea-ontario"
          rows={3}
          value={notes}
          maxLength={250}
          onChange={e => setNotes(e.target.value)}
          placeholder="Describe infrastructure requirements..."
        />
        <span className="ds-helper-ontario">Live editable field with character count</span>
      </div>

      <div>
        <label className="ds-label-ontario">Placeholder State</label>
        <textarea
          className="ds-textarea-ontario"
          rows={3}
          placeholder="e.g. Include release notes, rollback instructions, and customer communication..."
        />
        <span className="ds-helper-ontario">Provides context before typing starts</span>
      </div>

      <div>
        <label className="ds-label-ontario">Error State</label>
        <textarea
          className="ds-textarea-ontario error"
          rows={3}
          defaultValue="Failed DNS."
        />
        <span className="ds-error-text-ontario">Description must contain at least 25 characters</span>
      </div>

      <div>
        <label className="ds-label-ontario">Disabled State</label>
        <textarea
          className="ds-textarea-ontario"
          rows={3}
          defaultValue="Read-only audit trail: Configuration checksum sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
          disabled
        />
        <span className="ds-helper-ontario">Locked by security compliance policy</span>
      </div>
    </div>
  );
};
