const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, '../dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
})
