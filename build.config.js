var nodeExternals = require('webpack-node-externals');

module.exports = {
  webpack: {
    externals: [
      nodeExternals(),
    ]
  }
}