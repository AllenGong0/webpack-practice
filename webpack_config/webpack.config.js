const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const keysTransformer = require('ts-transformer-keys/transformer').default;
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// function myPlugin(options){
//   console.log("this is my plugin",options)
// }
// myPlugin.prototype.
class myPlugin{
  constructor(options){
    this.options = options
  }
  apply = function(compile){
    console.log("plugin exec",this.options)
  }
}
module.exports = {
  // entry: {
  //   app:'./src/index.js',
  // },
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  resolveLoader:{
    modules: [
      path.resolve(__dirname,'../loaders'),
      'node_modules'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'../dist'),
  },
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true,
    // stats: 'errors-only',
    overlay: true, // 编译出现错误时，将错误直接显示在页面上
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader' // 将源文件加载为字符串
      },
      {
        test: /\.png$/,
        loader: 'custom-loader'
      },
      {
        test: /\.png$/,
        loader: 'custom-loader2'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   loader: 'file-loader', // 将文件复制到打包后的文件夹内
      //   options: {
      //     name: '[name]_[hash].[ext]',
      //     outputPath: 'imges/'
      //   }
      // },
      {
        test: /\.png$/,
        loader: 'url-loader' // 将文件转换为 base64-URL 减少http请求数量
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader', // or 'awesome-typescript-loader'
        options: {
          // make sure not to set `transpileOnly: true` here, otherwise it will not work
          getCustomTransformers: program => ({
              before: [
                  keysTransformer(program)
              ]
          })
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'public/index.html'
    }),
    new myPlugin({ww:1}),
    new myPlugin({ss:22}),
    //热更新
    new webpack.HotModuleReplacementPlugin(),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //       messages: [`Your application is running: http://localhost:9000/`],
    //   },
    //   // clearConsole: true,
    // })
  ]

};