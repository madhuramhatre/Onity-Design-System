import React from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => 
      React.createElement(
        'div',
        { style: { position: 'relative', paddingTop: '28px' } },
        React.createElement(
          'a',
          {
            href: '../index.html',
            target: '_blank',
            rel: 'noopener',
            style: {
              position: 'absolute',
              top: 0,
              right: 0,
              fontSize: '12px',
              color: '#2F20EF',
              textDecoration: 'none',
              fontWeight: 600,
            },
          },
          'Back to Docs'
        ),
        React.createElement(Story)
      ),
  ],
};

export default preview;