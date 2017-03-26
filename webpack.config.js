module.exports = {
    entry: './src/index',
    output: {
        filename: 'index.js',
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};
