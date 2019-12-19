// DEPENDENCIAS
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const open = require('open');

// CONFIGURACION DE WEBPACK
const webpackConfig = require('../../webpack.config.js');

//  PUERTO DEL SERVIDOR
const port = 3000;

const app = express();

const webpackCompiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

// enviar el trafico a react
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, err => {
  if (!err) {
    open(`http://localhost:${port}`);
    console.log('Example app listening on port 3000!');
  }
});
