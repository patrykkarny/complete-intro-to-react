const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000',
    './js/ClientApp.jsx',
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    hot: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
