const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    all: [
      path.resolve(__dirname, './assets/javascripts/all.js'),
      path.resolve(__dirname, './assets/stylesheets/all.scss'),
    ],
    swagger: path.resolve(__dirname, './assets/javascripts/swagger.js'),
    contact: path.resolve(__dirname, './assets/javascripts/contact.js'),
    'reopt-v1': path.resolve(__dirname, './assets/javascripts/reopt-v1.js'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'shared',
    },
    runtimeChunk: {
      name: 'all',
    },
  },

  output: {
    path: path.resolve(__dirname, 'tmp/webpack-dist'),
    filename: 'assets/javascripts/[name].js',
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name].css',
      chunkFilename: 'assets/stylesheets/[id].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ]
  },
}
