const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    watchFiles: './src/**/*',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/i,
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|webp|avif|gif)/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|otf)/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.ProvidePlugin({ React: 'react' }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      failOnError: true,
      failOnWarning: false,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
