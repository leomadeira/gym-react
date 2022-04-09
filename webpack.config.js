const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development':'production',
    devtool: isDevelopment ?  'eval-source-map' : 'source-map', // AJUDA A DEBUGAR O CODIGO INDICANDO A LINHA REAL DO CODIGO PELO DEVTOOL
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        port: 3000,
        // Funciona para versão 4.0.0
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    }
};