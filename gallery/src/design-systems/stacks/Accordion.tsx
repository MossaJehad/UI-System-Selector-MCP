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
    <div className="ds-stacks" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div className="ds-accordion-stacks">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`ds-accordion-item-stacks ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="ds-accordion-trigger-stacks"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
              >
                <span>{item.title}</span>
                <span className={`ds-accordion-chevron-stacks ${isOpen ? 'rotated' : ''}`}>▾</span>
              </button>
              {isOpen && (
                <div className="ds-accordion-panel-stacks">
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
