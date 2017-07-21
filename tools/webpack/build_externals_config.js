/**
 * @file build_externals_config.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

module.exports = _ =>
  ({
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
    'react/addons': true,
    'react-addons-test-utils': true,
  });
