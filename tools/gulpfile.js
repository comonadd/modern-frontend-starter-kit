/**
 * @file gulpfile.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const path = require('path');

const gulp = require('gulp');
const rimraf = require('rimraf');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const sassConverter = require('sass-convert');
const prettier = require('gulp-prettier');

const logger = require('./util/logger');
const config = require('./config');
const constants = require('./util/constants');
const build = require('./build');
const buildWebpackConfig = require('./build_webpack_config');

gulp.task(
  'build:release',
  () => new Promise((resolve) => {
    build(constants.buildMode.RELEASE).then(resolve);
  }),
);

gulp.task(
  'build:dev',
  () => new Promise((resolve) => {
    build(constants.buildMode.DEV).then(resolve);
  }),
);

gulp.task(
  'clean',
  () => new Promise((resolve) => {
    config.pathsToRemoveWhenCleaning.forEach((filePath) => {
      console.info(`Removing "${filePath}"`);
      rimraf(filePath, () => {});
    });
    resolve();
  }),
);

gulp.task(
  'dev-server',
  () => new Promise((resolve) => {
    const webpackConfig = buildWebpackConfig(
      constants.buildMode.CONTINUOUS_DEV,
    );
    const bundler = webpack(webpackConfig);
    const webpackDevServer = new WebpackDevServer(bundler, {
      stats: webpackConfig.stats,
    });
    webpackDevServer.listen(8080, 'localhost', () => {
      logger.log('info', 'listening on http://localhost:8080/');
    });
  }),
);

gulp.task(
  'format:scripts:tools',
  () =>
    gulp
      .src(path.resolve(config.toolsDirPath, '**/*.{js,jsx}'))
      .on('data', file => logger.log('info', `formatting "${file.path}"`))
      .pipe(
        prettier({
          // Fit code within this line limit
          printWidth: 80,
          // Number of spaces it should use per tab
          tabWidth: 2,
          // Use the flow parser instead of babylon
          useFlowParser: false,
          // If true, will use single instead of double quotes
          singleQuote: true,
          // Controls the printing of trailing commas wherever possible
          trailingComma: true,
          // Controls the printing of spaces inside array and objects
          bracketSpacing: false,
        }),
      )
      .pipe(gulp.dest(config.toolsDirPath)),
);

gulp.task(
  'format:scripts:src',
  () =>
    gulp
      .src(path.resolve(config.srcDirPath, '**/*.{ts,tsx}'))
      .on('data', file => logger.log('info', `formatting "${file.path}"`))
      .pipe(
        prettier({
          parser: 'typescript',
          // Fit code within this line limit
          printWidth: 80,
          // Number of spaces it should use per tab
          tabWidth: 2,
          // Use the flow parser instead of babylon
          useFlowParser: false,
          // If true, will use single instead of double quotes
          singleQuote: true,
          // Controls the printing of trailing commas wherever possible
          trailingComma: true,
          // Controls the printing of spaces inside array and objects
          bracketSpacing: false,
        }),
      )
      .pipe(gulp.dest(config.toolsDirPath)),
);

gulp.task(
  'format:scripts',
  gulp.parallel('format:scripts:tools', 'format:scripts:src'),
);

gulp.task(
  'format:styles',
  () =>
    gulp
      .src(path.resolve(config.srcDirPath, '**/*.scss'))
      .on('data', file => logger.log('info', `formatting "${file.path}"`))
      .pipe(sassConverter({
        from: 'scss',
        to: 'scss',
      }))
      .pipe(gulp.dest(config.srcDirPath)),
);

gulp.task('format',
  gulp.parallel('format:scripts', 'format:styles'));
