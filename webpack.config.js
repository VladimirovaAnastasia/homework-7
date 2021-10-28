const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    devtool: `source-map`,
    entry: {
        index:"./src/app/index.js",
        stats:"./src/stats/stats.js"
    },
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'),
        port: 7777
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app/index.html',
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: 'stats.html',
            template: './src/stats/stats.html',
            chunks: ["stats"]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        }
    }
};
