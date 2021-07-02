const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: true,
});

module.exports = {
    mode: process.env.NODE_ENV,
    entry: [
        './app/index.js',
    ],
    output: {
        path: `${__dirname}/public`,
        filename: 'js/[name].js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'less-loader'
                ]
            },
            {
                test: /\.style$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    },
    stats: {
        colors: true,
        errorDetails: true,
    },
    devServer: {
        hot: true
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
};