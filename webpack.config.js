const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'index'),
    output: {
        path: __dirname + '/dist',
    },
    devServer: {
        static: path.resolve(__dirname, 'src')
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
            {test: /(\.css)$/, use: ['style-loader', 'css-loader']}
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: 'development'
}