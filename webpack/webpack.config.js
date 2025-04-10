const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/princ.js',
    output: {
        filename: 'princ.js',
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({
                
            })
        ]
    },
    module: {
        rules: [
          {
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader',
                 'css-loader',
                 'sass-loader',
                ],
          },
          // outras regras...
        ],
      },
}