const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './assets/js/index.js',
    output: {
        path: path.join(__dirname, '/priv/static'),
        filename: 'js/app.js',
        publicPath: '',
    },
    resolve: {
        modules: [
            'node_modules',
            'assets/js'
        ],
        extensions: ['.js', '.jsx','.json'],
        alias: {
            phoenix: path.join(__dirname, '/deps/phoenix/priv/static/phoenix.js'),
            phoenix_html: path.join(__dirname, '/deps/phoenix_html/priv/static/phoenix_html.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'}
                ]
            }
        ]
    }
};