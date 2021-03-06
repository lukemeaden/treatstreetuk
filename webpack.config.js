const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + '/src/components/AppWrapper/AppWrapper',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(pdf|jpe?g|gif|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    },
                ],
            },
        ]
    },
    output: {
        publicPath: "/",
        path: __dirname + '/docs'
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "./index.html"
        })
    ]
};