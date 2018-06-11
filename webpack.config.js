const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

options: {
  presets: ['react']
}

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
      test: /\.(png|svg|jpg|gif)$/,
      use: 'file-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
                presets: ['react', 'es2015']
            }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
                presets: ['react', 'es2015']
            }
      }
    ]
  }
};
