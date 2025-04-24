const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const publicPath = 'dist';

const config = {
  entry: {
    all_js: './source/assets/javascripts/all.js',
    // all_css: './source/assets/stylesheets/all.css.scss',
    foo: './source/assets/stylesheets/foo.scss',
  },
  output: {
    path: resolve(publicPath),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              minimize: isProduction
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [resolve('node_modules')]
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].bundle-[hash].css' : '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new ManifestPlugin({
      publicPath: '/',
      writeToFileEmit: true,
    })
  ],
};

module.exports = config;
