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
                test: /\.(ts|tsx)$/,
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
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Add .js extension as well, for compatibility with Babel
    },
    externals: [nodeExternals()]
};