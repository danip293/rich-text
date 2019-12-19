const webpack = require('webpack');
const path = require('path');

const PATHS = {
  index: path.resolve(__dirname, 'src/index'),
  build: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', PATHS.index],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // https://webpack.js.org/plugins/hot-module-replacement-plugin/
    // para webpack v4 esto ya no se utiliza, ahora esta en el nodo de optimisaciones
    // new webpack.NamedModulesPlugin(), => not used like this anymore
    // new webpack.NoEmitOnErrorsPlugin(), => not used like this anymore
    // new webpack.optimize.CommonsChunkPlugin({ => not used like this anymore
    // name: 'vendor',
    // children: true,
    // minChunks: 2,
    // async: true,
    // }),
    // new webpack.optimize.ModuleConcatenationPlugin(), => not used like this anymore
  ],

  // optimizaciones (nuevo nodo)  referencia https://dev.to/flexdinesh/upgrade-to-webpack-4---5bc5
  optimization: {
    // namedModules: true, // NamedModulesPlugin()
    // splitChunks: {
    //   // CommonsChunkPlugin()
    //   name: 'vendor',
    //   minChunks: 2,
    // },
    noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    // concatenateModules: true, //ModuleConcatenationPlugin
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'), // Aplique cargadores a la cantidad mínima de módulos necesarios
        use: [
          {
            loader: 'babel-loader',
          },
          // { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
