/**
 * @file uglifyjs.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const webpack = require('webpack');

module.exports = buildModeConfig => (
  buildModeConfig.minimize ? new webpack.optimize.UglifyJsPlugin({
    compress: {
      // Optimize property access: a["foo"] → a.foo
      sequences: true,
      // Discard unreachable code
      properties: true,
      // Discard “debugger” statements
      dead_code: true,
      // Some unsafe optimizations (see below)
      drop_debugger: true,
      // Optimize if-s and conditional expressions
      unsafe: false,
      // Optimize comparisons
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
    output: {
      comments: false,
    },
  }) : undefined
);
