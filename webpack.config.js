/**
 * Created by Tridev on 05-05-2017.
 */
const path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    }
};