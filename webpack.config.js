const path = require("path");
const MiniCssExtP = require("mini-css-extract-plugin");
const HtmlWP = require("html-webpack-plugin");
const webpack = require("webpack");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    publicPath: "http://localhost:3001/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
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
          loader: "url-loader",
          options: {
            limit: 90000,
            name: "[hash].[ext]",
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtP.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtP.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtP({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new HtmlWP({
      template: path.resolve(__dirname, "public/index.html")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json")
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "dist/js/*.dll.js"),
      outputPath: "js",
      publicPath: "http://localhost:3001/js"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.*"]
    })
  ]
};
