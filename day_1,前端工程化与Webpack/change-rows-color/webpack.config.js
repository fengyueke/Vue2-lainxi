const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 在开发阶段需要将devtool设置为 eval-source-map
    // 报错时将src下的js生成在dist下的js文件提示的行号相同
    // 发布时需要关闭，否则有暴露源码的危险
    // devtool: 'eval-source-map',
    // 发布时将devtool设置为 nosources-source-map 或直接关闭SourceMap
    devtool: 'nosources-source-map',
    // mode用来指定构建模式，可选值又 development和 production
    // 开发时，用development ，因为开发追求速度
    // 上线时，相反
    mode: 'development',
    // entry 指定要处理哪个文件
    entry: path.join(__dirname, './src/index1.js'),
    // output 指定生成文件存放在哪里
    output: {
        // 存放到目录
        path: path.join(__dirname, './dist'),
        // 生成的文件名
        filename: 'js/bundle.js'
    },
    devServer: {
        static: './',
        open: true, // 初次打包后，自动打开浏览器
        port: 80, // 实时打包所使用的主机地址
        host: '127.0.0.1', // 指定运行的主机地址
    },
    plugins: [
        new HtmlPlugin({
            // 指定要复制哪个文件
            template: './src/index.html',
            // 指定复制出来文件名和存放路径
            filename: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: { // 所有第三方文件模块匹配规则
        rules: [ // 文件后缀名的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=2370&outputPath=images'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, //不将注释提取到单独的文件中
            }),
        ],
    },
    resolve: {
        alias: {
            // 告诉 webpack 程序员写的代码中，@代表 src 这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}