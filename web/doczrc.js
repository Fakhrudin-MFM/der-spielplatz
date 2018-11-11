const merge = require('webpack-merge');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

const webpackOverlay = {
  resolve: {
    plugins: [
      new DirectoryNamedWebpackPlugin({
        honorIndex: true,
        exclude: /node_modules/,
      }),
    ],
  },
};

export default {
  title: 'Docz • Der Spielplatz',
  modifyBundlerConfig: config => {
    return merge(config, webpackOverlay);
  },
};
