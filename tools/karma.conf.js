/**
 * @file karma.conf.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const constants = require('./constants');
const config = require('./config');
const buildWebpackConfig = require('./build_webpack_config');

module.exports = karmaConfig => karmaConfig.set({
  // The base path
  basePath: config.rootDirPath,

  // Browsers to use
  browsers: ['PhantomJS2'],

  // Testing frameworks to use
  frameworks: ['mocha', 'chai'],

  // Tests entry points
  files: [
    'src/**/*.spec.tsx',
  ],

  // Preprocessors to use for each test file
  preprocessors: {
    'src/**/*.spec.tsx': ['webpack', 'sourcemap'],
  },

  // Reporters
  reporters: ['nyan'],

  // Nyan reporter configuration
  nyanReporter: {
    suppressErrorHighlighting: true,
  },

  // Plugins to load
  plugins: [
    'karma-mocha',
    'karma-phantomjs2-launcher',
    'karma-sourcemap-loader',
    'karma-webpack',
    'karma-nyan-reporter',
    'karma-chai',
  ],

  // Webpack preprocessor configuration
  webpack: buildWebpackConfig(constants.buildMode.TESTS),
  webpackMiddleware: {
    noInfo: false,
  },

  // Other settings
  port: 9876,
  colors: true,
  logLevel: karmaConfig.LOG_INFO,
  autoWatch: true,
  singleRun: false,
});
