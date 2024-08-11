"use strict";
const webpack = require("webpack");

/* eslint-disable no-unused-vars */
module.exports = (config) => {
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /^tippy\.js$/,
      "tippy.js/dist/tippy-bundle.umd.min.js"
    )
  );
  return config;
};
