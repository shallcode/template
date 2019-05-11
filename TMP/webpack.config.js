const path = require('path');
const webpack = require('webpack');
const bundleFileName = 'bundle';


const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

module.exports = {
    entry: ['./wwwroot/src/index.jsx'],
    output: {
        filename: bundleFileName + '.js',
        path: path.resolve(__dirname, 'wwwroot/dist')
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    optimization: {
        minimizer: [
            
        ]
    },
    plugins: [
        // extractCSS,
    ],
    module: {
        rules: [
            {
                // this is so that we can compile any React,
                // ES6 and above into normal ES5 syntax
                test: /\.(js|jsx)$/,
                // we do not want anything from node_modules to be compiled
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: bundleFileName + '.css'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                loaders: ['file-loader']
            },
        ]
    }
};