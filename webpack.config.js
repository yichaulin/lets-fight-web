// webpack.config.js (Webpack 5)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './app/index.js', // ← 依你的實際入口調整
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? 'js/[name].[contenthash].js' : 'js/[name].js',
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    clean: true,
    chunkFormat: 'array-push',     // ← 強制使用瀏覽器可用的 chunk 格式（可不寫，但寫了更保險）
    chunkLoading: 'jsonp',         // ← 指定 chunk 載入方式
  },
  target: 'web',                   // ← 明確指定瀏覽器
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: ['autoprefixer'] },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset', // 自動在 inline/resource 間取捨；或用 'asset/resource'
      },
      {
        test: /\.(woff2?|ttf|eot|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 若前端引用了 Node 內建模組，必須手動提供 fallback（不建議，能改程式碼更好）
    // fallback: { path: require.resolve('path-browserify'), buffer: require.resolve('buffer/') },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'app/index.html' }), // 依你的檔案路徑調整
    ...(isProd ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })] : []),
  ],
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    historyApiFallback: true,
    // v5 寫法：用 setupMiddlewares 取代 before
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) return middlewares;
      // 你原本的自訂 middleware 寫在這
      return middlewares;
    },
  },
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: `${__dirname}/app/index.html`,
//     filename: 'index.html',
//     inject: true,
// });

// module.exports = {
//     mode: process.env.NODE_ENV,
//     entry: [
//         './app/index.js',
//     ],
//     output: {
//         path: `${__dirname}/public`,
//         filename: 'js/[name].[chunkhash].js',
//     },
//     devtool: 'cheap-module-source-map',
//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env', '@babel/preset-react'],
//                         plugins: ["@babel/plugin-transform-runtime"]
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.less$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'less-loader'
//                 ]
//             },
//             {
//                 test: /\.style$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     'css-loader'
//                 ]
//             }
//         ]
//     },
//     stats: {
//         colors: true,
//         errorDetails: true,
//     },
//     devServer: {
//         hot: true,
//         disableHostCheck: true,
//         port: 3000
//     },
//     plugins: [
//         HTMLWebpackPluginConfig,
//         new MiniCssExtractPlugin({
//             filename: 'css/[name].[chunkhash].css',
//         }),
//     ],
// };



