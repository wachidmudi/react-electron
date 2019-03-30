const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

module.exports = () => {
  // Define express
  const app = express();

  //Setup for plugins
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ];

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

  config.entry = ['webpack-hot-middleware/client', config.entry];

  const compiler = webpack(config);

  const statsConf = {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  };

  // Set hot reload middleware if not in production
  app.use(
    webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: statsConf
    })
  );

  app.use(webpackHotMiddleware(compiler));

  // Serve statistic
  app.use(express.static(__dirname));
  // Serve index
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
  // Then start server
  app.set('port', 8080);

  app.listen(8080, '0.0.0.0', err => {
    if (err) {
      console.log(err);
    }
    console.info(
      '==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.',
      8080,
      8080
    );
  });
};
