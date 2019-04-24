const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // this is expected to run under root path
    entry: './test/html-cache-input/test-template-config-html.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "test-template-config-html.js"
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhitespace: false
                }
            }],
        },
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
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }

        ]
    },
    target: "web",
    resolve:{
        extensions: ['.js','.vue']
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};

