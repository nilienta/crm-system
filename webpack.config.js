const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Так как в проект установлен Webpack, ему нужно сообщить,
// что мы хотим использовать ESLint в процессе сборки
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      inject: false,
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    extensions: ['.*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      process: 'process/browser',
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    libraryExport: 'default',
    publicPath: '/',
  },
  devServer: {
    static: path.join(__dirname, './dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
};
