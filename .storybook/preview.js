/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const container = document.createElement('div');
      container.style.position = 'relative';
      container.style.paddingTop = '28px';

      const link = document.createElement('a');
      link.href = '../index.html';
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Back to Docs';
      link.style.cssText = 'position:absolute;top:0;right:0;font-size:12px;color:#2F20EF;text-decoration:none;font-weight:600;';

      container.appendChild(link);
      container.appendChild(Story());
      return container;
    },
  ],
};

export default preview;