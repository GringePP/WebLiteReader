let path = require('path');
module.exports = {

    entry: './app/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "bundle.js",
        publicPath: 'build/'
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
                test: /\.css|scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './app/')
            },
            {
                test: /\.png|jpg$/,
                loader: 'url-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, './app/asset/')
            }
        ]
    }


};