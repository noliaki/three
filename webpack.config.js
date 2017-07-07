const webpack = require('webpack')
const conf = {
  context: `${__dirname}/src`,
  entry: './ts/index.ts',
  output: {
    path: `${__dirname}/docs/js`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    })
  ]
}

if (process.env.NODE_ENV !== 'production') {
  conf.watch = true
  conf.cache = true
  conf.plugins = [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
}

module.exports = conf
