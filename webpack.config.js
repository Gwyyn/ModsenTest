const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: {myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-Map',
    devServer: {
        port: 3000,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "city_guide",
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin(),
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
}