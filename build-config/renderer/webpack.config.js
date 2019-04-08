const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: [
        path.resolve(__dirname, "../../src/main.renderer.js"),
        // path.resolve(__dirname, "src/vue.starter.ts")
    ],
    output: {
        filename: "main.renderer.js",
        path: path.resolve(__dirname, "../../dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    configFile: "build-config/renderer/tsconfig.json"
                },
                exclude: /node_modules/,
            },
            // {
            //     test: /\.ts$/,
            //     enforce: "pre",
            //     use: [{
            //         loader: 'tslint-loader',
            //         options: {
            //             // allowTsInNodeModules: true
            //             appendTsSuffixTo: [/\.vue$/]
            //         }
            //     }],
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        // will be used when search import
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: 'development',
    target: 'electron-renderer',
    plugins: [
        // ensure you have this plugin
        new VueLoaderPlugin()
    ]
}
