import React, { useState } from 'react';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'metrics' | 'security'>('overview');

  return (
    <div className="ds-7-css" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="ds-tablist-7-css" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'overview'}
          className={`ds-tab-7-css ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'metrics'}
          className={`ds-tab-7-css ${activeTab === 'metrics' ? 'active' : ''}`}
          onClick={() => setActiveTab('metrics')}
        >
          Metrics &amp; Logs
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'security'}
          className={`ds-tab-7-css ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Security Policies
        </button>
      </div>

      <div className="ds-tabpanel-7-css" role="tabpanel">
        {activeTab === 'overview' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Cluster status: <strong>Healthy</strong>. 24 container instances actively serving requests across 3 availability zones with 99.99% uptime.
            </p>
          </div>
        )}
        {activeTab === 'metrics' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              Throughput: <strong>14,280 req/sec</strong>. Mean latency: <strong>18ms</strong>. P99 latency: <strong>42ms</strong>. Zero dropped packets in the last 24 hours.
            </p>
          </div>
        )}
        {activeTab === 'security' && (
          <div>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              mTLS 1.3 enforced. RBAC sync operational. Next credential rotation scheduled in 14 days. Zero vulnerabilities detected.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
