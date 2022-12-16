const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = defineConfig({
  publicPath: '/',
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.txt/,
          type: 'asset/source'
        },
        {
          test: /\.md$/,
          loader: 'raw-loader',
        }
      ]
    },
    plugins: [
      new NodePolyfillPlugin(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ],
    resolve: {
      fallback: { // browser polyfills
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    }
  },
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag === 'lottie-player'
        }
        return options
      })
  }
})
