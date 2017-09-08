let path = require('path');
module.exports = {

    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './app/'),
                query: {
                    presets: ['latest', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            }
        ]
    }


};