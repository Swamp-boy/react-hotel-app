const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",

  devServer: {
    open: true,

    hot: true,
    static: {
      directory: path.join(__dirname, "./../dist/"),
    },
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },

  devtool: "eval-cheap-module-source-map",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
