var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'webpack-espower!ts',
            },
        ],
    },
};
