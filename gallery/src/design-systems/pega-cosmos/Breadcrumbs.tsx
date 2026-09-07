import React from 'react';

export const Breadcrumbs: React.FC = () => {
  const trail = [
    { label: 'Home', href: '#/' },
    { label: 'Infrastructure', href: '#/systems' },
    { label: 'Clusters', href: '#/systems' },
    { label: 'Production East', href: '#/systems', current: true },
  ];

  return (
    <div className="ds-pega-cosmos" style={{ padding: '8px 0' }}>
      <nav aria-label="Breadcrumb" className="ds-breadcrumbs-pega-cosmos">
        <ol style={{ display: 'flex', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap' }}>
          {trail.map((item, idx) => {
            const isLast = idx === trail.length - 1;
            return (
              <li key={item.label} className="ds-breadcrumb-item-pega-cosmos" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                {isLast ? (
                  <span className="ds-breadcrumb-current-pega-cosmos" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <a href={item.href} className="ds-breadcrumb-link-pega-cosmos">
                      {item.label}
                    </a>
                    <span className="ds-breadcrumb-separator-pega-cosmos" aria-hidden="true">
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
