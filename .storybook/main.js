module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls', 
    '@storybook/addon-actions'
  ],
  
  framework: '@storybook/react'
};
