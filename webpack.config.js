const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const modeConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode)
  );
};
