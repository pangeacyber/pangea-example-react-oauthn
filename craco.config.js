const path = require("path");

module.exports = {
  devServer: {
    port: 3001
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@features": path.resolve(__dirname, "src/features/"),
    },
  },
};
