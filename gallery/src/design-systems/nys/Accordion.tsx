import React, { useState } from 'react';

export const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: 'How are design tokens structured?',
      content: 'Design tokens provide centralized variables for color palettes, spacing scales, typographic hierarchies, and interactive states across platforms.',
    },
    {
      title: 'What accessibility standards are supported?',
      content: 'Components adhere to WCAG 2.1/2.2 AA requirements including high contrast ratios, visible keyboard focus rings, and screen-reader accessibility semantics.',
    },
    {
      title: 'Is dark theme supported natively?',
      content: 'Yes, tokens automatically adapt to system dark mode preferences or explicit theme data attributes without breaking visual contrast.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="ds-nys" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="ds-accordion-nys">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`ds-accordion-item-nys ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="ds-accordion-trigger-nys"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
              >
                <span>{item.title}</span>
                <span className={`ds-accordion-chevron-nys ${isOpen ? 'rotated' : ''}`}>▾</span>
              </button>
              {isOpen && (
                <div className="ds-accordion-panel-nys">
                  <p style={{ margin: 0, lineHeight: 1.5, fontSize: '13px' }}>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
