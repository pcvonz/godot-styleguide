const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SvgStorePlugin = require('webpack-svg-icon-system/lib/SvgStorePlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('html-webpack-template')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].app.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000
  },
  // TODO: Change to something faster in the future
  // TODO: Add webpack-dev-server 
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //  name: 'common' // Specify the bundle name
    // }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Godot style guide',
        // Required
      template: './src/template.ejs'
    }),
    new ExtractTextPlugin('style.css'),
    new SvgStorePlugin()
  ],
  // TODO: Minimize css/js
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              options: {
                includePaths: [path.resolve(__dirname, 'node_modules/breakpoint-sass/stylesheets')]

              }
            }

          }],
          // use style loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
      ,
      {
        test: /\.svg$/,
        loader: 'webpack-svg-icon-system',
        options: {
          name: 'svg/sprite.svg'
        }
      }
    ]
  }
}
