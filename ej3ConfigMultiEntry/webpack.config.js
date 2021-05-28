const path = require('path');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/index.js'),
        about: path.resolve(__dirname, 'src/about.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'development',
};
