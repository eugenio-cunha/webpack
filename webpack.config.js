const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PUBLIC = 'public';

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, PUBLIC),
    hot: true,
    port: 3000
  },
  entry: path.resolve(__dirname, 'src', 'js', 'index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, PUBLIC, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  target: 'web'
}