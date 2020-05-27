const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const browserSyncPlugin = require("browser-sync-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');


const isDevelopment = process.env.NODE_ENV === 'development'



module.exports = {
  // Four core concepts in webpack
  // entry-point, output, loaders & plugins
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /\.main\.s(a|c)ss$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : miniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: isDevelopment
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.main.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : miniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment
      //       }
      //     }
      //   ]
      // },
      // {
      //   resolve: {
      //     //extensions: ['.js', '.jsx'],
      //     extensions: ['.js', '.jsx', '.scss']
      //   },
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },


  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 5000,
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      template: "./src/pages/details.html",
    }),

    new browserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: 'http://localhost:5000/'
      // server: {
      //   baseDir: ['dist']
      // }
    }, { reload: false }),

    new miniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
};
