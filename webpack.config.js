const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js?[hash]',
    },
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ['thread-loader', 'cache-loader'],
                include: path.resolve('src'),
                exclude: /node_modules/,
            },
            {
                test: /\.html/,
                use:[
                    {loader: 'html-loader'}
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/html/index.html')
        }),
        new CopyPlugin([{ from: './src/public', to: '.' }]),
        new HardSourceWebpackPlugin(),
    ],
};