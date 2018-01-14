require('es6-promise').polyfill();

var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require("path");

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    'webpack-dev-server/client?http://localhost:4000',
    './app/app.jsx'
  ],

  externals: {
    jquery: 'jQuery'
  },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Notes: 'app/components/Notes.jsx',
      Projects: 'app/components/Projects.jsx',
      Upload: 'app/components/Upload.jsx',
      NotesList: 'app/containers/notes-list',
      NoteDetail: 'app/containers/note-detail',
      applicationStyles: 'app/css/site.scss'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'}
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new ExtractTextPlugin('css/site.css', {
      allChunks: true
    })
  ],
  devtool: [
    'cheap-module-eval-source-map',
    'source-map'
  ]
};
