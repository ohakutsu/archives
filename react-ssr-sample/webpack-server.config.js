const baseConfig = require("./webpack-base.config");
const path = require("path");

module.exports = {
  ...baseConfig,
  entry: {
    server: "./server/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  target: ["node"],
};
