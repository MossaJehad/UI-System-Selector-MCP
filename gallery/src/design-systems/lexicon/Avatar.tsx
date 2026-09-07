import React from 'react';

export const Avatar: React.FC = () => {
  return (
    <div className="ds-lexicon" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Size Variants &amp; Online Status
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div className="ds-avatar-wrapper-lexicon">
            <div className="ds-avatar-lexicon ds-avatar-sm-lexicon" aria-label="Sarah Lee">
              SL
            </div>
            <span className="ds-avatar-status-lexicon online" title="Online" />
          </div>

          <div className="ds-avatar-wrapper-lexicon">
            <div className="ds-avatar-lexicon ds-avatar-md-lexicon" aria-label="Omar Ali">
              OA
            </div>
            <span className="ds-avatar-status-lexicon online" title="Online" />
          </div>

          <div className="ds-avatar-wrapper-lexicon">
            <div className="ds-avatar-lexicon ds-avatar-lg-lexicon" aria-label="Mossa Jehad">
              MJ
            </div>
            <span className="ds-avatar-status-lexicon busy" title="Busy" />
          </div>

          <div className="ds-avatar-wrapper-lexicon">
            <div className="ds-avatar-lexicon ds-avatar-md-lexicon square" aria-label="Engineering Org">
              EN
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', marginBottom: '8px' }}>
          Avatar Group (Collaborators)
        </div>
        <div className="ds-avatar-group-lexicon" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="ds-avatar-lexicon ds-avatar-md-lexicon" title="Sarah Lee" style={{ zIndex: 3 }}>
            SL
          </div>
          <div className="ds-avatar-lexicon ds-avatar-md-lexicon" title="Omar Ali" style={{ zIndex: 2, marginLeft: '-10px' }}>
            OA
          </div>
          <div className="ds-avatar-lexicon ds-avatar-md-lexicon" title="Alex Smith" style={{ zIndex: 1, marginLeft: '-10px' }}>
            AS
          </div>
          <div className="ds-avatar-lexicon ds-avatar-md-lexicon more" title="2 more members" style={{ zIndex: 0, marginLeft: '-10px' }}>
            +2
          </div>
        </div>
      </div>
    </div>
  );
};
