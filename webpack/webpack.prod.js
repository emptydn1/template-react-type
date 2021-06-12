const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NAME: JSON.stringify("production") },
    }),
    new BundleAnalyzerPlugin(),
  ],
};
