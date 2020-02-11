const path = require('path');

module.exports = {
    //arquivo de entrada
    entry: path.resolve(__dirname, 'src', 'index.js'),
    //caminho de onde ele ira jogar o BUNDLE(código transpilado pelo webpack, codigo que o javascript entende)
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules:
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'},
                ]
            }, {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
};