const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'ngsandbox',
    publicPath: "auto",
    scriptType:'text/javascript'
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ngsandbox',
      // library: { type: 'var', name: 'ngsandbox' },
      filename: 'remoteEntry.js',
      exposes: {
        './ngsandbox': './src/loadApp.ts'
      },
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
      },
    }),
  ],
};
