/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-designs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    // Use relative path for Chromatic builds, and GitHub Pages subpath for production
    if (process.env.STORYBOOK_IS_CHROMATIC === 'true') {
      config.base = './';
    } else {
      config.base = '/Onity-Design-System/';
    }
    return config;
  }
};

export default config;