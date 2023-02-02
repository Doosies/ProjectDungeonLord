const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

require('dotenv').config()

module.exports = function webpackConfig(env, args) {
  return {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      filename: '[name].bundle.[hash].js',
      path: path.join(__dirname, 'dist'),
    },
    resolve: { extensions: ['.tsx', '.js'] },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
        },
      ],
    },
    optimization: {
      minimizer: [
        new (require('terser-webpack-plugin'))({ extractComments: false }),
      ],
    },
    plugins: [
      new ReactRefreshPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    devServer: {
      hot: true,
      open: true,
      static: { directory: path.join(__dirname, 'public') },
    },
  }
}
