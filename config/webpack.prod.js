const path = require('path')

const common = require('./webpack.common.js')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

const rootPath =  path.resolve(path.dirname('./'))
const buildPath = path.resolve(rootPath, './build')

const serverURL = process.env['SERVER_URL']
const appURL = process.env['APP_URL']

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new CleanWebpackPlugin([buildPath], {
      root: rootPath,
      verbose: true,
      dry: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'SERVER_URL': JSON.stringify(serverURL),
        'APP_URL': JSON.stringify(appURL),
      },
    }),
  ],
})