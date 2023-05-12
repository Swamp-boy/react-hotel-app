const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const PATHS = {
  src: path.join(__dirname, "./../src"),
  dist: path.join(__dirname, "./../dist"),
  assets: "assets/",
};

module.exports = {
  target: "web",
  externals: {
    paths: PATHS,
  },
  entry: {
    app: ["@babel/polyfill", `${PATHS.src}/index.tsx`],
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "node_modules"),
    },

    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",

        exclude: [/node_modules/],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../../",
            },
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                localIdentName: "[name]_[local]",
              },
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: { path: "./postcss.config.js" },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: `${PATHS.assets}img/`,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: `${PATHS.assets}fonts/`,
              // outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.csv$/,
        use: [
          {
            loader: "csv-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
    }),
  ],
};
