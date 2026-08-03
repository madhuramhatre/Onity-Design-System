/** @type { import('@storybook/html-vite').StorybookConfig } */

// Automatically extract repository name for GitHub Pages path resolution
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Onity-Design-System';

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
    // Sets base path to '/Onity-Design-System/' in GitHub Actions to fix dynamic import errors
    config.base = process.env.STORYBOOK_BASE_PATH || (process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/');
    return config;
  }
};

export default config;