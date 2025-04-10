const webpakc = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/princ.js',
    output: {
        filename: 'princ.js',
        path: __dirname + '/public'
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ]
    ,
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
               // 'style-loader',
                 'css-loader'
                ],
          },
          // outras regras...
        ],
      },
}