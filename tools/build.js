/**
 * @file build.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const fs = require('fs');

const webpack = require('webpack');

const logger = require('./util/logger');
const config = require('./config');
const constants = require('./util/constants');
const buildWebpackConfig = require('./build_webpack_config');

/**
 * @summary
 * Build the project.
 *
 * @param {number} buildMode - The build mode.
 *
 * @return {undefined}
 */
module.exports = buildMode => new Promise(resolve => {
  process.env.NODE_ENV = config.buildMode[buildMode].nodeEnv;

  const webpackConfig = buildWebpackConfig(buildMode);

  /* Make the build directory */
  fs.mkdir(config.buildDirPath, () => {
    /* Make the output directory for the specific build mode */
    fs.mkdir(config.buildMode[buildMode].outDirPath, () => {
      /* Run Webpack */
      webpack(webpackConfig, (err, stats) => {
        if (!err) {
          /* All is good. There were no errors */
          const statsStr = stats.toString({chunks: false, colors: true});

          logger.log('info', `webpack:\n\n${statsStr}`);

          resolve();
        } else {
          /* There were some errors */
          logger.log(
            'error',
            `webpack reported some errors while compiling:\n${err}`,
          );

          resolve();
        }
      });
    });
  });
});
