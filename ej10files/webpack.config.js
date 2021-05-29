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
                test: /\.jpg|png|jpeg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 9000,
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: 'body',
            templateContent: ({ htmlWebpackPlugin }) => `
<html>
    <head>
        <title>Webpack Files</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
`,
        }),
    ],
};
