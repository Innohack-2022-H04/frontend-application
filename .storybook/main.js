const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');

function getPackageDir(packageDir) {
  return path.dirname(require.resolve(path.join(packageDir, 'package.json')));
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    /*
      react-themeing must be first in these addons list. 
      (which allow the addons to be located first in render; storybook default focus to first addon tab)
      
      This is a workaround for blank page shown when certain components is selected without theming being toggled once.
    */
    '@react-theming/storybook-addon',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],

  webpackFinal: async (config) => {
    // resolve tsconfig path
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.paths.json'),
      }),
    );

    /*
      Alias required for babel plugin, due to compatibility issue with Emotion 11
      https://github.com/storybookjs/storybook/issues/13145
      https://github.com/storybookjs/storybook/issues/12262
      https://stackoverflow.com/questions/65894711/module-not-found-error-cant-resolve-emotion-styled-base-when-running-story
    */
    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    });
  },

  //add babel plugin for emotion
  babel: async (options) => ({
    ...options,
    plugins: ['@emotion'],
  }),
};
