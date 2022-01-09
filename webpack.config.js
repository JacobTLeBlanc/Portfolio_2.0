const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app'),
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, 'src')
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /(\.css)$/, use: ['style-loader', 'css-loader']}
        ]
    },
    mode: 'development'
}