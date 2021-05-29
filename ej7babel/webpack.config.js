const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        open: true,
        port: 9000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack Babel',
            inject: 'body',
        }),
    ],
};
