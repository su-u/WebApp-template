const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HOST_ENV = process.env.HOST_ENV || 'localhost';

module.exports = merge(common, {
  mode: 'development',
  // output: {
  //     sourceMapFilename: 'bundle.js.map',
  // },
  devtool: 'inline-source-map',
  watchOptions: {
    poll: 500,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.dev.json',
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.dev.json' })],
  },
  devServer: {
    port: 3000,
    contentBase: './front/dist',
    watchContentBase: true,
    hot: true,
    inline: true,
    host: HOST_ENV,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('development'),
    //   },
    // }),
  ],
});
