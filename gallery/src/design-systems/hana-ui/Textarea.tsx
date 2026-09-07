import React, { useState } from 'react';

export const Textarea: React.FC = () => {
  const [notes, setNotes] = useState('');

  return (
    <div className="ds-hana-ui" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
          <label className="ds-label-hana-ui" style={{ margin: 0 }}>Release Notes</label>
          <span style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>{notes.length} / 500</span>
        </div>
        <textarea
          className="ds-textarea-hana-ui"
          rows={4}
          placeholder="Document service changelog, migration steps, and deployment sign-offs..."
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
        <span className="ds-helper-hana-ui">Markdown formatting supported</span>
      </div>

      <div>
        <label className="ds-label-hana-ui">Audit Record (Read-Only)</label>
        <textarea
          className="ds-textarea-hana-ui"
          rows={4}
          disabled
          defaultValue="Read-only audit trail: Configuration checksum sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 verified by cluster orchestrator."
        />
      </div>
    </div>
  );
};
