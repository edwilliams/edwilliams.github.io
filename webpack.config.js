const path = require('path')
const { DefinePlugin } = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // test: /\.(sass|less|css)$/,
        test: /\.(css)$/,
        loaders: [
          'style-loader',
          'css-loader'
          //  'less-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      utils: path.resolve(__dirname, './src/utils'),
      config: path.resolve(__dirname, './src/config'),
      api: path.resolve(__dirname, './src/api'),
      components: path.resolve(__dirname, './src/components')
    }
  },
  devServer: {
    contentBase: 'public',
    host: '0.0.0.0', // enable WDS to listen for requests from the network
    proxy: {
      '/v1': 'http://localhost:3000'
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP': JSON.stringify(process.env.APP)
    })
  ]
}
