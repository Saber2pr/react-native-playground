const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const webpack = require('webpack')

const publicPath = (resourcePath, context) =>
  path.relative(path.dirname(resourcePath), context) + '/'

/**
 * @type {webpack.Configuration}
 */
module.exports = {
  entry: {
    app: './src/app.tsx',
    backend: "./src/initLatestDevTools.ts"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      // 使用babel编译js、jsx、ts、tsx
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader'],
      },
      // 图片url处理
      {
        test: /\.(woff|svg|eot|ttf|png)$/,
        use: ['url-loader'],
      },
      // css、less编译
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath },
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // index.html模板设置
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: 'style.[id][hash].css',
    }),
    // webpack编译进度
    new webpack.ProgressPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules|lib/,
  },
}
