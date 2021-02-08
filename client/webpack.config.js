const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = {
  mode: process.env.ENV !== "production" ? "development" : "production",
  entry: {
    app: "./src/index.js",
  },
  devtool:
    process.env.ENV !== "production" ? "inline-source-map" : "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: process.env.PORT || 4000,
    publicPath: `http://localhost:${process.env.PORT || 4000}`,
    historyApiFallback: true,
    hotOnly: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:7000",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "manifest.json" },
        { from: "./public/favicon.ico", to: "favicon.ico" },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Amazon Clone",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, "/src/sw.js"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),
    process.env.ENV !== "production" ? new BundleAnalyzerPlugin() : "",
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(gif|jpeg|jpg|png|pdf|svg|ico)$/,
        use: "file-loader?img=[name].[ext]",
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename:
      process.env.ENV === "production"
        ? "[name].[chunkhash].js"
        : "[name].[hash].js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    //Provide the comment to the chunks
    auxiliaryComment: "Amazon-clone-Version:1.0.0",
    // chunkCallbackName:s "amazon-clone-function",
  },
  optimization: {
    // usedExports: true,
    runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    // },
    moduleIds: "hashed",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]((?!country-state-city|react-dom|@firebase).*)[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
        },
        reactDom: {
          test: /[\\/]node_modules[\\/]((react-dom).*)[\\/]/,
          name: "reactdom",
          chunks: "all",
          reuseExistingChunk: true,
        },
        firebase: {
          test: /[\\/]node_modules[\\/]((@firebase).*)[\\/]/,
          chunks: "all",
          name: "firebase",
          reuseExistingChunk: true,
        },
      },
    },
  },
};
