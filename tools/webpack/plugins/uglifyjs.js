/**
 * @file uglifyjs.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const webpack = require('webpack');

module.exports = buildModeConfig => (
  buildModeConfig.minimize ? new webpack.optimize.UglifyJsPlugin({
    compress: {
      // Disable support for IE8
      screw_ie8: true,
      // Optimize conditionals
      conditionals: true,
      // Evaluate constant expressions
      comparisons: true,
      // Optimize boolean expressions
      evaluate: true,
      // Optimize loops
      booleans: true,
      // Drop unused variables/functions
      loops: true,
      // Hoist function declarations
      unused: true,
      // Hoist variable declarations
      hoist_funs: true,
      // Optimize if-s followed by return/continue
      hoist_vars: false,
      // Join var declarations
      if_return: true,
      // Try to cascade `right` into `left` in sequences
      join_vars: true,
      // Drop side-effect-free statements
      cascade: true,
      // Warn about potentially dangerous optimizations/code
      side_effects: true,
      // Global definitions
      global_defs: {
        // To be added...
      },
      // Disable warnings
      warnings: false,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  }) : undefined
);
