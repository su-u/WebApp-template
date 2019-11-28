const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.prod.json",
                        transpileOnly: true,
                        happyPackMode: true
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.tsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                ["react-remove-properties", {"properties": ["data-test"]}]
                            ]
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({ configFile:'tsconfig.prod.json' }),
        ]
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
});