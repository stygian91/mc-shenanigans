const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
        title: 'Minecraft Shenanigans',
        template: './html/index.html',
    }),
];

if (!isDev) {
    plugins.push(new UglifyJSPlugin({
        sourceMap: isDev,
    }));
}

const devtool = isDev ? 'eval' : false;

module.exports = {
    mode: isDev ? 'development' : 'production',

    entry: [
        'babel-polyfill',
        './js/bootstrap.js'
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '..', '..', 'public'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            require('@babel/plugin-proposal-object-rest-spread'),
                            require('@babel/plugin-proposal-class-properties'),
                        ],
                    }
                }
            },

            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins,

    devtool,
}
