var path = require('path')
var webpack = require('webpack')

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
}

module.exports = {
    mode: 'development',
    entry: {
        'react-components': PATHS.src + '/index.tsx'
    },
    output: {
        path: PATHS.build,
        filename: 'index.js',
        library: 'ReactComponents',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: 'ts-loader' },
                    { loader: "tslint-loader" },
                ],
                exclude: /demo/
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: "babel-loader" },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    },
                ]
            },
            {
            test: /\.css$/,
                use: [
                    { loader: "style-loader"},
                    { loader: "css-loader" }
                ]
            },
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/test\.ts$/),
    ],
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
        },
	    extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "styled-components": {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styledComponents",
            root: "styledComponents"
        }
    }
}