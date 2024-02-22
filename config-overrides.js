module.exports = function override(webpackConfig) {
  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias,
    "@ledgerhq/devices/hid-framing": "@ledgerhq/devices/lib/hid-framing"
  };
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  return webpackConfig;
};
