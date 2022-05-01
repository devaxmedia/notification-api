const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',

    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "")
    },

    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, "src" , "index.html")})
    ]
}