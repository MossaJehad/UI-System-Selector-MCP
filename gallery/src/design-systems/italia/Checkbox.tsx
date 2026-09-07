import React, { useState, useRef, useEffect } from 'react';

export const Checkbox: React.FC = () => {
  const [singleChecked, setSingleChecked] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState<string[]>(['email', 'push']);
  const indRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (indRef.current) {
      indRef.current.indeterminate = true;
    }
  }, []);

  const toggleGroup = (item: string) => {
    setSelectedGroup(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="ds-italia" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <label className="ds-label-italia">Single Checkbox (Interactive)</label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginTop: '6px', fontSize: '14px' }}>
          <input
            type="checkbox"
            className="ds-checkbox-italia"
            checked={singleChecked}
            onChange={e => setSingleChecked(e.target.checked)}
          />
          <span>I agree to the privacy and telemetry compliance terms</span>
        </label>
        <span className="ds-helper-italia">Status: {singleChecked ? 'Consented' : 'Declined'}</span>
      </div>

      <div>
        <label className="ds-label-italia">Checkbox Group (Multiple Selection)</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-italia"
              checked={selectedGroup.includes('email')}
              onChange={() => toggleGroup('email')}
            />
            <span>Email digest reports (Weekly summary)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-italia"
              checked={selectedGroup.includes('push')}
              onChange={() => toggleGroup('push')}
            />
            <span>Instant push notifications (Deployment & status alerts)</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
            <input
              type="checkbox"
              className="ds-checkbox-italia"
              checked={selectedGroup.includes('sms')}
              onChange={() => toggleGroup('sms')}
            />
            <span>Critical incident SMS notifications (High severity only)</span>
          </label>
        </div>
        <span className="ds-helper-italia">Selected channels: {selectedGroup.length ? selectedGroup.join(', ') : 'None'}</span>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--muted-fg)', marginBottom: '8px' }}>
          States Overview
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-italia" defaultChecked name="chk-demo-italia" />
            <span>Checked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-italia" name="chk-demo-italia" />
            <span>Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <input type="checkbox" className="ds-checkbox-italia" ref={indRef} />
            <span>Indeterminate</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.55 }}>
            <input type="checkbox" className="ds-checkbox-italia" disabled />
            <span>Disabled Unchecked</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', opacity: 0.55 }}>
            <input type="checkbox" className="ds-checkbox-italia" defaultChecked disabled />
            <span>Disabled Checked</span>
          </label>
        </div>
      </div>
    </div>
  );
};
