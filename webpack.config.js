const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  output: {
    path: `${__dirname}/dist/web`,
    filename: 'bundle.js?[hash]',
  },
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, './front/src/index.tsx')],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve('./src'),
        exclude: /(node_modules|dist)/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['thread-loader', 'cache-loader', 'babel-loader'],
        include: path.resolve('./front/src'),
        exclude: /node_modules/,
      },
      {
        test: /\.html/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './front/src/html/index.html'),
    }),
    new CopyPlugin([{ from: './front/src/public', to: '.' }]),
    new HardSourceWebpackPlugin(),
  ],
};
