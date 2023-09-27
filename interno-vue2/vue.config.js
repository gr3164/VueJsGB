const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
  //     patterns: []
  //   }
  // }
})

const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      'preProcessor': 'scss',
      'patterns': [
        path.resolve('scss', './src/assets/scss/style.scss'),
      ]
    }
  }
}




