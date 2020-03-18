const path = require("path");
const HtmlWP = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  devServer:{
    contentBase:  path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWP({
      title: "home",
      template: path.resolve(__dirname, "public/index.html")
    }),
  ]
};
