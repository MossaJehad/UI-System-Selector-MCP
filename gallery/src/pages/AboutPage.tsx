import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <div className="system-detail-header">
        <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '12px' }}>
          About Design Systems Gallery
        </h1>
        <p style={{ color: 'var(--fg-default)', fontSize: '16px', lineHeight: 1.6 }}>
          <strong>Design Systems Gallery</strong> is an interactive visual encyclopedia and component reference library demonstrating how the <em>same UI components</em> look and behave across <strong>44 real production design systems</strong>.
        </p>
      </div>

      <div className="component-card">
        <div className="card-header">
          <h2 style={{ fontSize: '16px', fontWeight: 700 }}>Why This Gallery Exists</h2>
        </div>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', lineHeight: 1.6 }}>
          <p>
            When developers and AI coding agents build modern web applications, they almost universally default to the same small set of generic libraries (like unstyled Tailwind divs, shadcn/ui, or standard MUI).
          </p>
          <p>
            Meanwhile, global software leaders and public institutions have engineered dozens of <strong>battle-tested, domain-optimized design systems</strong>:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>GitHub Primer:</strong> Engineered for developers, code diffs, and low cognitive overhead.</li>
            <li><strong>AWS Cloudscape:</strong> High-density operational cloud management consoles.</li>
            <li><strong>IBM Carbon:</strong> Structured enterprise data analytics with Section 508 accessibility.</li>
            <li><strong>Shopify Polaris:</strong> Gold standard merchant e-commerce administration.</li>
            <li><strong>GOV.UK &amp; USWDS:</strong> High-legibility public accessibility and federal standards.</li>
            <li><strong>Porsche &amp; Audi:</strong> Ultra-precise automotive luxury minimalism.</li>
          </ul>
        </div>
      </div>

      <div className="component-card">
        <div className="card-header">
          <h2 style={{ fontSize: '16px', fontWeight: 700 }}>10 Core Components Implemented</h2>
        </div>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', lineHeight: 1.6 }}>
          <p>
            To provide comprehensive breadth and precision, the gallery implements 10 fundamental interactive components across all 44 systems:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginTop: '8px' }}>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>1. Buttons</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Primary, Secondary, Tertiary/Ghost, Danger, Disabled &amp; click counters.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>2. Input Fields</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Default, with Label, Placeholder, Filled, Error, and Disabled states.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>3. Select Dropdowns</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Real functional HTML dropdowns with options and custom indicators.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>4. Radio Buttons</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Interactive single-choice groups, checked, and disabled states.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>5. Checkboxes</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Single consent, multi-select groups, indeterminate, and disabled states.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>6. Switches / Toggles</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Binary toggle switches with sliding thumb animations and states overview.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>7. Textareas</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Interactive character counter, placeholder, error, and read-only states.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>8. Tabs Navigation</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Accessible tab panels with keyboard arrow navigation (Left/Right).</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>9. Dialogs / Modals</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Interactive modal dialogs with backdrop blur/tint, close action, and Esc dismissal.</div>
            </div>
            <div style={{ padding: '14px', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: 700, marginBottom: '4px' }}>10. Tooltips</div>
              <div style={{ fontSize: '12px', color: 'var(--fg-muted)' }}>Hover and keyboard focus directional popover bubbles with pointer arrows.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="component-card">
        <div className="card-header">
          <h2 style={{ fontSize: '16px', fontWeight: 700 }}>Fidelity &amp; Architecture Rules</h2>
        </div>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px', lineHeight: 1.6 }}>
          <p>
            Every single design system in this gallery has its own dedicated visual styling rules. Systems are not forced into one universal template:
          </p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>Carbon &amp; Base Web:</strong> Strictly 0px border radius with sharp rectangular geometry.</li>
            <li><strong>Material Design 3:</strong> 9999px full-pill buttons and floating label styling.</li>
            <li><strong>GOV.UK:</strong> Iconic yellow focus ring (#ffdd00) and heavy 2px black borders.</li>
            <li><strong>98.css:</strong> Authentic 3D beveled Windows 98 operating system borders.</li>
            <li><strong>Zero heavy media:</strong> The components themselves are the product. No unnecessary decorative images or illustrations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
