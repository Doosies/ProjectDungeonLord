const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

require('dotenv').config()

module.exports = function webpackConfig(env, args) {
  return {
    entry: path.join(__dirname, 'src/index.tsx'),
    devtool: 'source-map',
    output: {
      filename: '[name].bundle.[hash].js',
      path: path.join(__dirname, 'dist'),
      assetModuleFilename: 'assets/images/[hash][ext][query]',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      alias: {
        '@src': path.join(__dirname, 'src'),
        '@assets': path.join(__dirname, 'public/assets'),
        '@components': path.join(__dirname, 'src/components'),
      },
    },
    module: {
      rules: [
        // 바벨 로더
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader'),
        },
        // CSS 파일 로더 설정
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        // 이미지 로더
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: 'asset/resource',
        },
        // SVG 로더
        {
          test: /\.svg$/i,
          type: 'asset/inline',
          // use: ['@svgr/webpack'],
        },
        // 웹폰트 로더
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'asset/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: path.resolve(__dirname, 'node_modules'),
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
