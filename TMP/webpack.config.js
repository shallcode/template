const path = require('path');
const webpack = require('webpack');
const bundleFileName = 'bundle';


const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');

module.exports = {
  entry: ['./UI/src/index.scss', './UI/src/index.tsx'], // Where webpack begins transpilation
  output: {
    filename: bundleFileName + '.js',
    path: path.resolve(__dirname, 'wwwroot/dist') // Where webpack outputs the transpiled Javascript
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'] // Extensions webpack will attempt to transpile
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
        test: /\.(ts|tsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/, // Rules for transpiling scss
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          }
        ],
      },
      { // Rules for transpiling fonts
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        loader: 'ignore-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ['file-loader']
      },
    ]
  }
};