var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = ({ mode }) => {
    console.log(mode);

    return {
        mode,
        // entry: "./src/index.js",
        output: {
            filename: "bundle.js"
        },
        plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    };
};
