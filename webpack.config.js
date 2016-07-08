module.exports = {
    entry: './src/index',
    output: {
        filename: 'index.js',
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts',
            },
        ],
    },
};
