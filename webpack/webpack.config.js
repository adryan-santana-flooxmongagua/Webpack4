const webpakc = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/princ.js',
    output: {
        filename: 'princ.js',
        path: __dirname + '/public'
    }
}