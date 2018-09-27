const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [path.join(__dirname, 'src'), 'node_modules'],// add a directory search src/* over node_modules/
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new VueLoaderPlugin()
    ],
    mode: 'development'
};