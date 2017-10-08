const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
  output: {
    filename: "build/bootstrap.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/,  loader: "babel-loader", exclude: /(node_modules|bower_components)/, query: {presets: ["es2015"]} },
      { test: /\.(svg|eot|ttf|woff|woff2|otf)$/,    loader: "url-loader" }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
	contentBase: path.join(__dirname, "."),
	compress: true,
	port: 9000
  }
};
