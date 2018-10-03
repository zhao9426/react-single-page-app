const path = require("path");
var webpack=require("webpack");
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={

    mode: "development",
    entry:[
        './app/index.js',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname,'app/index.js')
    ],
    output:{
        path: path.resolve(__dirname, './dist'),
        filename:'[name].js',
        publicPath:'/'
    },
    devtool: "eval-source-map",
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject:'body',
            filename:'./index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ],
    mode:"development",
    stats: {
        colors: true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node-modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    }
            }
            },{
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },{
                test:/\.less/,
                use:["style-loader","css-loader","less-loader"]
            }
        ]
    }
}