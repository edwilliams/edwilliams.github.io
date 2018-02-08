var webpack = require('webpack')
var PROD = JSON.parse(process.env.PROD_ENV || '0')

var loaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader?presets[]=es2015&presets[]=react'
}]

var config = {
  dev: {
    devtool: 'source-map',
    entry: [
      './index.js',
      'webpack-dev-server/client?http://0.0.0.0:8080',
    ],
    output: {
      filename: 'dist/bundle.js',
      publicPath: ''
    },
    module: { loaders: loaders }
  },
  prod: {
    devtool: 'source-map',
    entry: {
      'application': './index.js'
    },
    output: {
      filename: 'dist/[name].js'
    },
    module: { loaders: loaders },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: { warnings: false },
      //   output: { comments: false },
      //   minimize: true
      // })
    ]
  }
}

module.exports = ( PROD ) ? config.prod : config.dev
