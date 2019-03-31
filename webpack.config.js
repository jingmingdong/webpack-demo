//webpack  是node 语法
let path = require('path');
let htmlWebpackPlugins = require("html-webpack-plugin");
let miniCssExtractPlugin = require('mini-css-extract-plugin');
let optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
let webpack = require("webpack")
module.exports = {
    optimization: {//优化
        minimizer: [
            new optimizeCssAssetsWebpackPlugin({
                cache: true,  //缓存
                parallel: true, //并发打包压缩多个
                sourceMap: true //    源码映射调试   set to true if you want JS source maps
            }),
            new uglifyjsWebpackPlugin(),
            new webpack.ProvidePlugin({
                $:'juqery'
            })
        ]
    },
    devServer: {
        port: "8080",
        progress: true,
        contentBase: "./dist",
    },
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "bundle[hash].js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [ // 数组 放着webpack 插件
        new htmlWebpackPlugins({
            template: "./src/index.html",
            // filename:"main.html",
            minify: { //压缩
                removeAttributeQuotes: true,//删除html双引号
                collapseInlineTagWhitespace: true,//折叠空行
            },
            hash: true,//引入 时候加hash戳 缓存
        }),
        new miniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],


    //loader pre 前面执行的；loader normal 普通的loader  内联loader liader   后置loader


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                include:path.resolve(__dirname,'./src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {//css load    load希望单一   多个load需要[]    load执行顺序是  右到左
                test: /\.css$/, use: [miniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less/, use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            
        ]
    }
} 