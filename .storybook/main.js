/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-designs'
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },
  async viteFinal(config) {
    config.base = './';
    return config;
  }
};

export default config;