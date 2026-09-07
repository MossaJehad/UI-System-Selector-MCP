import React from 'react';

export const Breadcrumbs: React.FC = () => {
  const trail = [
    { label: 'Home', href: '#/' },
    { label: 'Infrastructure', href: '#/systems' },
    { label: 'Clusters', href: '#/systems' },
    { label: 'Production East', href: '#/systems', current: true },
  ];

  return (
    <div className="ds-backstage" style={{ padding: '8px 0' }}>
      <nav aria-label="Breadcrumb" className="ds-breadcrumbs-backstage">
        <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <li key={item.label} className="ds-breadcrumb-item-backstage" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {isLast ? (
                  <span className="ds-breadcrumb-current-backstage" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <a href={item.href} className="ds-breadcrumb-link-backstage">
                      {item.label}
                    </a>
                    <span className="ds-breadcrumb-separator-backstage" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};
