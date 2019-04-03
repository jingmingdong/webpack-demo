let path = require("path");
let htmlWebpackPlugins = require("html-webpack-plugin");
module.exports = {
    //多入口文件
    mode:"production",
    entry: {
        main: "./src2/main.js",
        index: "./src2/index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist2'),
    },
    plugins: [
        new htmlWebpackPlugins({
            template: "./src2/index.html",
            filename: "index.html",
            chunks:['index'],
        }),
        new htmlWebpackPlugins({
            template:"./src2/main.html",
            filename:"mian.html",
            chunks:['main'], 
        })
    ]
}