const webpack = require('webpack')

module.exports = {
  context: `${__dirname}/src`,
  entry: './js/index.js',
  output: {
    path: `${__dirname}/docs/js`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
