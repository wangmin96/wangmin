const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        index:'./src/index.js',
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: '8081',
        compress: true
    },
    plugins:[
        new ExtractTextPlugin("./CSS/main.css"),
        new HtmlWebpackPlugin({
            title:"index",
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html",
        })
    ],
    module:{
        rules:[{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                use:"css-loader",
                fallback:"style-loader",
                publicPath:"../"
            })}, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 5000000000000,
                    outputPath: 'images/'
                }
            }]

        },{
            test:/\.(html|htm)$/i,
            loader:'html-withimg-loader',
        }

        ]}

};
