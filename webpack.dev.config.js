const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "webpack/hot/dev-server",
    "./client/index.jsx"
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      }
    ]
  },
  devtool: "#inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
