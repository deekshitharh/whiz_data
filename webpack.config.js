const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');
const path = require("path");
const webpack = require('webpack').default;

module.exports = {
  entry: "./src/index.js",

  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    path: __dirname + "/dist/js",

    //replace filename:'app.js'
    filename: "[name].js"

    //publicPath: path.resolve(__dirname, "dist/assets")
    // publicPath: path.resolve("/assets/")
  },
  devServer: {
    contentBase: "dist",
 
    //port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "bundle.css",
              esModule: false,
            }
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot|ico|gif|png|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader?name=assets/[name].[ext]"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/logo.ico"
    })
  ]
}