const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

const cssExtract = ExtractTextPlugin.extract({
  use: cssLoaders,
  fallback: 'vue-style-loader'
})

const vueLoaders = {
  css: cssExtract
}

export default {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, config.DIST_PATH)
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: process.env.NODE_ENV !== 'production' // extract-text-plugin is not for development.
    }),
    new HtmlPlugin({
      title: config.TITLE,
      template: 'app/app.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssExtract
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: vueLoaders }
      }, {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      }
    ]
  },

  performance: { hints: false },
  resolve: { alias: { vue$: 'vue/dist/vue.common.js' } },

  devtool: '#eval-source-map',
  devServer: {
    hot: true,
    port: 8888,
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: { '**': `http://localhost:${config.DEV_PORT}` }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
}
