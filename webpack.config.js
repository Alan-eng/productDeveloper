const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const postcssCustomMedia = require('postcss-custom-media');
var path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'), // without output webpack livereload doesn't work
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' //The style-loader injects the styles lazily making them useable on-demand via style.use() / style.unuse()
                    },
                    {
                        loader: 'css-loader', // interprets @import and url() like import/require() and will resolve them. I think it's about what is inside css-file
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     ident: 'postcss',
                        //     plugins: () => [
                        //     postcssCustomMedia(
                        //         /* pluginOptions */
                        //         {
                        //             importFrom: './src/themes/variables.css' // => @custom-selector --small-viewport (max-width: 30em);
                        //         }
                        //         )
                        //     ],
                        // }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: false,
        hot: true
    },
    plugins: [
        htmlPlugin, //inserts in html our bundle srcipt
        new webpack.HotModuleReplacementPlugin()
    ]
};

// 'react-css-modules', //react-css-modules is a higher-order React component, however this approach has a measurable performance penalty
// https://www.javascriptstuff.com/webpack-hmr-tutorial/  -  do not forget to add:
//      if (module.hot) {
//           module.hot.accept();
//         }    and read how Webpack HMR works on dev-server and on express-server
// https://medium.com/code-oil/burning-questions-with-answers-to-why-webpack-dev-server-live-reload-does-not-work-6d6390277920 - this one I haven't read =(