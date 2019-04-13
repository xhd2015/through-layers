const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

let babelOptions = {
    "presets": [
        '@babel/preset-env',
    ]
  };

module.exports = {
    entry: {
        'electron-renderer':'./index.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
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
            test: /\.tsx?$/,
            // enforce: "pre",
            use:[
                // {
                //     loader: 'babel-loader',
                //     options: babelOptions
                //   },
                {
                loader:'ts-loader',
                options:{
                    // recompile .ts in node_modules
                    // "allowTsInNodeModules":true
                }
            }],
            exclude: /node_modules/
          },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options:babelOptions
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
        }
        ]
    },
    target: "electron-renderer",
    // target:"node",

    resolve:{
        extensions: ['.tsx', '.ts','.js','.vue'],
        alias:{
            // include 'template compiler', see here:https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
            "vue$":"./vue.esm.js",
            // 'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        // monaco
        // new MonacoWebpackPlugin({
        //     output:path.resolve(__dirname)
        // })
    ]
};

