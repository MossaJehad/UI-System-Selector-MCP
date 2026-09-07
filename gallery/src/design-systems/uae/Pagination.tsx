import React, { useState } from 'react';

export const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

  return (
    <div className="ds-uae" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ fontSize: '13px', color: 'var(--fg-muted)' }}>
        Showing page <strong>{currentPage}</strong> of {totalPages} (Records 21–30 of 50)
      </div>

      <nav className="ds-pagination-uae" aria-label="Pagination Navigation">
        <button
          type="button"
          className="ds-page-btn-uae"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          aria-label="Previous page"
        >
          ‹ Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            type="button"
            className={`ds-page-btn-uae ${currentPage === page ? 'active' : ''}`}
            aria-current={currentPage === page ? 'page' : undefined}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          className="ds-page-btn-uae"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          aria-label="Next page"
        >
          Next ›
        </button>
      </nav>
    </div>
  );
};
