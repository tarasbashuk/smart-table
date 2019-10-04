const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

  resolve: {
    extensions: ['.js', '.jsx', '.css']      
},

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
  }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}