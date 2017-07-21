/**
 * @file uglifyjs.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const webpack = require('webpack');

module.exports = buildModeConfig =>
  buildModeConfig.minimize ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        // join consecutive statemets with the “comma operator”
        // optimize property access: a["foo"] → a.foo
        sequences: true,
        // discard unreachable code
        properties: true,
        // discard “debugger” statements
        dead_code: true,
        // some unsafe optimizations (see below)
        drop_debugger: true,
        // optimize if-s and conditional expressions
        unsafe: false,
        // optimize comparisons
        conditionals: true,
        // evaluate constant expressions
        comparisons: true,
        // optimize boolean expressions
        evaluate: true,
        // optimize loops
        booleans: true,
        // drop unused variables/functions
        loops: true,
        // hoist function declarations
        unused: true,
        // hoist variable declarations
        hoist_funs: true,
        // optimize if-s followed by return/continue
        hoist_vars: false,
        // join var declarations
        if_return: true,
        // try to cascade `right` into `left` in sequences
        join_vars: true,
        // drop side-effect-free statements
        cascade: true,
        // warn about potentially dangerous optimizations/code
        side_effects: true,
        // global definitions
        warnings: true,
        global_defs: {},
      },
      output: {comments: false},
    }) : undefined;
