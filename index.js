"use strict";

const builtinRules = require("./rules/builtin");
const reactRules = require("./rules/react");
const importRules = require("./rules/import");

function baseConfig({
  builtin = true,
  import: import_ = false,
  react = false,
} = {}) {
  return Object.assign(
    builtin ? builtinRules : {},
    import_ ? importRules : {},
    react ? reactRules : {}
  );
}

module.exports = baseConfig;
