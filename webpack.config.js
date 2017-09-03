'use strict' // eslint-disable-line
const { resolve } = require('path')
const configs = require('@inspire-script/webpack-configs')

module.exports = env =>
  configs({
    env,
    paths: {
      babelLoaderInclude: [resolve('src'), resolve('lib')],
      publicPath: env === 'production' ? '/componentry/' : '/'
    }
  })
