const path = require('path');

module.exports = {
    // this is expected to run under root path
    entry: './test/electron-main-reactive-editor/loader/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "electron-main.js"
    },
    module: {
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
        ]
    },
    target: "electron-main",
    resolve:{
        extensions: ['.js']
    }
};

