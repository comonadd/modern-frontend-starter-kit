/**
 * @file build_style_module_rules.js
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

const ExtractTextWebpackPlugin =
  require('extract-text-webpack-plugin');

const config = require('../config');

const buildStylesUseOption = buildModeConfig => ([
  {
    loader: 'css-loader',
    options: {
      importLoaders: 0,
      sourceMap: buildModeConfig.stylesSourceMapEnabled,
      modules: true,
      minimize: buildModeConfig.minimize,
      camelCase: 'dashes',
      discardComments: { removeAll: true },
      localIdentName: buildModeConfig.stylesLocalIdentName,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: [config.srcDirPath, config.nodeModulesDirPath],
    },
  },
]);

module.exports = buildModeConfig => ({
  test: /\.scss$/,
  use: buildModeConfig.optimize
    ? ExtractTextWebpackPlugin.extract({
      use: buildStylesUseOption(buildModeConfig),
      fallback: 'style-loader',
    })
    : [{ loader: 'style-loader' }, ...buildStylesUseOption(buildModeConfig)],
});
