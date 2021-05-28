const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Ej 5 - Plugins',
            inject: 'body',
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
};
