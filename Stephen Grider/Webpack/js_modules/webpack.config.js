const path = require('path'); // borrowing from nodejs
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/ // looks to see if file ends with .js - if so apply babel
      },
      {
        // make sure any file ending in .css
        // is sent through the style loader and the css loader
        // loaders are applied right to left
         /// -- replaced use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/, // check for image types
        use: [
          // 'url-loader', // url loader looks at the size of the image
          {
            // make it an object so we can pass options - limit means
            // looks for any images that are greater than 40kb, make it its own file
            // if smaller add it to the bundle
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css') // tells the extract text library
    // to find any files that were transformed by the loader in module
    // and save it into a file called style.css
    //
  ]
};

module.exports = config;
