const webpackConfig = require('./webpack.config.js')

webpackConfig.watch = true
webpackConfig.cache = true
webpackConfig.debug = true
webpackConfig.devtool = 'source-map'

module.exports = webpackConfig
