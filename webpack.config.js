const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: '/src/main.js',
    output: {
        filename: "main.js",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
            },
        ],
    },
    externals: [nodeExternals()]
};