const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/../build`,
    filename: 'main.js',
  },
  entry: path.resolve(__dirname, './src/main.ts'),
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts)?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },
  plugins: [new HardSourceWebpackPlugin(), new CleanWebpackPlugin(),],
  node: {
    __dirname: false,
    __filename: false,
  },
};
