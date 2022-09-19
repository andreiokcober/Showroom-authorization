const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  //  plugins: [ new CopyPlugin({
  //   patterns: [
  //       {
  //         from: path.resolve(__dirname, 'src/asset'),
  //         to:   path.resolve(__dirname,'dist/asset')
  //       }
  //     ]
  //   })
  // ],
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    static:{
      directory: path.join(__dirname,'dist') 
    },
    compress:true,
    port:4200
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
     new CopyPlugin({
      patterns: [
        { from: "./src/asset", to: "asset" },
      ],
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module:{
    rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
  ],
  },
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //      'file-loader',
      //    ],
      // }
    ]
  }
}