import React, { useState } from 'react';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'activity'>('overview');

  const handleKeyDown = (e: React.KeyboardEvent, current: 'overview' | 'settings' | 'activity') => {
    const tabs: ('overview' | 'settings' | 'activity')[] = ['overview', 'settings', 'activity'];
    const idx = tabs.indexOf(current);
    if (e.key === 'ArrowRight') {
      const next = tabs[(idx + 1) % tabs.length];
      setActiveTab(next);
    } else if (e.key === 'ArrowLeft') {
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
      setActiveTab(prev);
    }
  };

  return (
    <div className="ds-nord" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="ds-tablist-nord" role="tablist" aria-label="System details">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'overview'}
          tabIndex={activeTab === 'overview' ? 0 : -1}
          className={`ds-tab-nord ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
          onKeyDown={e => handleKeyDown(e, 'overview')}
        >
          Overview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'settings'}
          tabIndex={activeTab === 'settings' ? 0 : -1}
          className={`ds-tab-nord ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
          onKeyDown={e => handleKeyDown(e, 'settings')}
        >
          Settings
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'activity'}
          tabIndex={activeTab === 'activity' ? 0 : -1}
          className={`ds-tab-nord ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
          onKeyDown={e => handleKeyDown(e, 'activity')}
        >
          Activity (3)
        </button>
      </div>

      <div className="ds-tabpanel-nord" role="tabpanel">
        {activeTab === 'overview' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Cluster Health:</strong> All 12 worker nodes operational. Zero dropped network frames in last 24h.
          </div>
        )}
        {activeTab === 'settings' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Security Profile:</strong> TLS 1.3 encryption, automatic certificate renewal, and private VPC routing enabled.
          </div>
        )}
        {activeTab === 'activity' && (
          <div style={{ padding: '12px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)' }}>
            <strong>Recent Events:</strong> Deployment <code>v2.4.1</code> rolled out smoothly across 3 availability zones 14 mins ago.
          </div>
        )}
      </div>
    </div>
  );
};
