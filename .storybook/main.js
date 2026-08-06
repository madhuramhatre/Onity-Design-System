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
    // Ensures assets point correctly to your GitHub Pages subpath
    config.base = '/Onity-Design-System/';
    return config;
  }
};

export default config;
