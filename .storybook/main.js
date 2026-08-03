/** @type { import('@storybook/html-vite').StorybookConfig } */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Onity-Design-System';

const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-designs"
  ],
  "framework": "@storybook/html-vite",
  async viteFinal(config) {
    config.base = process.env.STORYBOOK_BASE_PATH || (process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/');
    return config;
  }
};
export default config;