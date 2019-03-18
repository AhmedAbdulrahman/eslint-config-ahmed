"use strict";

const baseConfig = require(".");

module.exports = {
  root: true,
  plugins: ["import", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  rules: Object.assign({}, baseConfig({ import: true }), {
    "prettier/prettier": "error",
  }),
};
