const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'},
    devtool: 'inline-source-map',
    devServer: {
      static: './dist'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [ /node_modules/, /dist/],
          loader: 'babel-loader'
        },
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader',],
        },
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: /url/, // use *.svg?url to trigger this one
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'img/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "fonts/[name].[hash:8].[ext]"
          }
        }
      ]
    },
    resolve: {
      extensions: ['.jsx', '.ts', '.js']
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
