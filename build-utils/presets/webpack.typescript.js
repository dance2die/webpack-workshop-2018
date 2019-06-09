module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"]
      }
    ]
  }
});
