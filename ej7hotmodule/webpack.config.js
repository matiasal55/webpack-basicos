const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: '/node_modules/',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Hot Module',
            inject: 'body',
        }),
    ],
    devServer: {
        hot: true,
        open: true,
        port: 9000,
    },
};
