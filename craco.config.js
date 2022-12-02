const CracoAlias = require('craco-alias');

module.exports = {
  babel: {
    plugins: ['@emotion'],
  },
  plugins: [
    {
      /*
        A craco plugin for automatic aliases generation for Webpack and Jest.
        https://github.com/risenforces/craco-alias
      */
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
