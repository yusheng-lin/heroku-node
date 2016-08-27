const path = require('path');

module.exports = {
  entry: [
    './public/src/index.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  resolveLoader: {
        root: path.resolve(__dirname, 'node_modules')
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  }
};
