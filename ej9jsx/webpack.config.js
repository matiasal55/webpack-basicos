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
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: 'body',
            templateContent: ({ htmlWebpackPlugin }) => `
<html>
    <head>
        <title>Webpack React</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
`,
        }),
    ],
};
