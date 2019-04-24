const path = require('path')


module.exports = {
    entry: [
        path.resolve(__dirname, "../../src/main.ts"),
        // path.resolve(__dirname, "src/vue.starter.ts")
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../../dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: "build-config/main/tsconfig.json"
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file)
                )
            }
        ]
    },
    resolve: {
        // will be used when search import
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development',
    target: 'electron-main',
    devtool: "inline-source-map",
}
