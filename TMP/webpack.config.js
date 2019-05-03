
const path = require('path');
const webpack = require('webpack');
const bundleFileName = 'bundle';


const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

module.exports = {
    entry: ['./wwwroot/src/app.jsx'],
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
            // // we specify a custom UglifyJsPlugin here to get source maps in production
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     uglifyOptions: {
            //         compress: false,
            //         ecma: 6,
            //         mangle: true
            //     },
            //     sourceMap: true
            // })
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
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings
            //     }, {
            //         loader: "css-loader" // translates CSS into CommonJS
            //     }, {
            //         loader: "sass-loader" // compiles Sass to CSS
            //     }]
            // },
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader"
            // },
            //   {
            //     test: /\.(css|scss)$/,
            //     use: [
            //       "style-loader", // creates style nodes from JS strings
            //       "css-loader", // translates CSS into CommonJS
            //       "sass-loader" // compiles Sass to CSS, using Node Sass by default
            //     ]
            //   },
        ]
    }
};