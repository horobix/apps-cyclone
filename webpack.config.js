const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    header: "./src/javascripts/header.js",
    splide: "./src/javascripts/splide.js",
    lecturers: "./src/javascripts/lecturers.js",
  },
  output: {
    path: path.resolve(__dirname, "./src/javascripts/dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
