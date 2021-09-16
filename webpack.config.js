const path = require('path')

const CleanPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',

    context: __dirname,

    entry: './src/index.js',

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/'),
    },

    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },

        extensions: [
            '.js',
            '.vue',
        ],
    },

    devtool: 'inline-source-map',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', {
                        modules: false,
                    }]],
                },
            }],
        }, {
            test: /\.vue$/,
            use: [{ loader: 'vue-loader' }],
        }]
    },

    plugins: [
        new CleanPlugin([
            '**/*',
        ], {
            root: path.resolve(__dirname, 'dist/'),
            verbose: false,
        }),
        new VueLoaderPlugin(),
    ],
}
