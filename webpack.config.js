function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
      }
    },
  ];
}

module.exports = [
  {
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /app.scss$/,
        use: getStyleUse('bundle.css')
      }]
    },
  },
  {
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /app.scss$/,
        use: getStyleUse('bundle.css')
      }]
    },
  },
  {
    entry: "./app.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      loaders: [{
        test: /app.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
  {
    entry: "./app.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /app.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
