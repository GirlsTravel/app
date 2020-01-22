const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [],
  resolve: {
    extensions: ['.js']
  },
  externals: [nodeExternals()]
}

module.exports = config
