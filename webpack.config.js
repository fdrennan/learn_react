const path = require('path')

const pathName = path.join(__dirname, 'public')

console.log(`Building and bundling in ${pathName}`);

module.exports = {
    entry: './src/App.js',
    mode: 'development',
    output: {
        path: pathName,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: pathName
    }
};

// loader


