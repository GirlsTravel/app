const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const Dotenv = require('dotenv-webpack')

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
  plugins: [
    new Dotenv()
  ],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utilities')
    },
    extensions: ['.js']
  },
  externals: [nodeExternals()]
}

module.exports = config
