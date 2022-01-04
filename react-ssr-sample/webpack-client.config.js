const baseConfig = require("./webpack-base.config");
const path = require("path");

module.exports = {
  ...baseConfig,
  entry: {
    client: "./client/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist", "public"),
    filename: "[name].js",
  },
  target: ["web"],
};
