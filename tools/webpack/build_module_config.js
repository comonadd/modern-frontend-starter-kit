/**
 * @file build_module_config.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

/**
 * The list of rules to be inserted into the Webpack configuration.
 * @type {[string]}
 */
const rulesScripts = [
  './build_script_module_rules',
  './build_style_module_rules',
  './build_img_module_rules',
];

/**
 * @summary
 * Build `module` Webpack configuration option
 *
 * @param {object} buildModeConfig - The build mode configuration.
 *
 * @return {object}
 */
/* eslint-disable */
module.exports = buildModeConfig => ({
  rules: rulesScripts.map(path => require(path)(buildModeConfig)),
});
/* eslint-enable */
