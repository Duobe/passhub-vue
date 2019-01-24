const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: {
    renderer: '../src/renderer/main.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    '@babel/plugin-proposal-class-properties',
    new VueLoaderPlugin()
  ]
}
