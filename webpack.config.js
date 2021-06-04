const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.ts'],
  },
  entry: {
    app: ["./index.ts"]
  },
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      scriptLoading:"blocking",
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8082,
  },
};