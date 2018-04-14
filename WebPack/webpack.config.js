const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob=require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require("webpack");

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
            title:"wangmin",
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html",
        }),
        new PurifyCSSPlugin({
            path:glob.sync(path.join(_dirname,'src/*.html'))
        }),
        require('autoprefixer'),
        new webpack.BannerPlugin('wangmin '),
    

    ],
    module:{
        rules:[{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                use:[{
                    loader:"css-loader",
                    options:{importLoaders :1 }
                },'postcss-loader'],
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
        },{
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{presets:'evn'}
            }
        },{
        
            test:/\.scss$/,
            ues:ExtractTextPlugin,extract:[{
                fallback: 'style-loader',
                use:['css-loader','sass-loader']
            }]
        
        }
        ]},
        watchOptions:{
            poll : 1000,
            aggregateTimeout: 500,
            ignored: /node_modules/
        },
        optimization:{
            splitChunks:{
                filename:'assets/js/jquery.js',
                cacheGroups:{
                    jquery:{
                      chunks:'initial',
                      name:'jquery'
                    }  
                } 
            }
        }
};
