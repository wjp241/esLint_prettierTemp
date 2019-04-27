const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/client/components/index.js'
  ],
  devtool: "cheap-source-map",
  output: {
    path: path.join(__dirname, "src/client/public"),
    filename: 'bundle.js',
    publicPath: '/',
  },
  cache: true,
  resolve: {
    extensions: ['.', '.jsx', '.js']
  },
  module: {
    rules: [
      { test: /\.(js|jsx|tsx|ts)$/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(woff|ttf|jpg|png|gif|svg|pdf|ico)$/, loader: 'file-loader' }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/
    }),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0
    })],
  devServer: {
    hot: true,
    //activate hot reloading

    contentBase: path.join(__dirname, "src/client/public"),
    //match the output path

    publicPath: '/',
    //match the output publicPath
  },
};
