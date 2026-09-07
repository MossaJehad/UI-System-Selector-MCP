import React, { useState } from 'react';

interface RowData {
  id: string;
  name: string;
  status: 'Active' | 'Pending' | 'Inactive';
  role: string;
}

const INITIAL_ROWS: RowData[] = [
  { id: '1', name: 'Sarah Lee', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Omar Ali', status: 'Pending', role: 'Developer' },
  { id: '3', name: 'Alex Smith', status: 'Inactive', role: 'Viewer' },
];

export const Table: React.FC = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>(['1']);

  const rows = [...INITIAL_ROWS].sort((a, b) => {
    return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === rows.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(rows.map(r => r.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="ds-semantic" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--fg-muted)' }}>
        <span>Selected: <strong>{selectedIds.length}</strong> of {rows.length}</span>
        <span>Click Name to sort ({sortAsc ? 'A–Z ▲' : 'Z–A ▼'})</span>
      </div>

      <div className="ds-table-wrapper-semantic" style={{ overflowX: 'auto', width: '100%' }}>
        <table className="ds-table-semantic" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th className="ds-th-semantic" style={{ width: '40px', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  className="ds-checkbox-semantic"
                  checked={selectedIds.length === rows.length}
                  onChange={toggleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
              <th
                className="ds-th-semantic"
                onClick={() => setSortAsc(!sortAsc)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
              >
                Name {sortAsc ? '▲' : '▼'}
              </th>
              <th className="ds-th-semantic">Status</th>
              <th className="ds-th-semantic">Role</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => {
              const isSelected = selectedIds.includes(row.id);
              return (
                <tr key={row.id} className={`ds-tr-semantic ${isSelected ? 'selected' : ''}`}>
                  <td className="ds-td-semantic" style={{ textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      className="ds-checkbox-semantic"
                      checked={isSelected}
                      onChange={() => toggleSelectRow(row.id)}
                      aria-label={`Select ${row.name}`}
                    />
                  </td>
                  <td className="ds-td-semantic" style={{ fontWeight: 600 }}>{row.name}</td>
                  <td className="ds-td-semantic">
                    <span className={`ds-badge-semantic ds-badge-semantic-${row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'neutral'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="ds-td-semantic">{row.role}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
