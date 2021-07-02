const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: true,
});

module.exports = {
    mode: 'production',
    entry: [
        './app/index.js',
    ],
    output: {
        path: `${__dirname}/public`,
        filename: 'js/[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig],
};