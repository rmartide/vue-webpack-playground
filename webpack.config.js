const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = env => {
    // Exporting like this allows us to execute webpack from the console with options like --env.NODE_ENV=local or --env.production and access here    

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
        devServer: {
            contentBase: './dist'
        },
        resolve: {
            extensions: ['*', '.js', '.vue'],
            modules: [path.join(__dirname, 'src'), 'node_modules'],// add a directory search src/* over node_modules/
            alias: {
                components: path.resolve(__dirname, 'src/components')
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: "style-loader" // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: "style-loader" // creates style nodes from JS strings
                        },
                        {
                            loader: "css-loader" // translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // compiles Sass to CSS
                        }
                    ]
                },
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './index.html' }),
            new VueLoaderPlugin(),
            new CleanWebpackPlugin(['dist'])
        ]
    }
};